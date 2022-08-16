<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Executors\Action_Executor_Base;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Actions\Conditions\Condition_Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Actions handler class class
 */
class Action_Handler {

	public $form_id          = null;
	public $request_data     = array();
	public $form_actions     = array();
	public $is_ajax          = false;
	private $form_conditions = array();
	private $form_events     = array();

	/**
	 * Data for actions
	 */
	public $size_all;
	public $response_data = array();

	public $context = array();

	/** @var bool|int Current Action ID */
	public $current_position = false;

	/** @var string */
	public $current_flow_handler = '';

	/**
	 * @var array Action IDs that were executed without errors
	 */
	protected $passed = array();

	/**
	 * @var array Action IDs that were skipped due to a condition not matching
	 */
	protected $skipped = array();

	public function get_form_id() {
		return (int) $this->form_id;
	}

	/**
	 * @param $form_id
	 *
	 * @return Action_Handler
	 */
	public function set_form_id( $form_id ) {
		if ( ! $form_id || $form_id === $this->form_id ) {
			return $this;
		}
		$this->form_id = $form_id;
		$this->set_form_actions();

		return $this;
	}

	public function add_request( $request ): Action_Handler {
		$this->request_data = array_merge( $this->request_data, $request );

		return $this;
	}

	/**
	 * Set form actions,
	 * which were saved in form meta
	 *
	 * @return Action_Handler
	 */
	public function set_form_actions() {
		$form_actions = Plugin::instance()->post_type->get_actions( $this->form_id );

		foreach ( $form_actions as $form_action ) {
			try {
				list( $action ) = $this->save_form_action( $form_action );
				$action->on_register_in_flow();
			} catch ( Repository_Exception $exception ) {
				continue;
			}
		}

		return $this;
	}

	/**
	 * @param $form_action
	 *
	 * @return Base[]|Condition_Manager[]
	 * @throws Repository_Exception
	 */
	public function save_form_action( $form_action ): array {
		$type = $form_action['type'];

		if ( ! ( $form_action['is_execute'] ?? true ) ) {
			throw new Repository_Exception( 'This action is turned off' );
		}

		/** @var Base $action */
		$action = jet_form_builder()->actions->get_action_clone( $type );

		$id         = $form_action['id'];
		$settings   = $form_action['settings'][ $type ] ?? $form_action['settings'];
		$conditions = $form_action['conditions'] ?? array();
		$operator   = $form_action['condition_operator'] ?? 'and';
		$events     = $form_action['events'] ?? array();

		/**
		 * Save action settings to the class field,
		 * it allows to not send action settings
		 * in action hook
		 */
		$action->_id      = $id;
		$action->settings = $settings;

		$condition = new Condition_Manager();
		$condition->set_conditions( $conditions );
		$condition->set_condition_operator( $operator );

		$this->form_conditions[ $id ] = $condition;
		$this->form_actions[ $id ]    = $action;
		$this->form_events[ $id ]     = Events_List::create(
			array_merge( $events, $action->get_required_events() )
		);

		return array( $action, $condition );
	}

	/**
	 * Doesn't throw an exception if there are no actions
	 *
	 * Don't call manually.
	 * Use jet_fb_events()->execute() instead.
	 *
	 * @param Base_Executor $executor
	 *
	 * @return $this
	 * @throws Action_Exception
	 */
	public function soft_run_actions( Base_Executor $executor ): Action_Handler {
		if ( ! count( $executor ) ) {
			return $this;
		}
		$this->run_actions( $executor );

		return $this;
	}

	/**
	 * Don't call manually.
	 * Use jet_fb_events()->execute() instead.
	 *
	 * @param Base_Executor $executor
	 *
	 * @throws Action_Exception
	 */
	public function run_actions( Base_Executor $executor ) {
		if ( ! count( $executor ) ) {
			throw new Action_Exception( 'failed', 'Empty actions' );
		}

		foreach ( $executor as $action ) {
			$this->process_single_action( $action );
		}

		/**
		 * End the cycle
		 */
		$this->set_current_action( false );
	}

	private function process_single_action( Base $action ) {
		/**
		 * Start the cycle
		 *
		 * @var int current_position
		 */
		$this->set_current_action( $action->_id );

		try {
			/**
			 * Check conditions for action
			 */
			$this->get_current_condition_manager()->check_all();
		} catch ( Condition_Exception $exception ) {
			/**
			 * We save the ID of the current action,
			 * for possible logging of form entries
			 */
			$this->skipping_current();

			return;
		}

		/**
		 * Process single action
		 */
		$action->do_action( $this->request_data, $this );

		/**
		 * We save the ID of the current action,
		 * for possible logging of form entries
		 */
		$this->passing_current();
	}

	/**
	 * Unregister notification by id
	 *
	 * @param $key
	 *
	 * @return Action_Handler [description]
	 */
	public function unregister_action( $key ) {
		if ( is_numeric( $key ) && isset( $this->form_actions[ $key ] ) ) {
			unset( $this->form_actions[ $key ] );
			unset( $this->form_conditions[ $key ] );

			return $this;
		}
		foreach ( $this->form_actions as $index => $action ) {
			if ( $key === $action->get_id() ) {
				unset( $this->form_actions[ $index ] );
				unset( $this->form_conditions[ $index ] );

				return $this;
			}
		}

		return $this;
	}

	/**
	 * Returns all registered notifications
	 *
	 * @return Base[] [description]
	 */
	public function get_all() {
		return $this->form_actions;
	}

	public function get_inserted_post_id( $action_id = 0 ) {
		$default_post_id = absint( $this->response_data['inserted_post_id'] ?? 0 );

		if ( ! $action_id ) {
			return $default_post_id;
		}

		$action_id = absint( $action_id );

		if ( empty( $this->response_data['inserted_posts'] ) ) {
			return $default_post_id;
		}

		foreach ( $this->response_data['inserted_posts'] as $posts ) {
			if ( $action_id === $posts['action_id'] ) {
				return $posts['post_id'];
			}
		}

		return $default_post_id;
	}

	public function add_response( $values ) {
		Plugin::instance()->form_handler->add_response_data( $values );
	}

	public function get_context( $action_slug, $property = '' ) {
		$context = $this->context[ $action_slug ] ?? array();

		return $property ? $context[ $property ] ?? false : $context;
	}

	public function add_context( $action_slug, $context ) {
		$this->context[ $action_slug ] = array_merge( $this->get_context( $action_slug ), $context );

		return $this;
	}

	public function add_context_once( string $action_slug, array $context ) {
		$action_context = $this->get_context( $action_slug );

		if ( ! $action_context ) {
			$this->add_context( $action_slug, $context );

			return $this;
		}

		foreach ( $context as $name => $value ) {
			if ( isset( $action_context[ $name ] ) ) {
				unset( $context[ $name ] );
			}
		}
		$this->add_context( $action_slug, $context );

		return $this;
	}

	public function in_loop(): bool {
		return false !== $this->current_position;
	}

	public function in_loop_or_die() {
		if ( $this->in_loop() ) {
			return;
		}

		wp_die(
			esc_html( 'The action loop has not been started, see ' . self::class . '::run_actions()' ),
			__METHOD__,
			'1.4.0'
		);
	}

	public function get_current_action(): Base {
		$this->in_loop_or_die();

		return $this->get_action_by_id( $this->get_position() );
	}

	public function get_current_condition_manager(): Condition_Manager {
		$this->in_loop_or_die();

		return $this->get_condition_by_id( $this->get_position() );
	}

	/**
	 * @param $id
	 *
	 * @return false|Base
	 */
	public function get_action_by_id( $id ) {
		return $this->form_actions[ $id ] ?? false;
	}

	/**
	 * @param $id
	 *
	 * @return false|Condition_Manager
	 */
	public function get_condition_by_id( $id ) {
		return $this->form_conditions[ $id ] ?? false;
	}

	/**
	 * @param $id
	 *
	 * @return false|Events_List
	 */
	public function get_events_by_id( $id ) {
		return $this->form_events[ $id ] ?? false;
	}

	/**
	 * For fix backward compatibility
	 *
	 * @param array $form_events
	 *
	 * @return $this
	 */
	public function merge_events( array $form_events ): array {
		foreach ( $form_events as $action_id => $event_list ) {
			$this->form_events[ $action_id ] = $event_list;
		}

		return $this->form_events;
	}

	/**
	 * @param $slug
	 *
	 * @return false|Base
	 */
	public function get_action_by_slug( $slug ) {
		foreach ( $this->form_actions as $action ) {
			/** @var Base $action */

			if ( $action->get_id() !== $slug ) {
				continue;
			}

			return $action;
		}

		return false;
	}

	/**
	 * Use jet_fb_handler()->refer
	 * @deprecated 2.1.4
	 *
	 * @return mixed|string
	 */
	public function get_refer() {
		return $this->request_data['__refer'] ?? '';
	}

	public function get_passed_actions(): array {
		return $this->passed;
	}

	public function get_skipped_actions(): array {
		return $this->skipped;
	}

	public function passing_current() {
		$this->passing_action( $this->get_position() );
	}

	public function passing_action( int $action_id ) {
		$this->passed[] = $action_id;

		return $this;
	}

	public function skipping_current() {
		$this->skipping_action( $this->get_position() );
	}

	public function skipping_action( int $action_id ) {
		$this->skipped[] = $action_id;

		return $this;
	}

	/**
	 * @param int|bool $action_id
	 *
	 * @return $this
	 */
	public function set_current_action( $action_id ) {
		$this->current_position = (int) $action_id;

		return $this;
	}

	public function get_position(): int {
		return $this->current_position;
	}

	public function start_flow( string $flow_handler ) {
		$this->current_flow_handler = $flow_handler;

		return $this;
	}

	public function end_flow() {
		$this->current_flow_handler = '';

		return $this;
	}


}

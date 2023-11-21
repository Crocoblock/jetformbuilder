<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Actions\Conditions\Condition_Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Actions handler class class
 */
class Action_Handler {

	public $form_id = null;

	/**
	 * @deprecated 3.1.0 Use jet_fb_context() instead
	 * @var Legacy_Request_Data
	 */
	public $request_data = array();
	/**
	 * @var Base[]
	 */
	public $form_actions    = array();
	public $is_ajax         = false;
	private $form_conditions = array();
	private $form_events     = array();

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

	public function __construct() {
		$this->request_data = new Legacy_Request_Data();
	}

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
		if ( ! $this->in_loop() ) {
			foreach ( $request as $name => $value ) {
				jet_fb_context()->update_request( $value, $name );
			}

			return $this;
		}

		foreach ( $request as $field_name => $value ) {
			$field_name = jet_fb_context()->get_unique_name( $field_name );

			jet_fb_context()->update_request( $value, $field_name );
		}

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
				$this->save_form_action( $form_action )->on_register_in_flow();
			} catch ( Repository_Exception $exception ) {
				continue;
			}
		}

		return $this;
	}

	/**
	 * @param $form_action
	 *
	 * @return Base
	 * @throws Repository_Exception
	 */
	private function save_form_action( $form_action ): Base {
		$type = $form_action['type'];

		if ( ! ( $form_action['is_execute'] ?? true ) ) {
			throw new Repository_Exception( 'This action is turned off' );
		}

		$action = jet_form_builder()->actions->get_action_clone( $type );

		$id       = $form_action['id'];
		$settings = $form_action['settings'][ $type ] ?? $form_action['settings'];

		/**
		 * Save action settings to the class field,
		 * it allows to not send action settings
		 * in action hook
		 */
		$action->_id      = $id;
		$action->settings = $settings;

		$this->save_action( $action, $form_action );

		return $action;
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

	public function process_single_action( Base $action ) {
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
		 * @since 3.2.0
		 */
		do_action( "jet-form-builder/before-do-action/{$action->get_id()}", $action );

		/**
		 * Process single action
		 */
		$action->do_action( jet_fb_context()->resolve_request(), $this );

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
			unset( $this->form_events[ $key ] );

			return $this;
		}
		foreach ( $this->form_actions as $index => $action ) {
			if ( $key === $action->get_id() ) {
				unset( $this->form_actions[ $index ] );
				unset( $this->form_conditions[ $index ] );
				unset( $this->form_events[ $index ] );

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

		return $this->get_action( $this->get_position() );
	}

	public function get_current_condition_manager(): Condition_Manager {
		$this->in_loop_or_die();

		return $this->get_condition_by_id( $this->get_position() );
	}

	/**
	 * @param $id
	 *
	 * @return false|Base
	 * @deprecated since 3.0.0
	 * Use \Jet_Form_Builder\Actions\Action_Handler::get_action instead
	 */
	public function get_action_by_id( $id ) {
		return $this->get_action( $id );
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
	 * @return array
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
	 * @deprecated since 3.0.0
	 * Use \Jet_Form_Builder\Actions\Action_Handler::get_action instead
	 */
	public function get_action_by_slug( $slug ) {
		return $this->get_action( $slug );
	}

	/**
	 * @param int|string $class_slug_or_id
	 *
	 * @return false|Base
	 */
	public function get_action( $class_slug_or_id ) {
		$is_number = is_numeric( $class_slug_or_id );
		$is_class  = ! $is_number && class_exists( $class_slug_or_id );

		if ( $is_number ) {
			return $this->form_actions[ $class_slug_or_id ] ?? false;
		}

		foreach ( $this->form_actions as $action ) {
			/** @var Base $action */

			if ( $is_class && is_a( $action, $class_slug_or_id ) ) {
				return $action;
			} elseif ( $is_class ) {
				continue;
			}

			if ( $action->get_id() !== $class_slug_or_id ) {
				continue;
			}

			return $action;
		}

		return false;
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
		$this->current_position = $action_id;

		return $this;
	}

	public function get_position(): int {
		return (int) $this->current_position;
	}

	public function start_flow( string $flow_handler ) {
		$this->current_flow_handler = $flow_handler;

		return $this;
	}

	public function end_flow() {
		$this->current_flow_handler = '';

		return $this;
	}

	/**
	 * @param string $action_class
	 * @param array $props
	 *
	 * @return false|Base
	 * False if action not founded or already added as hidden
	 */
	public function add_hidden( string $action_class, array $props = array() ) {
		try {
			$action = jet_form_builder()->actions->get_action( $action_class );
		} catch ( Repository_Exception $exception ) {
			return false;
		}

		if ( jet_fb_action_handler()->get_action( $action->get_id() ) ) {
			return false;
		}

		return $this->add( $action, $props );
	}

	public function add( Base $action, array $props = array() ): Base {
		$clone_action      = clone $action;
		$clone_action->_id = $this->get_unique_action_id();
		$clone_action->toggle_hidden();

		$this->save_action( $clone_action, $props );

		return $clone_action;
	}

	public function save_action( Base $action, array $props ) {
		$conditions = $props['conditions'] ?? array();
		$operator   = $props['condition_operator'] ?? 'and';
		$events     = $props['events'] ?? array();

		$condition = new Condition_Manager();
		$condition->set_conditions( $conditions );
		$condition->set_condition_operator( $operator );

		$this->form_conditions[ $action->_id ] = $condition;
		$this->form_actions[ $action->_id ]    = $action;
		$this->form_events[ $action->_id ]     = Events_List::create(
			array_merge( $events, $action->get_required_events() )
		);

		if ( ! $action->is_hidden() ) {
			return;
		}

		$this->reorder_hidden_actions();
	}

	private function reorder_hidden_actions() {
		$hidden = array();

		foreach ( $this->form_actions as $action ) {
			if ( ! $action->is_hidden() ) {
				continue;
			}
			unset( $this->form_actions[ $action->_id ] );
			$hidden[] = $action;
		}

		$this->form_actions = $hidden + $this->form_actions;
	}

	public function get_unique_action_id( int $start_from = 0 ): int {
		if ( ! array_key_exists( $start_from, $this->form_actions ) ) {
			return $start_from;
		}

		return $this->get_unique_action_id( ++$start_from );
	}

}

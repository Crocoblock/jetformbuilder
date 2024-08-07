<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Messages\Action_Messages_Manager;
use JFB_Components\Repository\Repository_Pattern_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	use Repository_Pattern_Trait;

	private $localized_actions = array();

	public function __construct() {
		add_action( 'init', array( $this, 'register_action_types' ), 99 );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'register_assets' ) );
	}

	public function rep_instances(): array {
		return array();
	}

	/**
	 * Register allowed action types
	 *
	 * @return void
	 */
	public function register_action_types() {
		$this->rep_install();

		do_action( 'jet-form-builder/actions/register', $this );
	}

	/**
	 * @param $type
	 *
	 * @return $this
	 */
	public function register_action_type( $type ) {
		$this->rep_install_item_soft( $type );

		return $this;
	}

	/**
	 * @param $type
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $type ) {
		if ( ! $type->dependence() ) {
			$this->_rep_abort_this();
		}
	}


	/**
	 * @param string $type
	 *
	 * @return Types\Base|array
	 */
	public function get_actions( $type = '' ) {
		if ( ! $type ) {
			return $this->rep_get_items();
		}

		try {
			return $this->get_action( $type );
		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}

	/**
	 * @param $type
	 *
	 * @return Types\Base
	 * @throws Repository_Exception
	 */
	public function get_action( $type ): Types\Base {
		return $this->rep_get_item( $type );
	}

	/**
	 * @param $type
	 *
	 * @return Types\Base
	 * @throws Repository_Exception
	 */
	public function get_action_clone( $type ): Types\Base {
		return $this->rep_clone_item( $type );
	}

	public function has_action_type( $type ): bool {
		return $this->rep_isset_item( $type );
	}

	/**
	 * @param Types\Base[] $source
	 *
	 * @return array
	 */
	public function prepare_actions_data( $source ) {
		$prepared_types = array();

		foreach ( $source as $type ) {
			$type_script_name = $type->self_script_name();

			$prepared_types[] = array(
				'id'       => $type->get_id(),
				'name'     => $type->get_name(),
				'disabled' => $type->is_disabled(),
				'self'     => $type_script_name,
				'callback' => false, // should be rewritten from JS
			);
			$action_localize  = $type->action_data();

			$action_localize['__messages']           = Action_Messages_Manager::instance()->get_messages( $type );
			$action_localize['__labels']             = $type->editor_labels();
			$action_localize['__help_messages']      = $type->editor_labels_help();
			$action_localize['__unsupported_events'] = $type->unsupported_events();
			$action_localize['__supported_events']   = $type->supported_events();
			$action_localize['__global_tab']         = $type->option_name;

			if ( ! empty( $action_localize ) && $type_script_name ) {
				$this->localized_actions[ $type->self_script_name() ] = $action_localize;
			}
		}

		return $prepared_types;
	}

	public function register_action_types_assets( $handle ) {
		foreach ( $this->localized_actions as $name => $localized_action ) {
			wp_localize_script(
				$handle,
				$name,
				$localized_action
			);
		}
	}

	public function register_assets() {
		$data = self::prepare_actions_data( $this->rep_get_items() );

		wp_localize_script(
			'jet-fb-components',
			'jetFormActionTypes',
			$data
		);

		$this->register_action_types_assets( 'jet-fb-components' );
	}
}

<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.

use Jet_Form_Builder\Actions\Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	private $_types = array();

	public function __construct() {
		add_action( 'init', array( $this, 'register_action_types' ), 99 );
		add_action( 'jet-form-builder/editor-assets/after', array( $this, 'register_types_for_editor' ), 10, 2 );
	}

	/**
	 * Register allowed action types
	 *
	 * @return [type] [description]
	 */
	public function register_action_types() {

		$actions = array(
			new Types\Send_Email(),
			new Types\Insert_Post(),
			new Types\Register_User(),
			new Types\Update_User(),
			new Types\Update_Options(),
			new Types\Call_Hook(),
			new Types\Call_Webhook(),
			new Types\Redirect_To_Page(),
			new Types\Mailchimp(),
			new Types\Getresponse(),
			new Types\Active_Campaign()
		);

		foreach ( $actions as $action ) {
			$this->register_action_type( $action );
		}

		do_action( 'jet-form-builder/actions/register', $this );
	}

	/**
	 * Register new action type
	 *
	 * @param  [type] $type [description]
	 *
	 * @return [type]       [description]
	 */
	public function register_action_type( $type ) {
		if ( $type->dependence() ) {
			$this->_types[ $type->get_id() ] = $type;
		}
	}

	/**
	 * @return array
	 */
	public function get_actions() {
		return $this->_types;
	}

	/**
	 * Regsiter action types data for the editor
	 *
	 * @return [type] [description]
	 */
	public function register_types_for_editor( $editor, $handle ) {

		$prepared_types = array();

		foreach ( $this->_types as $type ) {

			$prepared_types[] = array(
				'id'       => $type->get_id(),
				'name'     => $type->get_name(),
				'callback' => false, // should be rewritten from JS
			);

			$type->action_data( $editor, $handle );

		}

		wp_localize_script( $handle, 'jetFormActionTypes', $prepared_types );

	}

}

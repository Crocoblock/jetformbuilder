<?php
namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.

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

	    $manager = new Action_Compatibility(
	        'Send_Email',
            'Insert_Post',
            'Register_User',
            'Update_User',
            'Update_Options',
            'Call_Hook',
            'Call_Webhook',
            'Redirect_To_Page'
        );

		foreach ( $manager->get_actions() as $action ) {
			$this->register_action_type( $action );
		}

		do_action( 'jet-form-builder/actions/register', $this );
	}

	/**
	 * Register new action type
	 * @param  [type] $type [description]
	 * @return [type]       [description]
	 */
	public function register_action_type( $type ) {
		$this->_types[ $type->get_id() ] = $type;
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

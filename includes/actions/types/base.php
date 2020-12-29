<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Messages_Helper_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

	use Messages_Helper_Trait;

	/**
	 * Stores the action settings
	 * from the form meta field
	 *
	 * @var array
	 */
	public $settings = array();

	public function __construct() {
		$this->set_action_messages();
	}

	abstract public function get_name();

	abstract public function get_id();

	/**
	 * @param $request array - Form data
	 * @param $handler Action_Handler
	 *
	 * @return mixed
	 */
	abstract public function do_action( array $request, Action_Handler $handler );

	public function dependence() {
		return true;
	}

	public function messages() {
		return array();
	}

	public function set_action_messages() {

		$this->messages = apply_filters(
			'jet-form-builder/message-types/' . $this->get_id(),
			$this->messages()
		);
	}

	/**
	 * Register custom action data
	 *
	 * @param $editor
	 * @param $handle
	 *
	 * @return void [type] [description]
	 */
	public function action_data( $editor, $handle ) {
	}


	public function default_settings() {
		return array();
	}


	public function is_repeater_val( $value ) {
		if ( is_array( $value ) && ! empty( $value ) ) {
			return is_array( array_shift( $value ) );
		} else {
			return false;
		}
	}


}

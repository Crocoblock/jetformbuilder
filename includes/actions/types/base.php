<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Action_Localize;
use Jet_Form_Builder\Actions\Condition_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Condition_Helper;
use Jet_Form_Builder\Classes\Messages_Helper_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

	use Messages_Helper_Trait;
	use Action_Localize;

	/**
	 * Stores the action settings
	 * from the form meta field
	 *
	 * @var array
	 */
	public $settings = array();

	/**
	 * Stores the action conditions
	 * from the form meta field
	 *
	 * @var Condition_Manager
	 */
	public $conditions;

	/**
	 * Stores the unique id of action
	 *
	 * @var integer
	 */
	public $_id;

	/**
	 * Define this variable to get the option set globally
	 *
	 * @var string
	 */
	public $option_name;

	public function __construct() {
		$this->set_action_messages();
	}

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

	public function set_condition_manager( Condition_Manager $manager ) {
		$this->condition = $manager;

		return $this;
	}

	public function is_repeater_val( $value ) {
		if ( is_array( $value ) && ! empty( $value ) ) {
			return is_array( array_shift( $value ) );
		} else {
			return false;
		}
	}

	public function action_attributes() {
		return array();
	}

	public function global_settings( $keys = array() ) {
		$response_values = array();

		foreach ( $keys as $key => $empty ) {
			$response_values[ $key ] = isset( $this->settings[ $key ] ) ? $this->settings[ $key ] : $empty;
		}
		if ( ! isset( $this->settings['use_global'] ) || ! $this->settings['use_global'] ) {
			return $response_values;
		}

		if ( ! $this->option_name ) {
			_doing_it_wrong(
				static::class . '::global_settings',
				'Please define the `option_name`',
				jet_form_builder()->get_version()
			);
		}
		$options = Tab_Handler_Manager::instance()->options( $this->option_name );

		foreach ( $keys as $key => $empty ) {
			$response_values[ $key ] = isset( $options[ $key ] ) ? $options[ $key ] : $empty;
		}
		return $response_values;
	}


}

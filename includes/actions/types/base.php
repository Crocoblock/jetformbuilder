<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Action_Localize;
use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events_List;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base implements Repository_Item_Instance_Trait {

	use Action_Localize;

	/**
	 * Stores the action settings
	 * from the form meta field
	 *
	 * @var array
	 */
	public $settings = array();

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

	/**
	 * Contains slugs of events
	 *
	 * @var array
	 */
	private $executed_on;

	public function __construct() {
		$this->set_action_messages();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	/**
	 * @param $request array - Form data
	 * @param $handler Action_Handler
	 *
	 * @return mixed
	 */
	abstract public function do_action( array $request, Action_Handler $handler );

	/**
	 * This method will affect the registration of the action.
	 * If the action is not registered,
	 * then it will not be executed/available in the editor.
	 *
	 * Used by \Jet_Form_Builder\Actions\Manager::rep_before_install_item
	 *
	 * @return bool
	 */
	public function dependence() {
		return true;
	}

	/**
	 * If this method returns false,
	 * then this action cannot be selected in the list
	 * when editing the form
	 *
	 * @return bool
	 */
	public function is_disabled(): bool {
		return false;
	}

	/**
	 * This method is run after all its settings have been initialized
	 */
	public function on_register_in_flow() {
	}


	public function on_validate( Base_Executor $executor ) {
		$this->executed_on[] = $executor->get_event()->get_id();
	}

	public function unsupported_events(): array {
		return array();
	}

	public function supported_events(): array {
		return array();
	}

	public function get_required_events(): array {
		return array();
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

	public function get_context( $property = '' ) {
		return jet_fb_action_handler()->get_context( $this->get_id(), $property );
	}

	public function add_context( $context ) {
		return jet_fb_action_handler()->add_context( $this->get_id(), $context );
	}

	public function add_context_once( $context ) {
		return jet_fb_action_handler()->add_context_once( $this->get_id(), $context );
	}

	public function unregister(): Action_Handler {
		return jet_fb_action_handler()->unregister_action( $this->_id );
	}

	/**
	 * @return false|Events_List
	 */
	public function get_events() {
		return jet_fb_action_handler()->get_events_by_id( $this->_id );
	}

	public function get_executed_events() {
		return $this->executed_on;
	}


}

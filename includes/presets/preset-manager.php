<?php


namespace Jet_Form_Builder\Presets;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Types\Base_Preset;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use Jet_Form_Builder\Presets\Types\General_Preset;

class Preset_Manager {

	use Instance_Trait;

	private $form_id;
	protected $data = null;
	protected $source = null;
	protected $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);

	public $_preset_types;
	public $manager_preset;
	private $general;


	protected function __construct() {
		$this->general = new General_Preset();
	}

	protected function set_data() {
		$this->general->set_init_data( $this->general->preset_source( $this->form_id ) );
	}

	protected function preset_types() {
		return array(
			new Dynamic_Preset(),
			$this->general,
		);
	}


	protected function set_preset_type_manager( $args ) {
		foreach ( $this->preset_types() as $type ) {
			if ( $type instanceof Base_Preset && $type->is_active_preset( $args ) ) {
				$this->manager_preset = $type;
				break;
			}
		}
	}

	protected function register_preset_type( Base_Preset $type ) {
		$this->_preset_types[] = $type;
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;
		$this->set_data();
	}


	/**
	 * Sanitize preset source
	 *
	 * @return [type] [description]
	 */
	public function sanitize_source() {
		if ( empty( $this->general->data['enabled'] ) ) {
			return true;
		}

		$this->general->set_source();

		if ( ! $this->general->source->src ) {
			return true;
		}

		return $this->general->source->on_sanitize();
	}

	/**
	 * Returns field value
	 *
	 * @param array $args
	 *
	 * @return [type] [description]
	 */
	public function get_field_value( $args = array() ) {
		$field = $args['name'];
		$this->manager_preset = null;

		$result = array(
			'rewrite' => false,
			'value'   => null,
		);

		if ( ! $field ) {
			return $result;
		}

		$this->set_preset_type_manager( $args );

		if ( $this->manager_preset instanceof Base_Preset ) {
			return $this->manager_preset->set_additional_data( $args )->get_preset_value();
		}

		return false;
	}


	/**
	 * Try to get values from request if passed
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function maybe_adjust_value( $args ) {

		$value       = isset( $args['default'] ) ? $args['default'] : false;
		$request_val = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

		if ( ! empty( $request_val[ $args['name'] ] ) ) {
			$value = $request_val[ $args['name'] ];
		}

		return $value;

	}
}
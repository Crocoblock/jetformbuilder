<?php


namespace Jet_Form_Builder\Presets\Types;


use Jet_Form_Builder\Classes\Factory;

abstract class Base_Preset {

	const SOURCES_NAMESPACE = 'Jet_Form_Builder\\Presets\\Sources\\';

	public $source;
	public $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);
	public $fields_map;
	public $data;

	protected $field;

	abstract public function get_fields_map();

	public function is_active_preset( $args ) {
		return false;
	}

	public function set_init_data( $data = array() ) {
		if ( ! empty( $data ) && empty( $this->data ) ) {
			$this->data = $data;
		}

		return $this;
	}

	public function set_additional_data( $args = array() ) {
		$this->field      = $args['name'];
		$this->fields_map = $this->get_fields_map();
		$this->source     = $this->get_source( $args );

		return $this;
	}


	public function get_source( $args ) {
		$from         = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];
		$from_manager = ( new Factory( self::SOURCES_NAMESPACE ) )->prefix( 'preset_source_' );

		return $from_manager->create_one(
			$from,
			$this->fields_map,
			$args,
			$this->data
		);
	}

}
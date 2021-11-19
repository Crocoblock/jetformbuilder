<?php


namespace Jet_Form_Builder\Presets\Types;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Post;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Query_Var;
use Jet_Form_Builder\Presets\Sources\Preset_Source_User;

/**
 * @property Base_Source source
 *
 * Class Base_Preset
 * @package Jet_Form_Builder\Presets\Types
 */
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

	/**
	 * @return string
	 */
	//abstract public function get_slug(): string;

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
		$this->field      = $args['name'] ?? '';
		$this->fields_map = $this->get_fields_map();
		$this->source     = $this->get_source( $args );

		return $this;
	}


	public function get_source( $args ) {
		$from   = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];

		/** @var Base_Source $source */
		$source = Preset_Manager::instance()->get_source_by_type( $from );

		return $source->init_source(
			$this->fields_map,
			$args,
			$this->data
		);
	}

}
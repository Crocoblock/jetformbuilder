<?php


namespace Jet_Form_Builder\Presets\Types;

use Jet_Form_Builder\Exceptions\Plain_Default_Exception;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Sources\Base_Source;

/**
 * Class Base_Preset
 * @package Jet_Form_Builder\Presets\Types
 */
abstract class Base_Preset {

	public $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);
	public $data;

	abstract public function get_fields_map();

	/**
	 * Slug to be able to overwrite preset classes.
	 *
	 * @return string
	 */
	abstract public function get_slug(): string;

	abstract public function is_unique(): bool;

	/**
	 * @param $args
	 *
	 * @throws Plain_Default_Exception
	 */
	abstract public function is_active_preset( $args );

	public function set_init_data( $data = array() ): Base_Preset {
		$this->data = $data;

		return $this;
	}

	/**
	 * @param $args array - Field attributes
	 *
	 * @return Base_Source
	 * @throws Preset_Exception
	 */
	public function get_source( $args = array() ): Base_Source {
		$from = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];

		$source = Preset_Manager::instance()->get_source_by_type( $from );

		return $source->init_source(
			$this->get_fields_map(),
			$this->data,
			$args
		)->maybe_query_source()->after_init();
	}

}

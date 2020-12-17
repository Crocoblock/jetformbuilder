<?php


namespace Jet_Form_Builder\Presets\Sources;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Presets\Types\Base_Preset;

abstract class Base_Source {

	protected $preset_type;
	protected $prop;

	public function __construct( Base_Preset $preset_type ) {
		$this->preset_type = $preset_type;
	}

	protected function can_get_preset() {
		return true;
	}

	public function __call( string $prop, array $arguments ) {
		$source = $this->preset_type->source;

		if ( isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		} elseif ( isset( $source->$prop ) ) {
			return $source->$prop;
		}

		return '';
	}

	protected function set_prop() {
		$this->prop = ! empty( $this->preset_type->field_data['prop'] ) ? $this->preset_type->field_data['prop'] : 'post_title';
	}

	public function get_result_on_prop() {
		if ( ! is_callable( array( $this, $this->prop ) ) ) {
			return $this->preset_type->result;
		}

		return call_user_func( array( $this, $this->prop ) );
	}

	public function result() {
		if ( $this->can_get_preset() ) {
			return $this->preset_type->result;
		}
		$this->set_prop();

		return $this->parse_result_value( $this->get_result_on_prop() );
	}

	public function parse_result_value( $value ) {
		// Prepare value for date field
		if ( 'date-field' === $this->preset_type->args['type'] && Tools::is_valid_timestamp( $value ) ) {
			$value = date_i18n( 'Y-m-d', $value );
		}

		if ( ! empty( $value ) ) {
			$this->preset_type->result['rewrite'] = true;
			$this->preset_type->result['value']   = $value;
		}

		return $this->preset_type->result;
	}

}
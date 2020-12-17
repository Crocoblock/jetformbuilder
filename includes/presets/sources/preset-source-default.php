<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Default extends Base_Source {

	public function result() {
		$field_data = $this->preset_type->field_data;
		$source = $this->preset_type->source;

		$key = ! empty( $field_data['key'] ) ? $field_data['key'] : false;
		$value = '';

		if ( $key && is_array( $source ) ) {
			$value = isset( $source[ $key ] ) ? $source[ $key ] : null;
		}

		$value = apply_filters( 'jet-form-builder/preset-value/default' , $value, $field_data, $this->preset_type->data );

		return $this->parse_result_value( $value );
	}

}
<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Query_Var extends Base_Source {

	public function query_source() {
		return $_GET;
	}

	public function get_prop() {
		return ! empty( $this->field_data['other']['query_var'] ) ? $this->field_data['other']['query_var'] : self::EMPTY;
	}

	public function get_result_on_prop() {
		return isset( $this->src()[ $this->prop ] ) ? $this->src()[ $this->prop ] : null;
	}
}
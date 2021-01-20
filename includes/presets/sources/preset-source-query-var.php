<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Query_Var extends Base_Source {

	public function get_source() {
		$this->src = $_GET;

		return $this;
	}

	public function set_prop() {
		$this->prop = ! empty( $this->preset_type->field_data['other']['query_var'] ) ? $this->preset_type->field_data['other']['query_var'] : '';
	}

	public function get_result_on_prop() {
		return isset( $this->src[ $this->prop ] ) ? $this->src[ $this->prop ] : null;
	}
}
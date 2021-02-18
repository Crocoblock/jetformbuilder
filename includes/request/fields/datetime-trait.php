<?php


namespace Jet_Form_Builder\Request\Fields;


trait Datetime_Trait {

	public function get_response() {
		return empty( $this->settings['is_timestamp'] ) ? $this->value : strtotime( $this->value );
	}

}
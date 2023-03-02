<?php


namespace Jet_Form_Builder\Request\Fields;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Datetime_Trait {

	public function get_response() {
		return empty( $this->settings['is_timestamp'] ) ? $this->value : strtotime( $this->value );
	}

}

<?php


namespace JFB_Modules\Block_Parsers\Fields;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Datetime_Trait {

	public function update_request() {
		if ( $this->is_complete_apply() ) {
			return;
		}

		parent::update_request();

		if ( $this->get_errors() ||
			! $this->get_value() ||
			! $this->get_setting( 'is_timestamp' )
		) {
			return;
		}

		$this->set_value( strtotime( $this->value ) );
	}


}

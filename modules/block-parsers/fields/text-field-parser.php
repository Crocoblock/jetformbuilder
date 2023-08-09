<?php


namespace JFB_Modules\Block_Parsers\Fields;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Text_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'text-field';
	}

	protected function check_response() {
		parent::check_response();

		$type = $this->settings['field_type'] ?? 'text';

		if ( empty( $this->value ) ) {
			return;
		}

		switch ( $type ) {
			case 'email':
				if ( is_email( $this->value ) ) {
					break;
				}
				$this->collect_error( 'invalid_email' );
				break;
		}
	}

}

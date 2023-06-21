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

	protected function has_error(): bool {
		$type = $this->settings['field_type'] ?? 'text';

		return ( 'email' === $type && ! is_email( $this->value ) && parent::has_error() );
	}

}

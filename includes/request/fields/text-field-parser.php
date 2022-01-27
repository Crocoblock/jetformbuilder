<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

class Text_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'text-field';
	}

	protected function has_error(): bool {
		$type = $this->settings['field_type'] ?? 'text';

		return ( 'email' === $type && ! is_email( $this->value ) && parent::has_error() );
	}

}

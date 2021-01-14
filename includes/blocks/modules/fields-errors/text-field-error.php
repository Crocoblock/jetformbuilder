<?php


namespace Jet_Form_Builder\Blocks\Modules\Fields_Errors;


class Text_Field_Error extends Base_Field_Error {

	public function get_name() {
		return 'text-field';
	}

	public function get_title() {
		return 'Text field';
	}

	public function error() {
		switch ( $this->params['field_type'] ) {
			case 'email':
				return 'Invalid email.';
			default:
				return parent::error();
		}
	}
}
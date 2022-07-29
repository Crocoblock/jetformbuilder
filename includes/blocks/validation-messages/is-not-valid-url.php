<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;

class Is_Not_Valid_Url extends Base_Message {

	public function get_id(): string {
		return 'url';
	}

	public function get_label(): string {
		return __( 'URL is not valid', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'Please enter a URL.',
			'jet-form-builder'
		);
	}
}
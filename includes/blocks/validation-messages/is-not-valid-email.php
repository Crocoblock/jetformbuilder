<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;

class Is_Not_Valid_Email extends Base_Message {

	public function get_id(): string {
		return 'email';
	}

	public function get_label(): string {
		return __( 'Email is not valid', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'The email address must contain the "@" symbol. The "%value%" address is missing the "@" character.',
			'jet-form-builder'
		);
	}
}
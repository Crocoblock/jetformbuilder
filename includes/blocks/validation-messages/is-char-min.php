<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;
use Jet_Form_Builder\Blocks\Types\Wysiwyg_Field;

class Is_Char_Min extends Base_Message {

	public function get_id(): string {
		return 'char_min';
	}

	public function get_label(): string {
		return __( 'Not enough characters', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
			Textarea_Field::class,
			Wysiwyg_Field::class
		);
	}

	public function get_initial(): string {
		return __(
			'Please lengthen this text to %this(minlength)% characters or more (you are currently using %this|length% characters).',
			'jet-form-builder'
		);
	}
}
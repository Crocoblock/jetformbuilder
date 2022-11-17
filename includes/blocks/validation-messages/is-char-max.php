<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;
use Jet_Form_Builder\Blocks\Types\Wysiwyg_Field;

class Is_Char_Max extends Base_Message {

	public function get_id(): string {
		return 'char_max';
	}

	public function get_label(): string {
		return __( 'Character limit exceeded', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
			Textarea_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'Please reduce the text length to %this(maxLength)% characters or fewer (you currently have %this|length% characters).',
			'jet-form-builder'
		);
	}


}
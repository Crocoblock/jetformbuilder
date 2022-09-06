<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;

class Has_Remaining_Chars extends Base_Message {

	public function get_id(): string {
		return 'has_remaining_chars';
	}

	public function get_label(): string {
		return __( 'Has remaining chars', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
			Textarea_Field::class,
		);
	}

	public function get_initial(): string {
		return __( 'You can enter %remaining% more characters.', 'jet-form-builder' );
	}


}
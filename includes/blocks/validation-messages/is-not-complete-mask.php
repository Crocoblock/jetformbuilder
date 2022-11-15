<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Text_Field;

class Is_Not_Complete_Mask extends Base_Message {

	public function get_id(): string {
		return 'inputmask';
	}

	public function supported_blocks(): array {
		return array(
			Text_Field::class,
		);
	}

	public function get_label(): string {
		return __( 'Input mask is not completed', 'jet-form-builder' );
	}

	public function get_initial(): string {
		return __( 'Please fill in the field according to the input mask.', 'jet-form-builder' );
	}
}
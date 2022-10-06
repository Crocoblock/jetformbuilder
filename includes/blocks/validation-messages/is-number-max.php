<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Number_Field;
use Jet_Form_Builder\Blocks\Types\Range_Field;

class Is_Number_Max extends Base_Message {

	public function get_id(): string {
		return 'number_max';
	}

	public function get_label(): string {
		return __( 'Value exceeds the maximum', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Number_Field::class,
			Range_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'Please enter a number not greater than %this(max)%. Current value %this|ifEmpty(is empty)%.',
			'jet-form-builder'
		);
	}


}
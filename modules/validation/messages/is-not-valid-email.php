<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Text_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
			'Please enter a valid email.',
			'jet-form-builder'
		);
	}
}

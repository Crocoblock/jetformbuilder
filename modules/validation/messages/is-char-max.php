<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

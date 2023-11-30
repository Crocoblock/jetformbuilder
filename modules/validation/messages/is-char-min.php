<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;
use Jet_Form_Builder\Blocks\Types\Wysiwyg_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		);
	}

	public function get_initial(): string {
		return __(
			'Please increase the text length to at least %this(minLength)% characters (you are currently using %this|length% characters).',
			'jet-form-builder'
		);
	}
}

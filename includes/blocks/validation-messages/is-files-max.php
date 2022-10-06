<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Media_Field;

class Is_Files_Max extends Base_Message {

	public function get_id(): string {
		return 'max_files';
	}

	public function get_label(): string {
		return __( 'Files limit exceeded', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Media_Field::class
		);
	}

	public function get_initial(): string {
		return __(
			'Please reduce this text to %this(max_files)% characters or less (currently you contain %this|length% characters).',
			'jet-form-builder'
		);
	}


}
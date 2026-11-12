<?php

namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Media_Field;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class File_Error_Format extends Base_Message {

	public function get_id(): string {
		return 'file_error_format';
	}

	public function get_label(): string {
		return __( 'Multiple files validation failed', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array( Media_Field::class );
	}

	public function get_initial(): string {
		return __( '%file_name%: %error_message%', 'jet-form-builder' );
	}
}

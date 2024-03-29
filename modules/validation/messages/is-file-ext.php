<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Media_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_File_Ext extends Base_Message {

	public function get_id(): string {
		return 'file_ext';
	}

	public function get_label(): string {
		return __( 'File type is not included in the allowed types list', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Media_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'The file type is not allowed.',
			'jet-form-builder'
		);
	}


}

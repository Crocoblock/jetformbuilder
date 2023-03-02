<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;

use Jet_Form_Builder\Blocks\Types\Media_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_File_Size extends Base_Message {

	public function get_id(): string {
		return 'file_max_size';
	}

	public function get_label(): string {
		return __( 'File size limit exceeded', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Media_Field::class
		);
	}

	public function get_initial(): string {
		return __(
			'The file size cannot exceed %this(max_size)|sizeFormat%.',
			'jet-form-builder'
		);
	}


}
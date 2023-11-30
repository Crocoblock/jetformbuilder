<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Media_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Files_Max extends Base_Message {

	public function get_id(): string {
		return 'max_files';
	}

	public function get_label(): string {
		return __( 'Files limit exceeded', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Media_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'Please reduce the files total to %this(max_files)% or fewer (you currently have %this|length% files).',
			'jet-form-builder'
		);
	}


}

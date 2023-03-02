<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Thumbnail_Property extends Base_Object_Property {

	public function get_id(): string {
		return '_thumbnail_id';
	}

	public function get_label(): string {
		return __( 'Post Thumbnail', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __( 'Accepts attachment ID', 'jet-form-builder' );
	}
}
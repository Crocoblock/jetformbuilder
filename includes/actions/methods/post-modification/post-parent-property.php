<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Parent_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_parent';
	}

	public function get_label(): string {
		return __( 'Post Parent', 'jet-form-builder' );
	}
}

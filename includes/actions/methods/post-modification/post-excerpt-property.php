<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Excerpt_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_excerpt';
	}

	public function get_label(): string {
		return __( 'Post Excerpt', 'jet-form-builder' );
	}

}

<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;


class Post_Content_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_content';
	}

	public function get_label(): string {
		return __( 'Post Content', 'jet-form-builder' );
	}

}
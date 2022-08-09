<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


class Post_Content_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'post_content';
	}

	public function get_label(): string {
		return __( 'Post Content', 'jet-form-builder' );
	}

}
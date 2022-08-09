<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


class Post_Excerpt_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'post_excerpt';
	}

	public function get_label(): string {
		return __( 'Post Excerpt', 'jet-form-builder' );
	}

}
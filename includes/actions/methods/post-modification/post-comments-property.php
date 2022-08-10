<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;



class Post_Comments_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'comment_status';
	}

	public function get_label(): string {
		return __( 'Post Comments Allowed', 'jet-form-builder' );
	}

}
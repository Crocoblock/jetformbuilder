<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


class Post_Date_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'post_date';
	}

	public function get_label(): string {
		return __( 'Post Date', 'jet-form-builder' );
	}

}
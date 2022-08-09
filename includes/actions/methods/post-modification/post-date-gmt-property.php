<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


class Post_Date_Gmt_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'post_date_gmt';
	}

	public function get_label(): string {
		return __( 'Post Date GMT', 'jet-form-builder' );
	}

}
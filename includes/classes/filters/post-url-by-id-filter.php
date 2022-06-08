<?php


namespace Jet_Form_Builder\Classes\Filters;


class Post_Url_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'post_url_by_id';
	}

	public function apply_macros( $value, ...$args ): string {
		return get_permalink( $value );
	}

}
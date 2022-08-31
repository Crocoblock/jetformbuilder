<?php


namespace Jet_Form_Builder\Classes\Filters;


class Post_Url_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'post_url_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		return get_permalink( $item );
	}
}
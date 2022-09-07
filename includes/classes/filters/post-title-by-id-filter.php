<?php


namespace Jet_Form_Builder\Classes\Filters;


class Post_Title_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'post_title_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		return get_the_title( $item );
	}

}
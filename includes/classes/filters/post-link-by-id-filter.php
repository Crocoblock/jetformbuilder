<?php


namespace Jet_Form_Builder\Classes\Filters;


class Post_Link_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'post_link_by_id';
	}

	public function apply_macros( $value, ...$args ): string {
		$post = get_post( $value );

		return sprintf(
			'<a href="%1$s">%2$s</a>',
			get_permalink( $post ),
			get_the_title( $post )
		);
	}

}
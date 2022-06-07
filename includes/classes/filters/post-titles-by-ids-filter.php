<?php


namespace Jet_Form_Builder\Classes\Filters;


class Post_Titles_By_Ids_Filter extends Base_Filter {

	public function get_id(): string {
		return 'post_titles_by_ids';
	}

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( ! $value || ! is_array( $value ) ) {
			return $value;
		}
		list( $delimiter ) = $args;

		return wp_kses_post( implode( $delimiter, array_map( 'get_the_title', $value ) ) );
	}

}
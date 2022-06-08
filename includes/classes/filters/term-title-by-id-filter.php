<?php


namespace Jet_Form_Builder\Classes\Filters;


class Term_Title_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'term_title_by_id';
	}

	public function apply_macros( $value, ...$args ): string {
		$term = get_term( $value );

		if ( is_wp_error( $term ) ) {
			return $value;
		}

		return $term->name;
	}

}
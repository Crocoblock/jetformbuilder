<?php


namespace Jet_Form_Builder\Classes\Filters;


class Term_Title_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'term_title_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		$term = get_term( $item );

		if ( is_wp_error( $term ) ) {
			return $item;
		}

		return $term->name;
	}
}
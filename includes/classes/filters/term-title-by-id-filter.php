<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Term_Title_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'term_title_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		$term = get_term( $item );

		if ( is_wp_error( $term ) || ! is_object( $term ) ) {
			return (string) $item;
		}

		return $term->name;
	}
}
<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @deprecated 2.1.6
 *
 * Class Post_Titles_By_Ids_Filter
 * @package Jet_Form_Builder\Classes\Filters
 */
class Post_Titles_By_Ids_Filter extends Base_Filter {

	public function get_id(): string {
		return 'post_titles_by_ids';
	}

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( empty( $value ) ) {
			return '';
		}

		if ( is_object( $value ) ) {
			$value = get_object_vars( $value );
		}

		if ( ! $value ) {
			return $value;
		}

		if ( ! is_array( $value ) ) {
			$value = array( $value );
		}

		list( $delimiter ) = $args;

		return wp_kses_post( implode( $delimiter, array_map( 'get_the_title', $value ) ) );
	}

}
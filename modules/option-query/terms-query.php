<?php


namespace JFB_Modules\Option_Query;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Terms_Query implements Option_Query_It {

	use Option_Query_Trait;

	public function rep_item_id() {
		return 'terms';
	}

	public function fetch(): \Generator {
		$taxonomy = $this->get_query( 'taxonomy' );

		if ( ! $taxonomy ) {
			return;
		}

		if ( ! $this->has_query( 'hide_empty' ) ) {
			$this->set_query( 'hide_empty', false );
		}

		$terms = get_terms(
			apply_filters_deprecated(
				'jet-form-builder/render-choice/query-options/terms',
				array( $this->get_query_params(), $this->get_settings() ),
				'3.3.0',
				'jet-form-builder/option-query/before-fetch'
			)
		);

		if ( empty( $terms ) || is_wp_error( $terms ) ) {
			return;
		}

		foreach ( $terms as $term ) {

			$item = array(
				'object_id' => $term->term_id,
				'value'     => $term->term_id,
				'label'     => apply_filters( 'jet-form-builder/render-choice/label/terms', $term->name, $term ),
			);

			$value_from = $this->get_setting( 'value_from' );

			if ( ! empty( $value_from ) ) {
				if ( isset( $term->$value_from ) ) {
					$item['value'] = $term->$value_from;
				} else {
					$item['value'] = get_term_meta( $term->term_id, $value_from, true );
				}
			}

			$calc_from = $this->get_setting( 'calc_from' );

			if ( ! empty( $calc_from ) ) {
				$item['calculate'] = get_term_meta( $term->term_id, $calc_from, true );
			}

			yield $item;
		}
	}

}

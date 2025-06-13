<?php

namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Exceptions\Preset_Exception;

if ( ! defined( 'WPINC' ) ) {
    die;
}

class Preset_Source_Term extends Base_Source {

    /**
     * Get the ID of the source.
     *
     * @return string
     */
    public function get_id() {
        return 'term';
    }

    /**
     * Query the source term based on preset data.
     *
     * @return object|WP_Term
     * @throws Preset_Exception
     */
    public function query_source() {
		$term_from = ! empty( $this->preset_data['term_from'] ) ? $this->preset_data['term_from'] : 'current_term';

		if ( 'current_term' === $term_from ) {
			$term = get_queried_object();
		} else {
			$var = ! empty( $this->preset_data['query_var'] ) ? $this->preset_data['query_var'] : '';
			$term_taxonomy = ! empty( $this->preset_data['term_taxonomy'] ) ? $this->preset_data['term_taxonomy'] : 'category';
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$term_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? absint( $_REQUEST[ $var ] ) : false;

			if ( ! $term_id ) {
				throw new Preset_Exception( 'Empty Term ID' );
			}

			$term = get_term( $term_id, $term_taxonomy );
		}

		return $term;
	}

    /**
     * Get term meta data for the queried term.
     *
     * @return mixed
     */
	public function source__term_meta() {
		$term = $this->query_source();
		return get_term_meta( $term->term_id, $this->field_data['key'], true );
	}

    /**
     * Get the parent term of the queried term.
     *
     * @return object|WP_Term
     */
	public function source__parent_term() {
		$term = $this->query_source();
		return get_term( $term->parent, $term->taxonomy );
	}
}
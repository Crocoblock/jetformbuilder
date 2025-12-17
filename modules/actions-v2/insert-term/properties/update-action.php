<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Update_Action extends Base_Term_Action {

	public function get_id(): string {
		return 'update';
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return ! empty( $modifier->source_arr['term_id'] ?? 0 );
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$taxonomy = sanitize_text_field( $this->modifier->source_arr['taxonomy'] ?? '' );

		if ( ! $this->user_can_manage_taxonomy_terms( $taxonomy ) ) {
			throw new Action_Exception(
				'failed',
				esc_html( 'You are not allowed to manage this taxonomy' )
			);
		}

		$term_id   = absint( $this->modifier->source_arr['term_id'] ?? 0 );
		$parent_id = absint( $this->modifier->source_arr['parent'] ?? 0 );
		$name      = sanitize_text_field( $this->modifier->source_arr['name'] ?? '' );
		$slug      = sanitize_title( $this->modifier->source_arr['slug'] ?? '' );
		$args      = array();

		if ( 0 === $term_id || '' === $taxonomy ) {
			throw new Action_Exception(
				'failed',
				esc_html( 'Term ID and Taxonomy are required for term update action' )
			);
		}

		if ( ! empty( $name ) ) {
			$args['name'] = $name;
		} else {
			throw new Action_Exception(
				esc_html( 'Term name is required' )
			);
		}

		if ( ! empty( $slug ) ) {
			$args['slug'] = $slug;
		}

		if ( empty( $parent_id ) ) {
			$args['parent'] = 0;
		}

		if ( is_taxonomy_hierarchical( $taxonomy ) && ! empty( $parent_id ) && 0 !== (int) $parent_id ) {
			$parent_term = get_term( $parent_id, $taxonomy );

			if ( $parent_term && ! is_wp_error( $parent_term ) ) {
				$args['parent'] = $parent_id;
			} else {
				throw new Action_Exception(
					'failed',
					esc_html( 'Invalid parent ID for term with ID ' . $term_id )
				);
			}
		}

		$result = wp_update_term(
			$term_id,
			$taxonomy,
			$args
		);

		if ( is_wp_error( $result ) ) {
			throw new Action_Exception(
				'failed',
				esc_html( $result->get_error_message() )
			);
		}

		$this->inserted_id = $result['term_id'];
	}
}

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

		$term_id   = $this->modifier->source_arr['term_id'] ?? 0;
		$taxonomy  = $this->modifier->source_arr['taxonomy'] ?? '';
		$parent_id = $this->modifier->source_arr['parent'] ?? 0;
		$name      = $this->modifier->source_arr['name'] ?? '';
		$slug      = $this->modifier->source_arr['slug'] ?? '';
		$args      = array();

		if ( 0 === $term_id || '' === $taxonomy ) {
			throw new Action_Exception(
				'failed',
				esc_html( 'Term ID and Taxonomy are required for term update action' )
			);
		}

		$args = array(
			'name' => $name,
			'slug' => $slug,
		);

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

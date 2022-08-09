<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;

class Post_Terms_Property extends Base_Post_Property {

	protected $taxonomies = array();

	public function get_prop_name(): string {
		return 'post_terms';
	}

	public function get_label(): string {
		return __( 'Post Terms', 'jet-form-builder' );
	}

	public function is_supported( Abstract_Modifier $modifier ): bool {
		return false !== strpos( $modifier->current_prop, 'jet_tax__' );
	}

	public function do_before( Abstract_Modifier $modifier ) {
		$tax = str_replace( 'jet_tax__', '', $modifier->current_prop );

		if ( ! isset( $this->taxonomies[ $tax ] ) ) {
			$this->taxonomies[ $tax ] = array();
		}

		if ( ! is_array( $modifier->current_value ) ) {
			$this->taxonomies[ $tax ][] = $this->sanitize_term( $modifier->current_value, $tax );

			return;
		}

		$this->taxonomies[ $tax ] = array_merge(
			$this->taxonomies[ $tax ],
			array_map(
				function ( $term ) use ( $tax ) {
					return $this->sanitize_term( $term, $tax );
				},
				$modifier->current_value
			)
		);
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( ! in_array( $modifier->get_action(), array( 'insert', 'update' ), true ) ) {
			return;
		}

		foreach ( $this->taxonomies as $tax => $terms ) {
			wp_set_post_terms( $modifier->inserted_post_id, $terms, $tax );
		}
	}

	protected function sanitize_term( $term, $tax ) {
		if (
			is_taxonomy_hierarchical( $tax ) ||
			(
				is_numeric( $term ) && absint( $term ) === (int) $term
			)
		) {
			return absint( $term );
		}

		return esc_html( $term );
	}
}
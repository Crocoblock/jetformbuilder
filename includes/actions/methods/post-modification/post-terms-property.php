<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;


class Post_Terms_Property extends Base_Object_Property implements Object_Dynamic_Property {

	protected $taxonomies = array();

	public function get_id(): string {
		return 'post_terms';
	}

	public function get_label(): string {
		return __( 'Post Terms', 'jet-form-builder' );
	}

	public function is_supported( string $key, $value ): bool {
		return false !== strpos( $key, 'jet_tax__' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$tax = str_replace( 'jet_tax__', '', $key );

		if ( ! isset( $this->taxonomies[ $tax ] ) ) {
			$this->taxonomies[ $tax ] = array();
		}

		if ( ! is_array( $value ) ) {
			$this->taxonomies[ $tax ][] = $this->sanitize_term( $value, $tax );

			return;
		}

		$this->taxonomies[ $tax ] = array_merge(
			$this->taxonomies[ $tax ],
			array_map(
				function ( $term ) use ( $tax ) {
					return $this->sanitize_term( $term, $tax );
				},
				$value
			)
		);
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		/** @var Base_Post_Action $action */
		$action = $modifier->get_action();

		if ( is_a( $action, Trash_Action::class ) ) {
			return;
		}

		$id = $action->get_inserted();

		if ( ! $id ) {
			return;
		}

		foreach ( $this->taxonomies as $tax => $terms ) {
			wp_set_post_terms( $id, $terms, $tax );
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
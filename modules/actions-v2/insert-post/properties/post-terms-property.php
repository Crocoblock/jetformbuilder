<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		if ( ! empty( $term ) && ! is_numeric( $term ) ) {
			$term_obj = get_term_by( 'name', $term, $tax );

			if ( $term_obj && ! is_wp_error( $term_obj ) ) {
				return $term_obj->term_id;
			} else {
				$result = wp_insert_term( $term, $tax );

				if ( ! is_wp_error( $result ) ) {
					return $result['term_id'];
				} else {
					return $term;
				}
			}
		}

		if ( is_taxonomy_hierarchical( $tax ) || ( is_numeric( $term ) && absint( $term ) === (int) $term ) ) {
			if ( ! term_exists( $term, $tax ) && ! get_term_by( 'name', $term, $tax ) && ! get_term_by( 'id', $term, $tax ) ) {
				$result = wp_insert_term( $term, $tax );

				if ( ! is_wp_error( $result ) ) {
					return $result['term_id'];
				}
			}

			return absint( $term );
		}

		return esc_html( $term );
	}
}

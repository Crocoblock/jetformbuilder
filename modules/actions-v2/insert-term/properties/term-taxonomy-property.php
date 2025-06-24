<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Term_Taxonomy_Property extends Base_Object_Property {

	protected $taxonomies = array();

	public function get_id(): string {
		return 'taxonomy';
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$value = str_replace( 'jet_tax__', '', $value );

		$taxonomy = $this->sanitize_term( $value, $key );

		parent::do_before( $key, $taxonomy, $modifier );
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

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}
}

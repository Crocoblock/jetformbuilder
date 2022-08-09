<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

abstract class Base_Post_Property extends Base_Object_Property {

	/**
	 * If returns empty, all post-types will supported
	 *
	 * @return array
	 */
	public function get_supported_post_types(): array {
		return array();
	}

	public function is_valid( Abstract_Modifier $modifier ): bool {
		$supported = $this->get_supported_post_types();

		if ( empty( $supported ) ) {
			return parent::is_valid( $modifier );
		}

		$type = $modifier->source_arr['post_type'] ?? '';

		return in_array( $type, $supported, true ) && parent::is_valid( $modifier );
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'supported' => $this->get_supported_post_types(),
			)
		);
	}

}
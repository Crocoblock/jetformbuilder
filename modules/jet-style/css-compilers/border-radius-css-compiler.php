<?php


namespace JFB_Modules\Jet_Style\Css_Compilers;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Border_Radius_Css_Compiler
 * @package Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers
 */
class Border_Radius_Css_Compiler extends Base_Css_Compiler {

	public function is_supported( array $path ): bool {
		return (
			'border' === ( $path[1] ?? '' ) &&
			'radius' === Array_Tools::last( $path )
		);
	}

	public function compile_declarations(
		\WP_Style_Engine_CSS_Declarations $declarations,
		array $root_styles,
		array &$class_names
	) {
		$base_radius = Array_Tools::get( $root_styles, $this->path, array() );

		if ( empty( $base_radius ) ) {
			return;
		}

		$declarations->add_declaration(
			"{$this->css_var}-top-left",
			$this->get_top_left( $base_radius )
		);

		$declarations->add_declaration(
			"{$this->css_var}-top-right",
			$this->get_top_right( $base_radius )
		);

		$declarations->add_declaration(
			"{$this->css_var}-bottom-right",
			$this->get_bottom_right( $base_radius )
		);

		$declarations->add_declaration(
			"{$this->css_var}-bottom-left",
			$this->get_bottom_left( $base_radius )
		);
	}

	public function get_top_left( $value ) {
		return is_array( $value ) ? $value['topLeft'] : $value;
	}

	public function get_top_right( $value ) {
		return is_array( $value ) ? $value['topRight'] : $value;
	}

	public function get_bottom_left( $value ) {
		return is_array( $value ) ? $value['bottomLeft'] : $value;
	}

	public function get_bottom_right( $value ) {
		return is_array( $value ) ? $value['bottomRight'] : $value;
	}

}

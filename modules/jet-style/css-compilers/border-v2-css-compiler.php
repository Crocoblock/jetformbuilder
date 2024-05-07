<?php


namespace JFB_Modules\Jet_Style\Css_Compilers;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The main difference between this class and parent - child class doesn't
 * generate additional css-classes and make css-variables with another names.
 *
 * For example parent class will provide: --jfb-input-border-top-width.
 * But this class will provide: --jfb-input-border-width-top.
 *
 * @since 3.3.4
 */
class Border_V2_Css_Compiler extends Border_Css_Compiler {

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( array $path ): bool {
		return 'border-v2' === Array_Tools::last( $path );
	}

	public function compile_declarations(
		\WP_Style_Engine_CSS_Declarations $declarations,
		array $root_styles,
		array &$class_names
	) {
		$base_border = Array_Tools::get( $root_styles, $this->path, array() );

		if ( empty( $base_border ) || ! is_array( $base_border ) ) {
			return;
		}

		foreach ( array( 'style', 'width', 'color' ) as $type ) {
			$top_value = $this->get_side_value( $base_border, 'top', $type );

			$declarations->add_declaration(
				$this->get_top_var( $type ),
				$top_value
			);

			$right_value = $this->get_side_value( $base_border, 'right', $type );

			$declarations->add_declaration(
				$this->get_right_var( $type ),
				$right_value
			);

			$bottom_value = $this->get_side_value( $base_border, 'bottom', $type );

			$declarations->add_declaration(
				$this->get_bottom_var( $type ),
				$bottom_value
			);

			$left_value = $this->get_side_value( $base_border, 'left', $type );

			$declarations->add_declaration(
				$this->get_left_var( $type ),
				$left_value
			);
		}
	}

	public function get_top_var( $type ): string {
		return "{$this->css_var}-{$type}-top";
	}

	public function get_right_var( $type ): string {
		return "{$this->css_var}-{$type}-right";
	}

	public function get_bottom_var( $type ): string {
		return "{$this->css_var}-{$type}-bottom";
	}

	public function get_left_var( $type ): string {
		return "{$this->css_var}-{$type}-left";
	}

}

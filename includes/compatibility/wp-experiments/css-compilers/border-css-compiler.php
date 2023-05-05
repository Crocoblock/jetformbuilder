<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Border_Css_Compiler
 * @package Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers
 */
class Border_Css_Compiler extends Base_Css_Compiler {

	const SIDES = array( 'top', 'right', 'bottom', 'left' );

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( array $path ): bool {
		return 'border' === Array_Tools::last( $path );
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

		$is_hover = $this->has_hover_path();

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

			if ( ! $is_hover ) {
				continue;
			}

			// get not empty values
			$values = array_filter( array( $top_value, $right_value, $bottom_value, $left_value ) );

			if ( count( $values ) ) {
				$class_names[] = 'has-hover-border-' . $type;
			}
		}
	}

	public function compile_class_names( array &$class_names, array $root_styles ) {
		// do nothing
	}

	public function is_linked( $value ): bool {
		$first_key = array_keys( $value )[0] ?? '';

		return in_array( $first_key, self::SIDES, true );
	}

	public function get_side_value( $value, string $side, $property ): string {
		if ( ! in_array( $side, self::SIDES, true ) ) {
			return '';
		}

		if ( $this->is_linked( $value ) ) {
			$response = $value[ $side ][ $property ] ?? '';
		} else {
			$response = $value[ $property ] ?? '';
		}

		return trim( $response );
	}

	public function get_top_var( $type ): string {
		return "{$this->css_var}-top-{$type}";
	}

	public function get_right_var( $type ): string {
		return "{$this->css_var}-right-{$type}";
	}

	public function get_bottom_var( $type ): string {
		return "{$this->css_var}-bottom-{$type}";
	}

	public function get_left_var( $type ): string {
		return "{$this->css_var}-left-{$type}";
	}

}

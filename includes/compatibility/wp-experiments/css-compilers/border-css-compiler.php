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

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( array $path ): bool {
		return 'border' === Array_Tools::last( $path );
	}

	public function compile(
		\WP_Style_Engine_CSS_Declarations $declarations,
		array $root_styles,
		array $path
	) {
		$base_border = Array_Tools::get( $root_styles, $path, array() );

		if ( empty( $base_border ) || ! is_array( $base_border ) ) {
			return;
		}

		foreach ( array( 'style', 'width', 'color' ) as $type ) {
			$declarations->add_declaration(
				$this->get_top_var( $type ),
				$this->get_top_value( $base_border, $type )
			);

			$declarations->add_declaration(
				$this->get_right_var( $type ),
				$this->get_right_value( $base_border, $type )
			);

			$declarations->add_declaration(
				$this->get_bottom_var( $type ),
				$this->get_bottom_value( $base_border, $type )
			);

			$declarations->add_declaration(
				$this->get_left_var( $type ),
				$this->get_left_value( $base_border, $type )
			);
		}
	}

	public function is_linked( $value ): bool {
		$first_key = array_keys( $value )[0] ?? '';

		return in_array( $first_key, array( 'top', 'left', 'right', 'bottom' ), true );
	}

	/**
	 * @param $value
	 * @param $property
	 *
	 * @return int|string
	 */
	public function get_top_value( $value, $property ) {
		if ( $this->is_linked( $value ) ) {
			return $value['top'][ $property ] ?? '';
		} else {
			return $value[ $property ] ?? '';
		}
	}

	/**
	 * @param $value
	 * @param $property
	 *
	 * @return int|string
	 */
	public function get_right_value( $value, $property ) {
		if ( $this->is_linked( $value ) ) {
			return $value['right'][ $property ] ?? '';
		} else {
			return $value[ $property ] ?? '';
		}
	}

	/**
	 * @param $value
	 * @param $property
	 *
	 * @return int|string
	 */
	public function get_bottom_value( $value, $property ) {
		if ( $this->is_linked( $value ) ) {
			return $value['bottom'][ $property ] ?? '';
		} else {
			return $value[ $property ] ?? '';
		}
	}

	/**
	 * @param $value
	 * @param $property
	 *
	 * @return int|string
	 */
	public function get_left_value( $value, $property ) {
		if ( $this->is_linked( $value ) ) {
			return $value['left'][ $property ] ?? '';
		} else {
			return $value[ $property ] ?? '';
		}
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

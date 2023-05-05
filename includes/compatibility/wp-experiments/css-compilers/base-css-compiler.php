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
 * Class Base_Css_Compiler
 * @package Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers
 */
class Base_Css_Compiler {

	/**
	 * @var string
	 */
	protected $css_var;
	protected $path;

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( array $path ): bool {
		return true;
	}

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	public function compile_declarations(
		\WP_Style_Engine_CSS_Declarations $declarations,
		array $root_styles,
		array &$class_names
	) {
		$declarations->add_declaration(
			$this->css_var,
			Array_Tools::get( $root_styles, $this->path, '' )
		);
	}

	public function compile_class_names(
		array &$class_names,
		array $root_styles
	) {
		if ( ! $this->has_hover_path() ||
			empty( Array_Tools::get( $root_styles, $this->path, '' ) )
		) {
			return;
		}

		// remove selector from path
		$without_first = array_slice( $this->path, 1 );

		$class_names[] = 'has-hover-' . implode( '-', $without_first );
	}

	protected function has_hover_path(): bool {
		$parts = explode( ':', $this->path[0] );

		return ( ! empty( $parts[1] ) && 'hover' === $parts[1] );
	}

	public function set_css_var( string $name ): Base_Css_Compiler {
		$this->css_var = $name;

		return $this;
	}

	public function set_path( array $path ): Base_Css_Compiler {
		$this->path = $path;

		return $this;
	}

}

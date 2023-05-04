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

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( array $path ): bool {
		return true;
	}

	public function compile(
		\WP_Style_Engine_CSS_Declarations $declarations,
		array $root_styles,
		array $path
	) {
		$declarations->add_declaration(
			$this->css_var,
			Array_Tools::get( $root_styles, $path, '' )
		);
	}

	public function set_css_var( string $name ): Base_Css_Compiler {
		$this->css_var = $name;

		return $this;
	}

}

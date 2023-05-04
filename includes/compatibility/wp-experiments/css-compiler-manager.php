<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments;

use Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers\Base_Css_Compiler;
use Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers\Border_Css_Compiler;
use Jet_Form_Builder\Compatibility\Wp_Experiments\Css_Compilers\Border_Radius_Css_Compiler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Css_Compiler_Manager
 * @package Jet_Form_Builder\Compatibility\Wp_Experiments
 */
class Css_Compiler_Manager {

	/**
	 * @var Base_Css_Compiler[]
	 */
	private $compilers;

	public function __construct() {
		$this->compilers = array(
			new Border_Radius_Css_Compiler(),
			new Border_Css_Compiler(),
			new Base_Css_Compiler(),
		);
	}

	public function compile_declarations( array $root_styles, array $support_config ): string {
		$declarations = new \WP_Style_Engine_CSS_Declarations();

		foreach ( $support_config as $css_var => $path ) {
			$this->get_supported_compiler( $path )
				->set_css_var( $css_var )
				->compile( $declarations, $root_styles, $path );
		}

		return $declarations->get_declarations_string();
	}

	protected function get_supported_compiler( array $path ): Base_Css_Compiler {
		foreach ( $this->compilers as $compiler ) {
			if ( ! $compiler->is_supported( $path ) ) {
				continue;
			}

			return $compiler;
		}

		return $this->compilers[0];
	}

}

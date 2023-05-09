<?php


namespace Jet_Form_Builder\Modules\Jet_Style;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Module
 * @package Jet_Form_Builder\Modules\Jet_Style
 */
class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	const SUPPORT_STYLE = 'jetStyle';

	/**
	 * @var Css_Compiler_Manager
	 */
	private $compiler;

	public function rep_item_id() {
		return 'jet-style';
	}

	public function condition(): bool {
		// since WP 6.2
		return class_exists( '\WP_HTML_Tag_Processor' );
	}

	public function on_install() {
		$this->compiler = new Css_Compiler_Manager();

		\WP_Block_Supports::get_instance()->register(
			'jetStyle',
			array(
				'register_attribute' => array( $this, 'register_jet_style_support' ),
				'apply'              => array( $this, 'apply_jet_style_support' ),
			)
		);
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_scripts' ),
			0
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_scripts' ),
			0
		);
	}

	public function register_scripts() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets-build/js/editor/main{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function register_jet_style_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_STYLE ) ) &&
			! array_key_exists( 'style', $block_type->attributes )
		) {
			$block_type->attributes['style'] = array(
				'type' => 'object',
			);
		}
	}

	public function apply_jet_style_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		$support_config = Array_Tools::get( $block_type->supports, array( self::SUPPORT_STYLE ), false );
		$root_styles    = $block_attributes['style'] ?? array();

		if (
			! is_array( $support_config ) ||
			empty( $root_styles )
		) {
			return array();
		}

		return $this->get_compiler()->compile( $root_styles, $support_config );
	}

	public function get_compiler(): Css_Compiler_Manager {
		return $this->compiler;
	}
}

<?php


namespace JFB_Modules\Jet_Style;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Module
 * @package JFB_Modules\Jet_Style
 */
class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_After_Install_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	const SUPPORT_NAME = 'jetStyle';

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

		Style_Manager::instance();

		$this->compiler = new Css_Compiler_Manager();

		\WP_Block_Supports::get_instance()->register(
			self::SUPPORT_NAME,
			array(
				'register_attribute' => array( $this, 'register_support' ),
				'apply'              => array( $this, 'apply_support' ),
			)
		);
	}

	public function on_uninstall() {
		unset( $this->compiler );

		\WP_Block_Supports::get_instance()->register( self::SUPPORT_NAME, array() );
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
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function register_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_NAME ) ) &&
			! array_key_exists( 'style', $block_type->attributes )
		) {
			$block_type->attributes['style'] = array(
				'type' => 'object',
			);
		}
	}

	public function apply_support( \WP_Block_Type $block_type, array $block_attributes ): array {

		if ( ! is_array( $block_type->supports ) ) {
			return array();
		}

		$support_config = Array_Tools::get( $block_type->supports, array( self::SUPPORT_NAME ), false );
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

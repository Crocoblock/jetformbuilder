<?php


namespace JFB_Modules\Switch_Page_On_Change;

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

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	const SUPPORT_NAME   = 'jetFBSwitchPageOnChange';
	const ATTRIBUTE_NAME = 'switch_on_change';

	public function rep_item_id() {
		return 'switch-page-on-change';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		\WP_Block_Supports::get_instance()->register(
			self::SUPPORT_NAME,
			array(
				'register_attribute' => array( $this, 'register_support' ),
				'apply'              => array( $this, 'apply_support' ),
			)
		);
	}

	public function on_uninstall() {
		\WP_Block_Supports::get_instance()->register( self::SUPPORT_NAME, array() );
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);

		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);

		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function register_editor_scripts() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function register_frontend_scripts() {
		$script_asset = require_once $this->get_dir( 'assets/build/frontend.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			\Jet_Form_Builder\Blocks\Module::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/frontend.js' ),
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
			! array_key_exists( self::ATTRIBUTE_NAME, $block_type->attributes )
		) {
			$block_type->attributes[ self::ATTRIBUTE_NAME ] = array(
				'type'    => 'boolean',
				'default' => false,
			);
		}
	}

	public function apply_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		if ( ! is_array( $block_type->supports ) ) {
			return array();
		}
		$support_config = Array_Tools::get( $block_type->supports, array( self::SUPPORT_NAME ), false );
		$value          = $block_attributes[ self::ATTRIBUTE_NAME ] ?? array();

		if ( empty( $support_config ) || empty( $value ) ) {
			return array();
		}

		wp_enqueue_script( $this->get_handle() );

		return array(
			'class' => $this->get_handle(),
		);
	}
}

<?php


namespace JFB_Compatibility\Elementor;

use Jet_Form_Builder\Blocks;
use Jet_Form_Builder\Classes\Builder_Helper;
use JFB_Components\Compatibility\Base_Compat_Dir_Trait;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Modules\Deprecated;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Compatibility\Elementor\Widgets;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Elementor implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;
	use Base_Compat_Dir_Trait;

	private $types;

	/**
	 * @var Onboarding_Builder
	 */
	private $onboarding_builder;

	public function rep_item_id() {
		return 'elementor';
	}

	public function condition(): bool {
		return defined( 'ELEMENTOR_VERSION' );
	}

	public function on_install() {
		$this->onboarding_builder = new Onboarding_Builder();
	}

	public function on_uninstall() {
	}

	public function init_hooks() {
		add_action( 'elementor/init', array( $this, 'init_widgets' ) );
		add_action( 'elementor/editor/after_enqueue_styles', array( $this, 'editor_styles' ) );
		add_action( 'elementor/preview/enqueue_scripts', array( $this, 'enqueue_form_scripts' ), 9 );
		add_action( 'elementor/preview/enqueue_styles', array( $this, 'enqueue_form_styles' ) );
		add_action( 'elementor/elements/categories_registered', array( $this, 'register_category' ) );

		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'block_editor_assets' )
		);

		$this->get_onboarding_builder()->init_hooks();

		// compatibility with 3.7
		if (
			defined( 'ELEMENTOR_VERSION' ) &&
			version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' )
		) {
			add_action( 'elementor/widgets/register', array( $this, 'register_widgets' ) );
		} else {
			add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
		}
	}

	public function remove_hooks() {
		remove_action( 'elementor/init', array( $this, 'init_widgets' ) );
		remove_action( 'elementor/editor/after_enqueue_styles', array( $this, 'editor_styles' ) );
		remove_action( 'elementor/preview/enqueue_scripts', array( $this, 'enqueue_form_scripts' ), 9 );
		remove_action( 'elementor/preview/enqueue_styles', array( $this, 'enqueue_form_styles' ) );
		remove_action( 'elementor/elements/categories_registered', array( $this, 'register_category' ) );

		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'block_editor_assets' )
		);

		// compatibility with 3.7
		if (
			defined( 'ELEMENTOR_VERSION' ) &&
			version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' )
		) {
			remove_action( 'elementor/widgets/register', array( $this, 'register_widgets' ) );
		} else {
			remove_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
		}
	}

	public function init_widgets() {
		$this->types = array(
			new Widgets\Form(),
		);

		foreach ( $this->types as $type ) {
			$type->init_hooks();
		}
	}

	/**
	 * Register category for elementor if not exists
	 *
	 * @return void
	 */
	public function register_category() {

		$elements_manager = \Elementor\Plugin::instance()->elements_manager;

		$elements_manager->add_category(
			'jet-form-builder',
			array(
				'title' => esc_html__( 'JetFormBuilder', 'jet-form-builder' ),
				'icon'  => 'font',
			)
		);
	}

	/**
	 * Enqueue editor styles
	 *
	 * @return void
	 */
	public function editor_styles() {
		wp_enqueue_style(
			$this->get_handle( 'icons' ),
			$this->get_url( 'assets/build/css/icons.css' ),
			array(),
			jet_form_builder()->get_version()
		);
	}


	public function register_widgets( $manager ) {
		foreach ( $this->types as $widget ) {
			// compatibility with 3.7
			if ( method_exists( $manager, 'register' ) ) {
				$manager->register( $widget );
			} else {
				$manager->register_widget_type( $widget );
			}
		}
	}

	/**
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function enqueue_form_scripts() {
		/** @var Blocks\Module $blocks */
		$blocks = jet_form_builder()->module( 'blocks' );
		/** @var Deprecated\Module $deprecated */
		$deprecated = jet_form_builder()->module( 'deprecated' );

		$blocks->enqueue_frontend_assets();

		// appointment/booking compatibility
		$deprecated->register_scripts();
		$deprecated->add_deprecated_script( '' );
	}

	public function enqueue_form_styles() {
		wp_enqueue_style( 'jet-form-builder-frontend' );
	}

	public function block_editor_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/block.editor.asset.php' );

		wp_enqueue_script(
			$this->get_handle( 'block-editor' ),
			$this->get_url( 'assets/build/block.editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/**
	 * @return Onboarding_Builder
	 */
	public function get_onboarding_builder(): Onboarding_Builder {
		return $this->onboarding_builder;
	}
}

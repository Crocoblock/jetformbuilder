<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;
use JET_SM\Gutenberg\Block_Manager;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements Base_Module_It {

	const MAIN_SCRIPT_HANDLE     = 'jet-form-builder-frontend-forms';
	const LISTING_OPTIONS_HANDLE = 'jet-form-builder-listing-options';

	/**
	 * @var bool
	 */
	// phpcs:disable PSR2.Classes.PropertyDeclaration.Underscore
	private $_registered_scripts = false;

	private $_builder_blocks_repository;
	private $_default_blocks_repository;

	// phpcs:enable PSR2.Classes.PropertyDeclaration.Underscore

	public function rep_item_id() {
		return 'blocks';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'init', array( $this, 'init_jet_sm_block_manager' ) );
		add_action( 'init', array( $this, 'register_block_types' ) );

		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'register_block_types_for_form_editor' ),
			10,
			2
		);

		add_action(
			'jet-form-builder/other-editor-assets/after',
			array( $this, 'register_block_types_for_others' ),
			10,
			2
		);

		if ( class_exists( 'WP_Block_Editor_Context' ) ) {
			add_filter( 'block_categories_all', array( $this, 'add_categories' ), 999, 2 );
		} else {
			add_filter( 'block_categories', array( $this, 'add_categories' ), 999, 2 );
		}

		add_action( 'elementor/frontend/after_enqueue_styles', array( $this, 'enqueue_frontend_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_form_scripts' ), 8 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_form_scripts' ) );

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_form_scripts' ) );
	}

	public function remove_hooks() {
		remove_action( 'init', array( $this, 'init_jet_sm_block_manager' ) );
		remove_action( 'init', array( $this, 'register_block_types' ) );

		remove_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'register_block_types_for_form_editor' )
		);

		remove_action(
			'jet-form-builder/other-editor-assets/after',
			array( $this, 'register_block_types_for_others' )
		);

		if ( class_exists( 'WP_Block_Editor_Context' ) ) {
			remove_filter( 'block_categories_all', array( $this, 'add_categories' ), 999 );
		} else {
			remove_filter( 'block_categories', array( $this, 'add_categories' ), 999 );
		}

		remove_action( 'elementor/frontend/after_enqueue_styles', array( $this, 'enqueue_frontend_styles' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_form_scripts' ), 8 );
		remove_action( 'enqueue_block_editor_assets', array( $this, 'register_form_scripts' ) );

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_form_scripts' ) );
	}

	/**
	 * Register block types
	 *
	 * @return void
	 */
	public function register_block_types() {
		$this->default_repository()->rep_install();
		$this->builder_repository()->rep_install();

		do_action( 'jet-form-builder/blocks/register', $this );
	}

	/**
	 * Register new block type
	 *
	 * @param Types\Base $block_type
	 *
	 * @return void
	 */
	public function register_block_type( Types\Base $block_type ) {
		$this->builder_repository()->rep_install_item_soft( $block_type );
	}

	/**
	 * Register new block type
	 *
	 * @param Types\Base $block_type
	 *
	 * @return void
	 */
	public function register_default_block_type( Types\Base $block_type ) {
		$this->default_repository()->rep_install_item_soft( $block_type );
	}


	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	public function add_categories( $categories, $post ): array {
		return array_merge(
			array(
				array(
					'slug'  => 'jet-form-builder-fields',
					'title' => __( 'Jet Form Fields', 'jet-form-builder' ),
				),
			),
			array(
				array(
					'slug'  => 'jet-form-builder-elements',
					'title' => __( 'Jet Form Elements', 'jet-form-builder' ),
				),
			),
			$categories
		);
	}

	/**
	 * Register block types for editor
	 *
	 * @param $editor
	 * @param $handle
	 *
	 * @return void [type] [description]
	 */
	public function register_block_types_for_form_editor( $editor, $handle ) {
		foreach ( $this->builder_repository()->rep_get_items() as $type ) {
			$type->block_data( $editor, $handle );
		}
	}

	/**
	 * Register block types for editor
	 *
	 * @param $editor
	 * @param $handle
	 *
	 * @return void [type] [description]
	 */
	public function register_block_types_for_others( $editor, $handle ) {
		foreach ( $this->default_repository()->rep_get_items() as $type ) {
			$type->block_data( $editor, $handle );
		}
	}

	public function enqueue_frontend_styles() {
		wp_register_style(
			'jet-form-builder-frontend',
			Plugin::instance()->plugin_url( 'assets/css/frontend.css' ),
			array(),
			Plugin::instance()->get_version()
		);
	}

	/**
	 * Register form JS
	 *
	 * @return void
	 */
	public function enqueue_frontend_assets() {
		$this->register_form_scripts();

		wp_enqueue_script( self::MAIN_SCRIPT_HANDLE );
	}

	public function register_form_scripts() {
		if ( $this->_registered_scripts ) {
			return;
		}
		$this->_registered_scripts = true;

		/** @var \JFB_Modules\Jet_Plugins\Module $jet_plugins */
		/** @noinspection PhpUnhandledExceptionInspection */
		$jet_plugins = jet_form_builder()->module( 'jet-plugins' );
		$jet_plugins->register_scripts();

        $script_asset = require_once jet_form_builder()->plugin_dir( 'assets/js/frontend/main.asset.php' );

        $script_asset['dependencies'][] = $jet_plugins::HANDLE;

		wp_register_script(
			self::MAIN_SCRIPT_HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/main.js' ),
            $script_asset['dependencies'],
            $script_asset['version'],
			true
		);

		$options = Tab_Handler_Manager::get_options( 'options-tab' );

		wp_localize_script(
			self::MAIN_SCRIPT_HANDLE,
			'JetFormBuilderSettings',
			apply_filters(
				'jet-form-builder/frontend-settings',
				array_merge(
					array(
						'ajaxurl'      => Http_Tools::get_form_action_url(
							array( 'method' => 'ajax' )
						),
						'devmode'      => defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG,
						'replaceAttrs' => array(
							'href',
							'src',
							'alt',
							'title',
						),
					),
					$options
				)
			)
		);
	}

	/**
	 * Returns toolbar controls list from attributes
	 *
	 * @return [type] [description]
	 */
	public function get_controls_list( $attributes = array(), $context = 'toolbar' ): array {

		$result = array();

		foreach ( $attributes as $key => $data ) {
			if ( ! empty( $data[ $context ] ) ) {
				$result[] = array(
					'key'       => $key,
					'type'      => $data[ $context ]['type'],
					'label'     => $data[ $context ]['label'],
					'options'   => $data[ $context ]['options'] ?? array(),
					'condition' => $data[ $context ]['condition'] ?? false,
					// for Submit field name.
					'show'      => $data[ $context ]['show'] ?? true,
					// for Date and Time field.
					'help'      => $data[ $context ]['help'] ?? '',
				);
			}
		}

		return $result;
	}

	/**
	 * @param $block_name
	 * @param $attributes
	 *
	 * @return array
	 */
	public function get_field_attrs( $block_name, $attributes ): array {
		if ( ! $block_name ) {
			return array();
		}
		$block_id = Block_Helper::delete_namespace( $block_name );

		try {
			$field = $this->builder_repository()->rep_get_item( $block_id );
		} catch ( Repository_Exception $exception ) {
			return array();
		}

		return array_merge( $field->get_default_attributes(), $attributes );
	}


	/**
	 * @param $block_name
	 *
	 * @return Types\Base|bool
	 */
	public function get_field_by_name( $block_name ) {
		$block_id = Block_Helper::delete_namespace( $block_name );

		try {
			return $this->builder_repository()->rep_clone_item( $block_id );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}


	/**
	 * @return Types\Form|bool
	 */
	public function get_form_class() {
		try {
			return $this->default_repository()->rep_get_item( 'form-block' );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	public function render_callback( $instance ) {
		return static function ( array $attrs, $content = null, $wp_block = null ) use ( $instance ) {
			return call_user_func( array( clone $instance, 'render_callback_field' ), $attrs, $content, $wp_block );
		};
	}

	public function builder_repository(): Form_Builder_Blocks_Repository {
		if ( ! $this->_builder_blocks_repository ) {
			$this->_builder_blocks_repository = new Form_Builder_Blocks_Repository();
		}

		return $this->_builder_blocks_repository;
	}

	public function default_repository(): Default_Blocks_Repository {
		if ( ! $this->_default_blocks_repository ) {
			$this->_default_blocks_repository = new Default_Blocks_Repository();
		}

		return $this->_default_blocks_repository;
	}

	public function init_jet_sm_block_manager() {
		if ( ! Compatibility::has_jet_sm() ) {
			return;
		}

		Block_Manager::get_instance();
	}
}

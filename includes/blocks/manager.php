<?php

namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types;
use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Dev_Mode;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;
use JET_SM\Gutenberg\Block_Manager;


// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	/**
	 * @var bool
	 */
	private $_registered_scripts = false;

	private $_builder_blocks_repository;
	private $_default_blocks_repository;

	public function __construct() {
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

		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);

		if ( class_exists( 'WP_Block_Editor_Context' ) ) {
			add_filter( 'block_categories_all', array( $this, 'add_categories' ), 999, 2 );
		} else {
			add_filter( 'block_categories', array( $this, 'add_categories' ), 999, 2 );
		}

		add_action( 'elementor/frontend/after_enqueue_styles', array( $this, 'enqueue_frontend_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_form_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_form_scripts' ) );
	}

	public function init_jet_sm_block_manager() {
		if ( ! Compatibility::has_jet_sm() ) {
			return;
		}

		Block_Manager::get_instance();
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


	public function add_categories( $categories, $post ) {
		$categories = array_merge(
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

		return $categories;
	}

	public function add_default_fields_to_form( $arguments ) {
		$hidden_post_id = jet_form_builder()->form::NAMESPACE_FIELDS . 'hidden-field';
		$submit_post_id = jet_form_builder()->form::NAMESPACE_FIELDS . 'submit-field';
		$text_field     = jet_form_builder()->form::NAMESPACE_FIELDS . 'text-field';

		$arguments['template'] = array(
			array(
				$hidden_post_id,
				array(
					'name'        => 'post_id',
					'field_value' => 'post_id',
				),
			),
			array(
				$text_field,
				array(
					'name'  => 'text_field',
					'label' => 'Text',
				),
			),
			array(
				$submit_post_id,
				array( 'label' => __( 'Submit', 'jet-form-builder' ) ),
			),
		);

		return $arguments;
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
		$this->enqueue_frontend_styles();

		wp_enqueue_script( 'jet-form-builder-frontend-forms' );
	}

	public function register_form_scripts() {
		if ( $this->_registered_scripts ) {
			return;
		}
		wp_register_script(
			'jet-form-builder-frontend-forms',
			// assets/js/frontend-forms.js
			Plugin::instance()->plugin_url( 'assets/js/frontend-forms-v3.js' ),
			array( 'jquery', 'wp-i18n', 'wp-hooks' ),
			Plugin::instance()->get_version(),
			true
		);

		wp_localize_script(
			'jet-form-builder-frontend-forms',
			'JetFormBuilderSettings',
			apply_filters(
				'jet-form-builder/frontend-settings',
				array(
					'ajaxurl'      => Http_Tools::get_form_action_url(
						array( 'method' => 'ajax' )
					),
					'devmode'      => Dev_Mode\Manager::instance()->active(),
					'scrollOffset' => - 50,
					'replaceAttrs' => array(
						'href',
						'src',
						'alt',
						'title',
					),
				)
			)
		);

		wp_register_script(
			'jet-form-builder-sortable',
			Plugin::instance()->plugin_url( 'assets/lib/jquery-sortable/sortable.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);

		/*wp_register_script(
			'jet-form-builder-file-upload',
			Plugin::instance()->plugin_url( 'assets/js/file-upload.js' ),
			array( 'jet-form-builder-sortable' ),
			Plugin::instance()->get_version(),
			true
		);*/
		$this->_registered_scripts = true;
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
	 * @return mixed
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
		return function ( array $attrs, $content = null, $wp_block = null ) use ( $instance ) {
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

}

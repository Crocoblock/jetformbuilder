<?php

namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
use Jet_Form_Builder\Plugin;
use JET_SM\Gutenberg\Block_Manager;
use Jet_Form_Builder\Dev_Mode;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	private $_types = array();
	public $base_control;

	/**
	 * @var Block_Manager
	 */
	public $jet_sm__block_manager;

	const FORM_EDITOR_STORAGE = 'form_editor';
	const OTHERS_STORAGE = 'others';
	/**
	 * @var bool
	 */
	private $_registered_scripts = false;

	public function __construct() {
		add_action( 'init', array( $this, 'init_jet_sm_block_manager' ) );
		add_action( 'init', array( $this, 'register_block_types' ) );

		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'register_block_types_for_form_editor' ),
			10, 2
		);

		add_action(
			'jet-form-builder/other-editor-assets/after',
			array( $this, 'register_block_types_for_others' ),
			10, 2
		);

		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);

		add_filter( 'block_categories', array( $this, 'add_category' ), 10, 2 );

		add_action( 'elementor/frontend/after_enqueue_styles', array( $this, 'enqueue_frontend_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_form_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_form_scripts' ) );
	}

	public function add_category( $categories, $post ) {
		$categories[] = array(
			'slug'  => 'jet-form-builder-fields',
			'title' => __( 'Jet Form Fields', 'jet-form-builder' ),
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
					'field_value' => 'post_id'
				)
			),
			array(
				$text_field,
				array(
					'name'  => 'text_field',
					'label' => 'Text'
				)
			),
			array(
				$submit_post_id,
				array( 'label' => __( 'Submit', 'jet-form-builder' ) )
			)
		);

		return $arguments;
	}

	public function init_jet_sm_block_manager() {
		if ( Jet_Style_Manager::is_activated() ) {
			$this->jet_sm__block_manager = Block_Manager::get_instance();
		}
	}

	/**
	 * Register block types
	 *
	 * @return [type] [description]
	 */
	public function register_block_types() {

		$types = array(
			new Types\Form(),
			new Types\Select_Field(),
			new Types\Text_Field(),
			new Types\Hidden_Field(),
			new Types\Radio_Field(),
			new Types\Checkbox_Field(),
			new Types\Number_Field(),
			new Types\Date_Field(),
			new Types\Time_Field(),
			new Types\Calculated_Field(),
			new Types\Media_Field(),
			new Types\Wysiwyg_Field(),
			new Types\Range_Field(),
			new Types\Heading_Field(),
			new Types\Textarea_Field(),
			new Types\Submit_Field(),
			new Types\Repeater_Field(),
			new Types\Form_Break_Field(),
			new Types\Group_Break_Field(),
			new Types\Conditional_Block(),
			new Types\Datetime_Field(),
		);

		foreach ( $types as $type ) {
			$this->register_block_type( $type );
		}

		do_action( 'jet-form-builder/blocks/register', $this );

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
		foreach ( $this->_types[ self::FORM_EDITOR_STORAGE ] as $type ) {
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
		foreach ( $this->_types[ self::OTHERS_STORAGE ] as $type ) {
			$type->block_data( $editor, $handle );
		}
	}

	public function enqueue_frontend_styles() {
		wp_enqueue_style(
			'jet-form-builder-frontend',
			Plugin::instance()->plugin_url( 'assets/css/frontend.css' ),
			array(),
			Plugin::instance()->get_version()
		);
	}

	/**
	 * Register form JS
	 * @return [type] [description]
	 */
	public function enqueue_frontend_assets() {
		$this->register_form_scripts();
		$this->enqueue_frontend_styles();

		wp_enqueue_script( 'jet-form-builder-frontend-forms' );

		wp_localize_script( 'jet-form-builder-frontend-forms', 'JetFormBuilderSettings', array(
			'ajaxurl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
			'form_action' => Plugin::instance()->form_handler->hook_key,
			'devmode'     => Dev_Mode\Manager::instance()->active()
		) );

	}

	public function register_form_scripts() {
		if ( $this->_registered_scripts ) {
			return;
		}
		wp_register_script(
			'jet-form-builder-frontend-forms',
			Plugin::instance()->plugin_url( 'assets/js/frontend-forms.js' ),
			array( 'jquery' ),
			Plugin::instance()->get_version(),
			true
		);

		wp_register_script(
			'jet-form-builder-sortable',
			Plugin::instance()->plugin_url( 'assets/lib/jquery-sortable/sortable.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);

		wp_register_script(
			'jet-form-builder-file-upload',
			Plugin::instance()->plugin_url( 'assets/js/file-upload.js' ),
			array( 'jet-form-builder-frontend-forms', 'jet-form-builder-sortable' ),
			Plugin::instance()->get_version(),
			true
		);
		$this->_registered_scripts = true;
	}

	/**
	 * Returns toolbar controls list from attributes
	 *
	 * @return [type] [description]
	 */
	public function get_controls_list( $attributes = array(), $context = 'toolbar' ) {

		$result = array();

		foreach ( $attributes as $key => $data ) {
			if ( ! empty( $data[ $context ] ) ) {
				$result[] = array(
					'key'       => $key,
					'type'      => $data[ $context ]['type'],
					'label'     => $data[ $context ]['label'],
					'options'   => isset( $data[ $context ]['options'] ) ? $data[ $context ]['options'] : array(),
					'condition' => isset( $data[ $context ]['condition'] ) ? $data[ $context ]['condition'] : false,
					// for Submit field name
					'show'      => isset( $data[ $context ]['show'] ) ? $data[ $context ]['show'] : true,
					// for Date and Time field
					'help'      => isset( $data[ $context ]['help'] ) ? $data[ $context ]['help'] : '',
				);
			}
		}

		return $result;
	}

	/**
	 * Register new block type
	 *
	 * @param  [type] $block_type [description]
	 *
	 * @return [type]             [description]
	 */
	public function register_block_type( $block_type ) {
		$this->_types[ $block_type->get_storage_name() ][ $block_type->get_name() ] = $block_type;
	}

	/**
	 * @param string $storage
	 *
	 * @return array
	 */
	public function get_form_editor_types( $storage = self::FORM_EDITOR_STORAGE ) {
		return $this->_types[ $storage ];
	}

	/**
	 * Returns block attributes list
	 */
	public function get_block_atts( $block = null ) {

		if ( ! $block ) {
			return array();
		}
		$types = $this->get_form_editor_types();

		$type = isset( $types[ $block ] ) ? $types[ $block ] : false;

		if ( ! $type ) {
			return array();
		}

		return $type->get_attributes();

	}


	public function get_field_by_name( $block_name, $storage = self::FORM_EDITOR_STORAGE ) {
		$types = $this->get_form_editor_types( $storage );
		$block = isset( $types[ $block_name ] ) ? $types[ $block_name ] : false;

		if ( ! $block ) {
			$block_name = explode( Plugin::instance()->form::NAMESPACE_FIELDS, $block_name );
			$block      = isset( $types[ $block_name[1] ] ) ? $types[ $block_name[1] ] : false;
		}

		return $block;
	}


	public function get_field_attrs( $block_name, $attributes ) {

		if ( ! $block_name ) {
			return;
		}
		$types      = $this->get_form_editor_types();
		$block_name = explode( 'jet-forms/', $block_name );

		$field = isset( $types[ $block_name[1] ] ) ? $types[ $block_name[1] ] : false;

		if ( ! $field ) {
			return;
		}

		return array_merge( $field->get_default_attributes(), $attributes );
	}

	public function get_form_class() {
		return $this->get_field_by_name( 'form-block', self::OTHERS_STORAGE );
	}

	public function render_callback( $instance ) {
		return function ( array $attrs, $content = null, $wp_block = null ) use ( $instance ) {
			return call_user_func( array( clone $instance, 'render_callback_field' ), $attrs, $content, $wp_block );
		};
	}

}

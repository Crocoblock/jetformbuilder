<?php

namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Calculated_Field;
use Jet_Form_Builder\Blocks\Types\Checkbox_Field;
use Jet_Form_Builder\Blocks\Types\Date_Field;
use Jet_Form_Builder\Blocks\Types\Datetime_Field;
use Jet_Form_Builder\Blocks\Types\Form_Break_Field;
use Jet_Form_Builder\Blocks\Types\Group_Break_Field;
use Jet_Form_Builder\Blocks\Types\Heading_Field;
use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Blocks\Types\Media_Field;
use Jet_Form_Builder\Blocks\Types\Number_Field;
use Jet_Form_Builder\Blocks\Types\Radio_Field;
use Jet_Form_Builder\Blocks\Types\Range_Field;
use Jet_Form_Builder\Blocks\Types\Repeater_Field;
use Jet_Form_Builder\Blocks\Types\Select_Field;
use Jet_Form_Builder\Blocks\Types\Submit_Field;
use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;
use Jet_Form_Builder\Blocks\Types\Time_Field;
use Jet_Form_Builder\Blocks\Types\Wysiwyg_Field;
use Jet_Form_Builder\Blocks\Types\Form;

use Jet_Form_Builder\Blocks\Types\Field_Interface;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
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

	private $_types = array();
	public $base_control;

	/**
	 * @var Block_Manager
	 */
	public $jet_sm__block_manager;

	const FORM_EDITOR_STORAGE = 'form_editor';
	const OTHERS_STORAGE = 'others';

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

		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_frontend_assets' )
		);

		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'add_default_fields_to_form' ),
			99
		);

		add_filter( 'block_categories', array( $this, 'add_category' ), 10, 2 );
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
			new Form(),
			new Select_Field(),
			new Text_Field(),
			new Hidden_Field(),
			new Radio_Field(),
			new Checkbox_Field(),
			new Number_Field(),
			new Date_Field(),
			new Time_Field(),
			new Calculated_Field(),
			new Media_Field(),
			new Wysiwyg_Field(),
			new Range_Field(),
			new Heading_Field(),
			new Textarea_Field(),
			new Submit_Field(),
			new Repeater_Field(),
			new Form_Break_Field(),
			new Group_Break_Field(),
			new Datetime_Field(),
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

		$prepared_types = array();

		foreach ( $this->_types[ self::FORM_EDITOR_STORAGE ] as $type ) {
			$prepared_types[] = $this->register_block_data_for_js( $type );

			$type->block_data( $editor, $handle );

		}

		wp_localize_script( $handle, 'jetFormBuilderBlocks', $prepared_types );

	}

	public function register_block_data_for_js( $type ) {
		$attributes = $type->block_attributes();

		return array(
			'blockName'  => $type->block_name(),
			'title'      => $type->get_title(),
			'icon'       => $type->get_icon(),
			'attributes' => $attributes,
			'controls'   => array(
				'toolbar'  => $this->get_controls_list( $attributes, 'toolbar' ),
				'general'  => $this->get_controls_list( $attributes, 'general' ),
				'advanced' => $this->get_controls_list( $attributes, 'advanced' ),
			),
			'className'  => $type->block_class_name(),
			'slug'       => $type->get_name(),
			'supports'   => $type->get_supports()
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
	public function register_block_types_for_others( $editor, $handle ) {

		$prepared_types = array();

		foreach ( $this->_types[ self::OTHERS_STORAGE ] as $type ) {
			$prepared_types[] = $this->register_block_data_for_js( $type );

			$type->block_data( $editor, $handle );
		}

		wp_localize_script( $handle, 'jetFormBuilderBlocks', $prepared_types );

	}

	/**
	 * Register form JS
	 * @return [type] [description]
	 */
	public function register_frontend_assets() {

		wp_enqueue_script(
			'jet-form-builder-frontend',
			Plugin::instance()->plugin_url( 'assets/js/frontend.js' ),
			array( 'jquery' ),
			Plugin::instance()->get_version(),
			true
		);

		wp_enqueue_style(
			'jet-form-builder-frontend',
			Plugin::instance()->plugin_url( 'assets/css/frontend.css' ),
			array(),
			Plugin::instance()->get_version()
		);

		wp_enqueue_script(
			'jet-form-builder-frontend-forms',
			Plugin::instance()->plugin_url( 'assets/js/frontend-forms.js' ),
			array( 'jquery' ),
			Plugin::instance()->get_version(),
			true
		);

		wp_enqueue_script(
			'jet-form-builder-inputmask',
			Plugin::instance()->plugin_url( 'assets/lib/inputmask/jquery.inputmask.min.js' ),
			array( 'jquery', 'jet-form-builder-frontend-forms' ),
			Plugin::instance()->get_version(),
			true
		);

		wp_localize_script( 'jet-form-builder-frontend', 'JetFormBuilderSettings', array(
			'ajaxurl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
			'form_action' => Plugin::instance()->form_handler->hook_key
		) );

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
	 * @return array
	 */
	public function get_form_editor_types() {
		return $this->_types[ self::FORM_EDITOR_STORAGE ];
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


	public function get_field_by_name( $block_name ) {
		if ( ! $block_name ) {
			return;
		}
		$types = $this->get_form_editor_types();

		return isset( $types[ $block_name ] ) ? $types[ $block_name ] : false;
	}


	public function get_field_attrs( $block_name, $attributes ) {

		if ( ! $block_name ) {
			return;
		}
		$types = $this->get_form_editor_types();

		$field = isset( $types[ $block_name ] ) ? $types[ $block_name ] : false;

		if ( ! $field ) {
			return;
		}

		return $attributes;
	}

}

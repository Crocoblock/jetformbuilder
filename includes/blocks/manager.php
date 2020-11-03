<?php
namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Calculated_Field;
use Jet_Form_Builder\Blocks\Types\Checkbox_Field;
use Jet_Form_Builder\Blocks\Types\Date_Field;
use Jet_Form_Builder\Blocks\Types\Heading_Field;
use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Blocks\Types\Media_Field;
use Jet_Form_Builder\Blocks\Types\Number_Field;
use Jet_Form_Builder\Blocks\Types\Radio_Field;
use Jet_Form_Builder\Blocks\Types\Range_Field;
use Jet_Form_Builder\Blocks\Types\Select_Field;
use Jet_Form_Builder\Blocks\Types\Text_Field;
use Jet_Form_Builder\Blocks\Types\Textarea_Field;
use Jet_Form_Builder\Blocks\Types\Time_Field;
use Jet_Form_Builder\Blocks\Types\Wysiwyg_Field;
use Jet_Form_Builder\Blocks\Types\Form;

use Jet_Form_Builder\Blocks\Types\Field_Interface;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	private $_types = array();

    const FORM_EDITOR_STORAGE = 'form_editor';
    const OTHERS_STORAGE = 'others';

	public function __construct() {
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
		);

		foreach ( $types as $type ) {
			$this->register_block_type( $type );
		}

		do_action( 'jet-form-builder/blocks/init', $this );

	}

    /**
     * Register block types for editor
     *
     * @param $editor
     * @param $handle
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
        );
    }

    /**
     * Register block types for editor
     *
     * @param $editor
     * @param $handle
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
			jet_engine()->plugin_url( 'assets/js/frontend.js' ),
			array( 'jquery' ),
			jet_engine()->get_version(),
			true
		);

		wp_enqueue_script(
			'jet-form-builder-frontend-froms',
			jet_form_builder()->plugin_url( 'assets/js/frontend-forms.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_enqueue_script(
			'jet-form-builder-inputmask',
			jet_form_builder()->plugin_url( 'assets/lib/inputmask/jquery.inputmask.min.js' ),
			array( 'jet-form-builder-frontend-froms' ),
			jet_form_builder()->get_version(),
			true
		);

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
				);
			}
		}

		return $result;
	}

	/**
	 * Register new block type
	 *
	 * @param  [type] $block_type [description]
	 * @return [type]             [description]
	 */
	public function register_block_type( $block_type ) {
		$this->_types[ $block_type->get_storage_name() ][ $block_type->get_name() ] = $block_type;
	}

    /**
     * @return array
     */
    public function get_form_editor_types()
    {
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

		if( $field instanceof Field_Interface ) {
			return array_merge( $attributes, $field->get_field_attrs( $attributes ) );
		}

		return $attributes;		
	}

}

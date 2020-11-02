<?php
namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Range_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Range_Field extends Base {

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Range Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'range-field';
	}

	/**
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @return [type] [description]
	 */
	public function get_block_renderer( $attributes = array() ) {
		return new Range_Field_Render( $attributes );
	}

    /**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
        return array(
            'min' => array(
                'type' => 'number',
                'default' => ''
            ),
            'max' => array(
                'type' => 'number',
                'default' => ''
            ),
            'step' => array(
                'type' => 'number',
                'default' => ''
            ),
            'prefix' => array(
                'type' => 'string',
                'default' => ''
            ),
            'suffix' => array(
                'type' => 'string',
                'default' => ''
            ),
        );
	}

    /**
     * Returns global attributes list
     * P.S. here was removed `placeholder` & `required`
     *
     * @return [type] [description]
     */
    public function get_global_attributes() {
        return array(
            'label' => array(
                'type'    => 'string',
                'default' => '',
                'general' => array(
                    'type'  => 'text',
                    'label' => __( 'Field Label', 'jet-form-builder' )
                ),
            ),
            'name' => array(
                'type' => 'string',
                'default' => 'field_name',
                'general' => array(
                    'type'  => 'text',
                    'label' => __( 'Field Name', 'jet-form-builder' )
                ),
            ),
            'desc' => array(
                'type' => 'string',
                'default' => '',
                'general' => array(
                    'type'  => 'text',
                    'label' => __( 'Field Description', 'jet-form-builder' )
                ),
            ),
            'default' => array(
                'type' => 'string',
                'default' => '',
                'general' => array(
                    'type'  => 'dynamic_text',
                    'label' => __( 'Default Value', 'jet-form-builder' )
                ),
            ),
            'add_prev' => array(
                'type' => 'boolean',
                'default' => false,
                'advanced' => array(
                    'type'  => 'toggle',
                    'label' => __( 'Add Prev Page Button', 'jet-form-builder' )
                ),
            ),
            'prev_label' => array(
                'type' => 'string',
                'default' => '',
                'advanced' => array(
                    'type'      => 'text',
                    'label'     => __( 'Prev Page Button Label', 'jet-form-builder' ),
                    'condition' => 'add_prev'
                ),
            ),
            'visibility' => array(
                'type' => 'string',
                'default' => '',
                'advanced' => array(
                    'type'    => 'select',
                    'label'   => __( 'Field Visibility', 'jet-form-builder' ),
                    'options' => array(
                        array(
                            'value' => 'all',
                            'label' => __( 'For all', 'jet-form-builder' ),
                        ),
                        array(
                            'value' => 'logged_id',
                            'label' => __( 'Only for logged in users', 'jet-form-builder' ),
                        ),
                        array(
                            'value' => 'not_logged_in',
                            'label' => __( 'Only for NOT-logged in users', 'jet-form-builder' ),
                        ),
                    ),
                ),
            ),
            'class_name' => array(
                'type' => 'string',
                'default' => '',
                'advanced' => array(
                    'type'  => 'text',
                    'label' => __( 'CSS Class Name', 'jet-form-builder' )
                ),
            ),
        );
    }

}

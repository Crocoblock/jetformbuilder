<?php
namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Blocks\Render\Repeater_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Repeater_Field extends Base {

    public function __construct() {
        $this->unregister_attribute( 'placeholder' );

        parent::__construct();
    }


    /**
     * Returns block title
     *
     * @return string [type] [description]
     */
	public function get_title() {
		return 'Repeater Field';
	}

    /**
     * Returns block name
     *
     * @return string [type] [description]
     */
	public function get_name() {
		return 'repeater-field';
	}

    /**
     * Returns icon class name
     *
     * @return string [type] [description]
     */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}


    /**
     * Returns current block render instance
     *
     * @param $form_id
     * @param array $attributes
     * @return Repeater_Field_Render
     */
	public function get_block_renderer( $form_id, $attributes = array(), $factory = null ) {
		return new Repeater_Field_Render( $form_id, $attributes, $factory );
	}

    public function block_data($editor, $handle)
    {
        wp_localize_script( $handle, 'jetRepeaterFieldData', array(
            'manage_items_count' => array(
                array(
                    'value' => 'manually',
                    'label' => __( 'Manually', 'jet-form-builder' )
                ),
                array(
                    'value' => 'dynamically',
                    'label' => __( 'Dynamically (get count from form field)', 'jet-form-builder' )
                ),
            ),
            'repeater_calc_type' => array(
                array(
                    'value' => 'default',
                    'label' => __( 'Default (returns rows count)', 'jet-form-builder' )
                ),
                array(
                    'value' => 'custom',
                    'label' => __( 'Custom (calculate custom value for each row)', 'jet-form-builder' )
                ),
            ),
            'help_messages' => array(
                'calc_hidden' => __(
                    'Check this to hide calculated field',
                    'jet-form-builder'
                ),
            ),
        ) );
    }

    /**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
        return array(
            'calc_formula'              => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'manage_items_count'        => array(
                'type'      => 'string',
                'default'   => 'manually'
            ),
            'new_item_label'            => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'manage_items_count_field'  => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'repeater_calc_type'        => array(
                'type'      => 'string',
                'default'   => 'default'
            ),
        );
	}

}

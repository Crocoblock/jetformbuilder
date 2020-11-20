<?php
namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Checkbox_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Checkbox_Field extends Base {

    use Base_Select_Radio_Check;

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Checkbox Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'checkbox-field';
	}

	public function get_css_scheme()
    {
        return array(
            'item'                  => '.jet-checkboxes-list__row',
            'child-items'           => '.jet-list-tree__children',
            'button'                => '.jet-checkboxes-list__button',
            'label'                 => '.jet-checkboxes-list__label',
            'checkbox'              => '.jet-checkboxes-list__decorator',
            'checkbox-checked-icon' => '.jet-checkboxes-list__checked-icon',
            'list-item'             => '.jet-forms-checkbox-field',
            'list-wrapper'          => '.jet-checkboxes-list-wrapper',
            'list-children'         => '.jet-list-tree__children',
        );
    }

    public function add_style_manager_options() {
        $this->controls_manager->start_section(
            'style_controls',
            [
                'id'          => 'items_style',
                'initialOpen' => true,
                'title'       => __( 'Items', 'jet-form-builder' )
            ]
        );

        $this->controls_manager->add_control([
            'id'        => 'filters_position',
            'type'      => 'choose',
            'label'     => __( 'Filters Position', 'jet-form-builder' ),
            'separator' => 'after',
            'options'   =>[
                'inline-block'    => [
                    'shortcut' => __( 'Line', 'jet-form-builder' ),
                    'icon'  => 'dashicons-ellipsis',
                ],
                'block' => [
                    'shortcut' => __( 'Column', 'jet-form-builder' ),
                    'icon'  => 'dashicons-menu-alt',
                ],
            ],
            'css_selector' => [
                '{{WRAPPER}} ' . $this->css_scheme['list-item']     => 'display: {{VALUE}};',
                '{{WRAPPER}} ' . $this->css_scheme['list-children'] => 'display: {{VALUE}};',
            ],
            'attributes' => [
                'default' => [
                    'value' =>'block'
                ],
            ]
        ]);



        $this->controls_manager->add_control([
            'id'        => 'items_space_between',
            'type'      => 'range',
            'label'     => __( 'Space Between', 'jet-form-builder' ),
            'separator' => 'after',
            'unit'      => 'px',
            'min'       => 0,
            'max'       => 50,
            'step'      => 1,
            'css_selector' => [
                '{{WRAPPER}} ' . $this->css_scheme['child-items'] . ':not(:last-child)'  => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
                '{{WRAPPER}} ' . $this->css_scheme['child-items'] . ':not(:first-child)' => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
                '{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:last-child)'         => 'margin-bottom: calc({{VALUE}}{{UNIT}}/2);',
                '{{WRAPPER}} ' . $this->css_scheme['item'] . ':not(:first-child)'        => 'padding-top: calc({{VALUE}}{{UNIT}}/2);',
            ],
            'attributes' => [
                'default' => [
                    'value' => 10
                ],
            ]
        ]);

        $this->controls_manager->add_control([
            'id'        => 'sub_items_offset_left',
            'type'      => 'range',
            'label'     => __( 'Children Offset Left', 'jet-form-builder' ),
            'unit'      => 'px',
            'min'       => 0,
            'max'       => 50,
            'step'      => 1,
            'css_selector' => [
                '{{WRAPPER}} ' . $this->css_scheme['child-items'] => 'padding-left: {{VALUE}}{{UNIT}};',
            ],
            'attributes' => [
                'default' => [
                    'value' => 10
                ],
            ]
        ]);

        $this->controls_manager->end_section();
    }

	public function get_style_attributes()
    {
        return array(
            'blockID' => [
                'type'    => 'string',
                'default' => '',
            ],
            'filters_position' => [
                'type' => 'object',
            ],
            'horisontal_layout_description' => [
                'type' => 'object',
            ],
            'filters_list_alignment' => [
                'type' => 'object',
            ],
            'items_space_between' => [
                'type' => 'object',
            ],
            'sub_items_offset_left' => [
                'type' => 'object',
            ],
            'show_decorator' => [
                'type' => 'object',
            ],
            'item_typography' => [
                'type' => 'object',
            ],
            'item_normal_color' => [
                'type' => 'object',
            ],
            'item_normal_background_color' => [
                'type' => 'object',
            ],
            'item_checked_color' => [
                'type' => 'object',
            ],
            'item_checked_background_color' => [
                'type' => 'object',
            ],
            'item_checked_border_color' => [
                'type' => 'object',
            ],
            'item_padding' => [
                'type' => 'object',
            ],
            'item_border' => [
                'type' => 'object',
            ],
        );
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
     * @param null $wp_block
     * @return string
     */
    public function get_block_renderer( $wp_block = null ) {
        return ( new Checkbox_Field_Render( $this ) )->render();
    }

	/**
	 * Register blocks specific JS variables
	 *
	 * @param  [type] $editor [description]
	 * @param  [type] $handle [description]
	 * @return [type]         [description]
	 */
	public function block_data( $editor, $handle ) {

		wp_localize_script(
		    $handle,
            'JetFormCheckboxFieldData',
            $this->get_local_data_check_radio_select()
        );
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
        return $this->get_attributes_check_radio_select();
	}

}

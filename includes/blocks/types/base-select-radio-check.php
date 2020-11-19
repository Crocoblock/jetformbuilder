<?php


namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

trait Base_Select_Radio_Check
{

    /**
     * Return data for Select, Checkboxes and Radio fields
     *
     * @param array $merged
     * @return array
     */
    public function get_local_data_check_radio_select( $merged = array() ) {
        return array_merge( array(
            'options_from' => array(
                array(
                    'value' => 'manual_input',
                    'label' => 'Manual Input'
                ),
                array(
                    'value' => 'posts',
                    'label' => 'Posts'
                ),
                array(
                    'value' => 'terms',
                    'label' => 'Terms'
                ),
                array(
                    'value' => 'meta_field',
                    'label' => 'Meta Field'
                ),
                array(
                    'value' => 'generate',
                    'label' => 'Generate Dynamically'
                ),
            ),
            'post_types_list' => Tools::get_post_types_for_js(),
            'taxonomies_list' => Tools::get_taxonomies_for_js(),
            'generators_list' => Tools::get_generators_list_for_js(),

            'help_messages' => array(
                'value_from_meta' => __(
                    'By default post/term ID is used as value. Here you can set meta field name to use its value as form field value',
                    'jet-form-builder'
                ),
                'calc_value_from_meta' => __(
                    'Here you can set meta field name to use its value as calculated value for current form field',
                    'jet-form-builder'
                ),
                'is_switch_page' => __(
                    'Check this to switch page to next on current value change',
                    'jet-form-builder'
                ),
                'num_range'     => array(
                    'field_name'    => __(
                        'For Numbers range generator set field with max range value',
                        'jet-form-builder'
                    )
                )
            ),
        ), $merged );
    }

    /**
     * Return attributes for Select, Checkboxes and Radio fields
     *
     * @param array $merged
     * @return array
     */
    public function get_attributes_check_radio_select( $merged = array() ) {
        return array_merge( array(
            'field_options_from' => array(
                'type'      => 'string',
                'default'   => 'manual_input'
            ),

            'field_options' => array(
                'type'      => 'array',
                'default'   => array(
                    array(
                        'label' => '',
                        'value' => '',
                        'calculate'  => '',
                    )
                )
            ),

            /**
             * From posts
             */
            'field_options_post_type' => array(
                'type'      => 'string',
                'default'   => 'post'
            ),
           

            /**
             * From taxonomy
             */
            'field_options_tax' => array(
                'type'      => 'string',
                'default'   => 'category'
            ),
           

            /**
             * From meta field
             */
            'field_options_key'        => array(
                'type'      => 'string',
                'default'   => ''
            ),


            /**
             * From generators
             */
            'generator_function' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'generator_field' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            
            
            
            'calculated_value_from_key'     => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'value_from_key'                => array(
                'type'      => 'string',
                'default'   => ''
            ),

            'is_switch_page' => array(
                'type' => 'boolean',
                'default' => false
            ),

        ), $merged );
    }


}
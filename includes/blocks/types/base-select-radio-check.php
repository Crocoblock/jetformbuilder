<?php


namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Classes\Tools;

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
            'fill_options_from' => array(
                'type' => 'string',
                'default' => ''
            ),

            'from_manual_input__value' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_manual_input__label' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_manual_input__calculated' => array(
                'type'      => 'string',
                'default'   => ''
            ),


            'from_posts__type' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_posts__value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_posts__calc_value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),


            'from_terms__type' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_terms__value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_terms__calc_value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),


            'from_meta_field'        => array(
                'type'      => 'string',
                'default'   => ''
            ),


            'from_generator__function' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_generator__field_name' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_generator__value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),
            'from_generator__calc_value_from_meta' => array(
                'type'      => 'string',
                'default'   => ''
            ),

        ), $merged );
    }


}
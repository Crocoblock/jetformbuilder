<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Generators\Get_From_DB;
use Jet_Form_Builder\Generators\Get_From_Field;
use Jet_Form_Builder\Generators\Num_Range;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die();
}

class Form_Manager
{
    public  $generators = false;
    public $builder;

    const   NAMESPACE_FIELDS = 'jet-forms/';
    /**
     * Returns all instatnces of options genrators classes
     *
     * @return [type] [description]
     */
    public function get_options_generators() {

        if ( false === $this->generators ) {

            $instances = array(
                new Num_Range(),
                new Get_From_DB(),
                new Get_From_Field(),
            );

            $instances = apply_filters( 'jet-form-builder/forms/options-generators', $instances, $this );

            foreach ( $instances as $instance ) {
                $this->generators[ $instance->get_id() ] = $instance;
            }

        }
        return $this->generators;
    }

    /**
     * Returns form fields,
     * parsed from post_content
     *
     * @param $content
     * @param bool $parsed
     * @return array[]
     */
    public function get_fields( $content, $parsed = false ) {
        $blocks = $parsed ? $content : parse_blocks( $content );
        $fields = array();

        foreach ( $blocks as $block ) {
            if ( stripos( $block['blockName'], self::NAMESPACE_FIELDS ) === false ) {
                continue;
            }
            $fields[] = $block;
        }
        return $fields;
    }

    public function get_fields_by_form_id( $form_id ) {
        return $this->get_fields( get_post( $form_id )->post_content );
    }


    /**
     * Returns generators list
     *
     * @return [type] [description]
     */
    public function get_generators_list() {

        $generators = $this->get_options_generators();
        $result     = array(
            0 => __( 'Select function...', 'jet-form-builder' ),
        );

        foreach ( $generators as $id => $generator ) {
            $result[ $id ] = $generator->get_name();
        }

        return $result;

    }

    public function field_name( $blockName ) {
        return explode( self::NAMESPACE_FIELDS, $blockName )[1];
    }



}
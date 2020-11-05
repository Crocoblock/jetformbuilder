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
    public  $messages_manager;

    const   NAMESPACE_FIELDS = 'jet-forms/';

    public $builder;

    public function __construct() {
        $this->messages_manager = new Form_Messages_Manager();
    }

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
     * @param $form_id
     * @return array[]
     */
    public function get_fields( $form_id ) {
        $blocks = parse_blocks( get_post( $form_id )->post_content );
        $fields = array();

        foreach ( $blocks as $block ) {
            if ( stripos( $block['blockName'], self::NAMESPACE_FIELDS ) === false ) {
                continue;
            }
            $fields[] = $block;
        }
        return $fields;
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

    public function get_form_meta( $meta_key, $form_id ) {
        return json_decode( get_post_meta(
            $form_id,
            $meta_key,
            true
        ),
            true
        );
    }

    public function field_name( $blockName ) {
        return explode( self::NAMESPACE_FIELDS, $blockName )[1];
    }

    /**
     * Returns form meta arguments:
     * fields_layout, submit_type and required_mark
     * in assoc array
     *
     * @param $form_id
     * @return array
     */
    public function get_args( $form_id ) {
        return $this->get_form_meta( '_jf_args', $form_id );
    }

    /**
     * Returns form actions
     *
     * @param $form_id
     * @return array
     */
    public function get_actions( $form_id ) {
        return $this->get_form_meta( '_jf_actions', $form_id );
    }

    /**
     * Returns form actions
     *
     * @param $form_id
     * @return array
     */
    public function get_preset( $form_id ) {
        return $this->get_form_meta( '_jf_preset', $form_id );
    }

}
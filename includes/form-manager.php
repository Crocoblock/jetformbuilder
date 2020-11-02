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
    const   NAMESPACE_FIELDS = 'jet-forms/';

    public function __construct() {
        if ( ! isset( $_GET['form_id'] ) ) {
            return;
        }
        
        add_filter( 'the_content', array( $this, 'inject_content' ) );
    }

    public function inject_content( $content ) {
        $builder = new Form_Builder( $_GET['form_id'] );

        return $builder->render_form( false );
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
     * Returns generators list
     *
     * @return [type] [description]
     */
    public function get_generators_list() {

        $generators = $this->get_options_generators();
        $result     = array(
            0 => __( 'Select function...', 'jet-engine' ),
        );

        foreach ( $generators as $id => $generator ) {
            $result[ $id ] = $generator->get_name();
        }

        return $result;

    }

}
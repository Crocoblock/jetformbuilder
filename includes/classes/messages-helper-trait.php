<?php


namespace Jet_Form_Builder\Classes;


trait Messages_Helper_Trait
{
    public $messages;

    public function get_messages_by_key( $key ) {
        $messages = array();

        foreach ( $this->messages as $type => $message ) {
            if ( ! isset( $message[ $key ] ) ) {
                break;
            }
            $messages[ $type ] = $message[ $key ];
        }

        return $messages;
    }

    public function get_default_messages_values_json() {
        return json_encode( $this->get_messages_by_key( 'value' ) );
    }

    public function get_default_messages_values() {
        return $this->get_messages_by_key( 'value' );
    }


    public function get_messages_labels() {
        return $this->get_messages_by_key( 'label' );
    }

}
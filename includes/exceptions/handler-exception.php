<?php


namespace Jet_Form_Builder\Exceptions;


use Jet_Form_Builder\Plugin;

abstract class Handler_Exception extends \Exception
{
    protected $default_type_message = 'failed';

    public function __construct( $message, $code = 0, \Exception $previous = null ) {
        parent::__construct( $message, $code, $previous );
    }

    public function get_form_status() {
        if ( Plugin::instance()->form->messages_manager->isset_message_type( $this->message ) ) {
            return $this->message;
        }
        return $this->default_type_message;
    }

}
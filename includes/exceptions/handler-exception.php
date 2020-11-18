<?php


namespace Jet_Form_Builder\Exceptions;


abstract class Handler_Exception extends \Exception
{
    protected $default_type_message = 'failed';
    protected $dynamic_message      = '';


    public function get_form_status() {
        return $this->message ? $this->message : $this->default_type_message;
    }

}
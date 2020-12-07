<?php

namespace Jet_Form_Builder\Classes;

class Factory
{
    private $namespace;

    public function __construct( $namespace ) {
        $this->namespace = $namespace;
    }

    public function create_many( array $classes = array(), $params = array() ) {
        if ( empty( $classes ) ) {
            return $classes;
        }
        foreach ( $classes as $index => $name ) {
            $classes[ $index ] = $this->create_one( $name, $params );
        }

        return $classes;
    }

    public function create_one( $name, $params = array() ) {
        if ( empty( $this->namespace ) ) {
            return false;
        }
        $class_name = Tools::make_class_name( $name );
        $class_name = $class_name ? $this->namespace . Tools::make_class_name( $name ) : '\stdClass';

        return new $class_name( $params );
    }


}
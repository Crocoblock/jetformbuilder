<?php

namespace Jet_Form_Builder\Classes;

class Factory {
	private $namespace;
	private $prefix = '';
	private $suffix = '';

	public function __construct( $namespace ) {
		$this->namespace = $namespace;
	}

	public function prefix( $value = '' ) {
		$this->prefix = $value;

		return $this;
	}

	public function suffix( $value = '' ) {
		$this->suffix = $value;

		return $this;
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

	public function create_one( $name, ...$params ) {
		if ( empty( $this->namespace ) ) {
			return false;
		}
		$class_name = $this->make_class_name( $this->prefix . $name . $this->suffix );
		$class_name = $class_name ? $this->namespace . $class_name : '\stdClass';

		return new $class_name( ...$params );
	}

	public static function make_class_name( $action ) {
		$delimiters = array( '_', '-' );
		$delimiter  = '_';

		foreach ( $delimiters as $del ) {
			if ( false !== strpos( $action, $del ) ) {
				$delimiter = $del;
				break;
			}
		}

		$action_class = explode( $delimiter, $action );

		foreach ( $action_class as $key => $value ) {
			$action_class[ $key ] = ucfirst( $value );
		}

		return implode( '_', $action_class );
	}


}
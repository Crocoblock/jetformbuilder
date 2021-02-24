<?php


namespace Jet_Form_Builder\Shortcodes;


class Manager {

	private $_types;

	public static $instance = null;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


	private function __construct() {
		$this->register_shortcodes();
	}

	private function register_shortcodes() {
		$types = array(
			new Form_Shortcode()
		);

		foreach ( $types as $type ) {
			$this->_types[ $type->get_name() ] = $type;
		}
	}

	private function get_shortcode_instance( $type ) {
		return isset( $this->_types[ $type ] ) ? $this->_types[ $type ] : false;
	}

	public static function get_shortcode( $type, $arguments ) {
		$format = '[%1$s %2$s]';

		$type = self::instance()->get_shortcode_instance( $type );

		if ( ! $type ) {
			return '';
		}

		return sprintf( $format, $type->get_name(), self::generate_arguments_string( $arguments ) );
	}

	public static function generate_arguments_string( $arguments ) {
		$response = array();

		foreach ( $arguments as $name => $value ) {
			$response[] = "$name=\"$value\"";
		}

		return implode( ' ', $response );
	}
}
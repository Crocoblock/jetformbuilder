<?php


namespace Jet_Form_Builder\Shortcodes;


abstract class Shortcode {

	public function __construct() {
		add_shortcode( $this->get_name(), array( $this, 'add_shortcode_callback' ) );
	}

	abstract public function get_name();

	abstract public function generate( $settings );

	protected function default_args() {
		return array();
	}

	protected function prepare_attributes( $attrs ) {
		$result = array();

		foreach ( $attrs as $name => $attr ) {
			if ( in_array( $name, array(
				'form_id',
				'submit_type',
				'required_mark',
				'fields_layout',
				'enable_progress'
			) ) ) {
				$result[ $name ] = $attr['default'];
			}
		}

		return $result;
	}

	public function add_shortcode_callback( $atts ) {
		$settings = shortcode_atts( $this->default_args(), $atts, $this->get_name() );

		return $this->generate( $settings );
	}

}
<?php


namespace Jet_Form_Builder\Shortcodes;

use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;

abstract class Shortcode implements Repository_Item_Instance_Trait {

	public function __construct() {
		add_shortcode( $this->get_name(), array( $this, 'add_shortcode_callback' ) );
	}

	abstract public function get_name();

	abstract public function generate( $settings );

	public function rep_item_id() {
		return $this->get_name();
	}

	protected function default_args() {
		return array();
	}

	protected function prepare_attributes( $attrs ) {
		$result       = array();
		$allowed_args = jet_form_builder()->post_type->get_default_args();

		foreach ( $attrs as $name => $attr ) {
			if ( isset( $allowed_args[ $name ] ) ) {
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

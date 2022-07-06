<?php


namespace Jet_Form_Builder\Shortcodes;

use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

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
		$result    = array();
		$arguments = new Form_Arguments();

		foreach ( $attrs as $name => $attr ) {
			if ( isset( $arguments->{$name} ) ) {
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

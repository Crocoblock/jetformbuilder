<?php


namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Html_Attributes_Trait {

	use Base_Attributes_Trait;

	public $html_attrs = array();

	public function add_attribute( $attr, $value = null ) {
		if ( '' === $value ) {
			return;
		}

		if ( is_array( $value ) ) {
			foreach ( $value as $item ) {
				$this->add_attribute( $attr, $item );
			}
			return;
		}

		if ( ! isset( $this->html_attrs[ $attr ] ) ) {
			$this->html_attrs[ $attr ] = $value;
		} else {
			$this->html_attrs[ $attr ] .= ' ' . $value;
		}
	}

	public function reset_attributes() {
		$this->html_attrs = array();
	}

	public function get_all_attrs() {
		return $this->html_attrs;
	}

}

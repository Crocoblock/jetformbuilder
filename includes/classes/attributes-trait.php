<?php


namespace Jet_Form_Builder\Classes;


trait Attributes_Trait {
	public $attrs = array();

	/**
	 * Add attribute
	 *
	 * @param $attr
	 * @param null $value
	 */
	public function add_attribute( $attr, $value = null ) {

		if ( '' === $value ) {
			return;
		}
		if ( ! isset( $this->attrs[ $attr ] ) ) {
			$this->attrs[ $attr ] = $value;
		} else {
			$this->attrs[ $attr ] .= ' ' . $value;
		}

	}

	/**
	 * Reset attributes array
	 */
	public function reset_attributes() {
		$this->attrs = array();
	}

	/**
	 * Render current attributes string
	 *
	 * @return void
	 */
	public function render_attributes_string() {
		$this->render_attributes_string_save();
		$this->attrs = array();
	}

	public function render_attributes_string_save() {
		echo $this->get_attributes_string_save();
	}

	public function get_attributes_string_save() {
		$response = '';
		foreach ( $this->attrs as $attr => $value ) {
			$response .= sprintf( ' %1$s="%2$s"', $attr, $value );
		}

		return $response;
	}

	public function get_attributes_string() {
		$response    = $this->get_attributes_string_save();
		$this->attrs = array();

		return $response;
	}


}
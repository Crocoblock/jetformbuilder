<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Dimensions extends Base {

	/**
	 * String with CSS variable macros.
	 * Should be rewritten in the classes with multiple parameters
	 * returned by get_parsed_value() method.
	 */
	public function css_var_value_format() {
		return '{{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}';
	}

	public function get_parsed_value() {
		if ( ! $this->raw_value ) {
			return [
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			];
		}

		if ( is_array( $this->raw_value ) ) {
			$value = [
				'top'    => isset( $this->raw_value['top'] ) ? $this->raw_value['top'] : '0',
				'right'  => isset( $this->raw_value['right'] ) ? $this->raw_value['right'] : '0',
				'bottom' => isset( $this->raw_value['bottom'] ) ? $this->raw_value['bottom'] : '0',
				'left'   => isset( $this->raw_value['left'] ) ? $this->raw_value['left'] : '0',
			];
		} else {
			$value = [
				'top'    => $this->raw_value,
				'right'  => $this->raw_value,
				'bottom' => $this->raw_value,
				'left'   => $this->raw_value,
			];
		}

		/**
		 * Check - if values has no other units provided - assume it's pixels
		 */
		foreach ( $value as $side => $val ) {
			if ( ! preg_match( '/\d+[^\d]+/', $val ) ) {
				$value[ $side ] = $val . 'px';
			}
		}

		return $value;
	}
}

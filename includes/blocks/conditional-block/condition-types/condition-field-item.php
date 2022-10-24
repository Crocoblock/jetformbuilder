<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types;


class Condition_Field_Item extends Base_Condition_Type {

	protected $value;
	protected $field;
	protected $use_preset = false;
	protected $parsed_value;

	public function is_supported( array $condition ): bool {
		return true;
	}

	public function init( array $condition ) {
		parent::init( $condition );

		$this->use_preset   = false;
		$this->parsed_value = null;

		$this->value = $condition['value'] ?? '';
		$this->field = $condition['field'] ?? '';
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'value'      => $this->get_parsed_value(),
				'field'      => $this->get_field(),
				'use_preset' => $this->use_preset,
			)
		);
	}

	/**
	 * @return array|string
	 */
	protected function get_parsed_value() {
		if ( ! is_null( $this->parsed_value ) ) {
			return $this->parsed_value;
		}

		$value = jet_fb_parse_dynamic( $this->value );

		$this->use_preset   = $this->value !== $value;
		$this->parsed_value = $this->parse_string( $value );

		return $this->parsed_value;
	}

	protected function parse_string( string $value ) {
		$value_in_array = explode( ',', $value );

		if ( 1 === count( $value_in_array ) ) {
			return $value;
		}

		return array_map( 'trim', $value_in_array );
	}

	/**
	 * @return string
	 */
	public function get_value(): string {
		return $this->value;
	}

	/**
	 * @return string
	 */
	public function get_field(): string {
		return $this->field;
	}

}
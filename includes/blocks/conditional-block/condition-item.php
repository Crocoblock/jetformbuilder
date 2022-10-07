<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Base_Function;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Base_Operator;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Item implements Arrayable {

	private $value;
	private $field;
	private $operator;
	private $use_preset = false;

	private $parsed_value;

	/**
	 * All condition options
	 *
	 * @var array
	 */
	public $base;

	/**
	 * Condition_Item constructor.
	 *
	 * @param array $condition
	 *
	 * @throws Repository_Exception
	 */
	public function __construct( array $condition ) {
		$this->base     = $condition;
		$this->value    = $condition['value'] ?? '';
		$this->field    = $condition['field'] ?? '';
		$this->operator = $condition['operator'] ?? '';

		Condition_Manager::instance()->get_operators()->isset_operator( $this->operator );
	}

	public function to_array(): array {
		$base = array(
			'value'      => $this->get_parsed_value(),
			'field'      => $this->get_field(),
			'operator'   => $this->get_operator(),
			'use_preset' => $this->use_preset,
		);

		return array_merge(
			$base,
			$this->get_operator_object()->to_response( $base, $this )
		);
	}


	public function get_operator_object(): Base_Operator {
		return Condition_Manager::instance()->get_operators()->rep_get_item_or_die( $this->operator );
	}

	/**
	 * @return array|string
	 */
	public function get_parsed_value() {
		if ( ! is_null( $this->parsed_value ) ) {
			return $this->parsed_value;
		}

		$value = jet_fb_parse_dynamic( $this->value );

		$this->use_preset   = $this->value !== $value;
		$this->parsed_value = $this->parse_string( $value );

		return $this->parsed_value;
	}

	private function parse_string( string $value ) {
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

	/**
	 * @return string
	 */
	public function get_operator(): string {
		return $this->operator;
	}

}

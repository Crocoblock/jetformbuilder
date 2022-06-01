<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Base_Function;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Base_Operator;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Item implements Arrayable {

	private $type;
	private $value;
	private $field;
	private $operator;

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
		$this->type     = $condition['type'] ?? '';
		$this->operator = $condition['operator'] ?? '';

		Condition_Manager::instance()->get_functions()->isset_function( $this->type );
		Condition_Manager::instance()->get_operators()->isset_operator( $this->operator );
	}

	public function to_array(): array {
		/** @var Base_Function $function */
		$function = Condition_Manager::instance()->get_functions()->rep_get_item_or_die( $this->type );
		/** @var Base_Operator $operator */
		$operator = Condition_Manager::instance()->get_operators()->rep_get_item_or_die( $this->operator );

		$base = array(
			'value'    => $this->get_parsed_value(),
			'type'     => $this->get_type(),
			'field'    => $this->get_field(),
			'operator' => $this->get_operator(),
		);

		return array_merge(
			$base,
			$function->to_response( $this ),
			$operator->to_response( $this )
		);
	}

	public function get_parsed_value(): string {
		if ( ! is_null( $this->parsed_value ) ) {
			return $this->parsed_value;
		}

		$value = ( new Dynamic_Preset() )->parse_json( $this->value );

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
	public function get_type(): string {
		return $this->type;
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

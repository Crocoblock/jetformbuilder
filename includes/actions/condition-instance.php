<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Instance {

	private $operator;
	private $must_be_true = true;
	private $field_name;
	private $field_value;
	private $compare;
	private $compare_value_format_type;
	private $compare_value_format_custom;

	private function get_manager(): Condition_Manager {
		return jet_form_builder()->form_handler->action_handler->condition_manager();
	}

	/**
	 * @param $condition
	 *
	 * @return $this
	 * @throws Condition_Exception
	 */
	public function set_condition( $condition ): Condition_Instance {
		$this->set_operator( $condition['operator'] ?? false );
		$this->set_field( $condition['field'] ?? '' );
		$this->set_compare( $this->get_parsed_value( $condition['default'] ?? '' ) );
		$this->set_compare_value_format( $condition['compare_value_format'] ?? '' );
		$this->set_compare_value_format_custom( $condition['compare_value_format_custom'] ?? '' );

		return $this;
	}

	public function get_compare_value_format(): string {
		return $this->compare_value_format_type;
	}

	public function get_compare_value_format_custom(): string {
		return $this->compare_value_format_custom;
	}

	public function set_compare_value_format( $format ): Condition_Instance {
		$this->compare_value_format_type = $format;

		return $this;
	}

	public function set_compare_value_format_custom( $custom ): Condition_Instance {
		$this->compare_value_format_custom = $custom;

		return $this;
	}

	public function set_operator( string $operator ): Condition_Instance {
		$operators = $this->get_manager()->get_operators_list();

		if ( $operator && in_array( $operator, $operators, true ) ) {
			$this->operator = $operator;
		}

		return $this;
	}

	public function get_operator() {
		return $this->operator;
	}

	/**
	 * @param $field_name
	 *
	 * @return $this
	 * @throws Condition_Exception
	 */
	public function set_field( $field_name ): Condition_Instance {
		$this->field_name = $field_name;

		return $this->set_field_value( $this->get_request_field( $field_name ) );
	}

	public function get_field_name() {
		return $this->field_name;
	}

	public function set_field_value( $value ): Condition_Instance {
		$this->field_value = $value;

		return $this;
	}

	public function get_field_value() {
		return $this->field_value;
	}

	public function set_compare( $compare ): Condition_Instance {
		$this->compare = $compare;

		return $this;
	}

	public function get_compare() {
		return $this->compare;
	}

	public function set_must_be( $must_be ): Condition_Instance {
		$this->must_be_true = (bool) $must_be;

		return $this;
	}

	public function get_must_be(): bool {
		return $this->must_be_true;
	}

	public function get_parsed_value( $maybe_json_string ) {
		return ( new Dynamic_Preset() )->parse_value(
			array(
				'default' => $maybe_json_string,
			)
		);
	}


	/**
	 * @param $field_name
	 *
	 * @return mixed
	 * @throws Condition_Exception
	 */
	public function get_request_field( $field_name ) {
		$handler = jet_form_builder()->form_handler->action_handler;

		if ( isset( $handler->request_data[ $field_name ] ) ) {
			return $handler->request_data[ $field_name ];
		}

		$this->error( "empty_field::{$field_name}" );

		return false;
	}

	/**
	 * @throws Condition_Exception
	 */
	public function is_correct_with_throw() {
		$this->end_condition( $this->is_correct(), 'The condition was not met.' );
	}


	/**
	 * @return bool
	 */
	public function is_correct(): bool {
		$result = $this->check();

		return $this->get_must_be() ? $result : ! $result;
	}

	/**
	 * @return bool
	 */
	public function check(): bool {
		switch ( $this->get_operator() ) {
			case 'equal':
				return ( (string) $this->get_field_value() ) === ( (string) $this->get_compare() );
			case 'greater':
				return $this->get_field_value() > $this->get_compare();
			case 'less':
				return $this->get_field_value() < $this->get_compare();

			case 'between':
				$field          = $this->get_field_value();
				$compare_values = array_map( 'trim', explode( ',', $this->get_compare() ) );

				if ( count( $compare_values ) !== 2 ) {
					return false;
				}

				return ( $compare_values[0] < $field && $compare_values[1] > $field );
			case 'one_of':
				$field          = $this->get_field_value();
				$compare_values = array_map( 'trim', explode( ',', $this->get_compare() ) );

				if ( ! is_array( $compare_values ) ) {
					return false;
				}

				return in_array( (string) $field, $compare_values, true );
			case 'contain':
				return ( strpos( $this->get_field_value(), $this->get_compare() ) !== false );
			case 'later_than':
				return false;
			default:
				return apply_filters( 'jet-form-builder/actions/process-condition', false, $this );
		}
	}

	public function transform_compare_value() {
		$transformers
	}

	/**
	 * @param $success
	 * @param mixed ...$additional
	 *
	 * @throws Condition_Exception
	 */
	public function end_condition( $success, ...$additional ) {
		$this->get_manager()->throw_by_method( $success, ...$additional );
	}

	/**
	 * @param mixed ...$additional
	 *
	 * @throws Condition_Exception
	 */
	public function error( ...$additional ) {
		$this->end_condition( false, ...$additional );
	}


}

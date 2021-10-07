<?php


namespace Jet_Form_Builder\Classes;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Helper {

	private $conditions;
	private $operator;

	public function set_conditions( array $conditions ) {
		$this->conditions = $conditions;

		return $this;
	}

	public function set_condition_operator( string $operator ) {
		$this->operator = $operator;

		return $this;
	}

	/**
	 * @throws Condition_Exception
	 */
	public function check_all() {
		if ( empty( $this->conditions ) ) {
			return;
		}

		$is_correct     = false;
		$last_condition = array();

		try {
			foreach ( $this->conditions as $condition ) {
				$is_correct = $this->is_correct( $condition );

				if ( 'or' === $this->operator ) {
					if ( $is_correct ) {
						break;
					}
					$last_condition = $condition;
					continue;
				}

				if ( 'and' === $this->operator ) {
					if ( ! $is_correct ) {
						$last_condition = $condition;
						break;
					}
				}
			}
		} catch ( Condition_Exception $exception ) {
			throw new Condition_Exception( $exception->getMessage(), $exception->get_additional() );
		}

		if ( ! $is_correct ) {
			throw new Condition_Exception( 'the condition was not met', array(
				'condition' => $last_condition,
				'field'     => $this->get_field( $last_condition ),
			) );
		}

	}

	/**
	 * @param $condition
	 *
	 * @return mixed
	 * @throws Condition_Exception
	 */
	public function get_field( $condition ) {
		$handler = jet_form_builder()->form_handler->action_handler;
		$field   = $condition['field'] ?? '';

		if ( isset( $handler->request_data[ $field ] ) ) {
			return $handler->request_data[ $field ];
		}

		throw new Condition_Exception( "empty_field::{$field}" );
	}

	/**
	 * @param $condition
	 * @param null $result
	 *
	 * @return bool|null
	 * @throws Condition_Exception
	 */
	public function is_correct( $condition, $result = null ) {
		if ( is_null( $result ) ) {
			$result = $this->check( $condition );
		}
		$execute = $condition['execute'] ?? true;

		return $execute ? $result : ! $result;
	}

	/**
	 * @param $condition
	 *
	 * @return bool
	 * @throws Condition_Exception
	 */
	public function check( $condition ) {
		$compare = $this->get_parsed_value( $condition );

		switch ( $condition['operator'] ) {
			case 'equal':
				return $this->get_field( $condition ) == $compare;
			case 'greater':
				return $this->get_field( $condition ) > $compare;
			case 'less':
				return $this->get_field( $condition ) < $compare;

			case 'between':
				$field          = $this->get_field( $condition );
				$compare_values = array_map( 'trim', explode( ',', $compare ) );

				if ( count( $compare_values ) != 2 ) {
					return false;
				}

				return ( $compare_values[0] < $field && $compare_values[1] > $field );
			case 'one_of':
				$field          = $this->get_field( $condition );
				$compare_values = array_map( 'trim', explode( ',', $compare ) );

				if ( ! is_array( $compare_values ) ) {
					return false;
				}

				return ( in_array( $field, $compare_values ) );
			case 'contain':
				return ( strpos( $this->get_field( $condition ), $compare ) !== false );
		}

		return false;
	}

	private function get_parsed_value( $condition ) {
		return ( new Dynamic_Preset )->parse_value( $condition );
	}


}
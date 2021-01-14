<?php


namespace Jet_Form_Builder\Classes;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Helper {

	private $conditions;
	private $action_handler;

	public function __construct( Base $action, Action_Handler $action_handler ) {
		$this->conditions     = $action->conditions;
		$this->action_handler = $action_handler;

		$this->check_all();
	}

	public function check_all() {
		foreach ( $this->conditions as $condition ) {
			if ( ( $condition['execute'] && ! $this->check( $condition ) )
			     || ( ! $condition['execute'] && $this->check( $condition ) )
			) {
				throw new Condition_Exception();
			}
		}
	}

	public function check( $condition ) {
		$request = $this->action_handler->request_data;
		$compare = $this->get_parsed_value( $condition );

		switch ( $condition['operator'] ) {
			case 'equal':
				if ( isset( $request[ $condition['field'] ] ) ) {
					return $request[ $condition['field'] ] == $compare;
				}
				break;
			case 'greater':
				if ( isset( $request[ $condition['field'] ] ) ) {
					return $request[ $condition['field'] ] > $compare;
				}
				break;
			case 'less':
				if ( isset( $request[ $condition['field'] ] ) ) {
					return $request[ $condition['field'] ] < $compare;
				}
				break;
			case 'between':
				if ( isset( $request[ $condition['field'] ] ) ) {
					$compare_values = array_map( 'trim', explode( ',', $compare ) );

					if ( count( $compare_values ) != 2 ) {
						return false;
					}

					return ( $compare_values[0] < $request[ $condition['field'] ] && $compare_values[1] > $request[ $condition['field'] ] );
				}
				break;
			case 'one_of':
				if ( isset( $request[ $condition['field'] ] ) ) {
					$compare_values = array_map( 'trim', explode( ',', $compare ) );

					if ( ! is_array( $compare_values ) ) {
						return false;
					}

					return ( in_array( $request[ $condition['field'] ], $compare_values ) );
				}
				break;
			case 'contain':
				if ( isset( $request[ $condition['field'] ] ) ) {
					return ( strpos( $request[ $condition['field'] ], $compare ) !== false );
				}
				break;
		}

		return false;
	}

	private function get_parsed_value( $condition ) {
		return ( new Dynamic_Preset )->parse_value( $condition );
	}


}
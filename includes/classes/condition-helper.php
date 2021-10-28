<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Condition_Helper {

	private $conditions;
	private $action_handler;

	public function get_settings(): array {
		return array(
			'item'                  => array(
				'execute'                     => true,
				'operator'                    => '',
				'field'                       => '',
				'default'                     => '',
				'compare_value_format'        => '',
				'compare_value_format_custom' => '',
			),
			'compare_value_formats' => array(),
			'help'                  => array(
				'compare_value_format' => __( 'Useful when comparing dates.', 'jet-form-builder' ),
			),
			'operators'             => array(
				array(
					'label' => '--',
					'value' => '',
				),
				array(
					'label' => __( 'Equal', 'jet-form-builder' ),
					'value' => 'equal',
				),
				array(
					'label' => __( 'Greater than', 'jet-form-builder' ),
					'value' => 'greater',
				),
				array(
					'label' => __( 'Less than', 'jet-form-builder' ),
					'value' => 'less',
				),
				array(
					'label' => __( 'Between', 'jet-form-builder' ),
					'value' => 'between',
				),
				array(
					'label' => __( 'In the list', 'jet-form-builder' ),
					'value' => 'one_of',
				),
				array(
					'label' => __( 'Contain text', 'jet-form-builder' ),
					'value' => 'contain',
				),
				array(
					'label' => __( 'Later than', 'jet-form-builder' ),
					'value' => 'later_than',
				),
				array(
					'label' => __( 'Earlier than', 'jet-form-builder' ),
					'value' => 'earlier_than',
				),
			),
		);
	}

	public function __construct( Base $action, Action_Handler $action_handler ) {
		$this->conditions     = $action->conditions;
		$this->action_handler = $action_handler;

		$this->check_all();
	}

	public function check_all() {
		$request = $this->action_handler->request_data;

		foreach ( $this->conditions as $condition ) {
			$condition['compare'] = $this->get_parsed_value( $condition );

			if ( ( $condition['execute'] && ! $this->check( $condition ) )
			     || ( ! $condition['execute'] && $this->check( $condition ) )
			) {
				throw new Condition_Exception(
					'',
					array(
						'condition' => $condition,
						'field'     => isset( $request[ $condition['field'] ] ) ? $request[ $condition['field'] ] : null,
					)
				);
			}
		}
	}

	public function check( $condition ) {
		$request = $this->action_handler->request_data;
		$compare = $condition['compare'];

		if ( ! isset( $request[ $condition['field'] ] ) ) {
			return false;
		}

		$field = $request[ $condition['field'] ];

		switch ( $condition['operator'] ) {
			case 'equal':
				return ( (string) $field ) === ( (string) $compare );
			case 'greater':
				return $field > $compare;
			case 'less':
				return $field < $compare;
			case 'between':
				$compare_values = array_map( 'trim', explode( ',', $compare ) );

				if ( count( $compare_values ) !== 2 ) {
					return false;
				}

				return ( $compare_values[0] < $field && $compare_values[1] > $field );
			case 'one_of':
				$compare_values = array_map( 'trim', explode( ',', $compare ) );

				if ( ! is_array( $compare_values ) ) {
					return false;
				}

				return in_array( (string) $field, $compare_values, true );
			case 'contain':
				return ( strpos( $field, $compare ) !== false );
			default:
				return apply_filters(
					'jet-form-builder/actions/process-condition',
					false,
					$condition,
					$field,
					$compare,
					$request
				);
		}
	}

	private function get_parsed_value( $condition ) {
		return ( new Dynamic_Preset() )->parse_value( $condition );
	}


}

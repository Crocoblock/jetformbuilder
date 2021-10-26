<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Base;

abstract class Scenario_View_Base extends Scenario_Item_Base {

	abstract public function get_columns_handlers(): array;

	abstract public function get_columns_headings(): array;

	public function prepare_record( $record ): array {
		$prepared = array();

		foreach ( $this->get_columns_handlers() as $column_name => $column_attrs ) {
			$value   = $column_attrs['value'] ?? false;
			$default = $this->prepare_record_value_type( $column_attrs['default'] ?? false, $record );

			if ( ! is_callable( $value ) ) {
				$column_attrs['value'] = $value ?: $default;
			} else {
				$column_attrs['value'] = $this->prepare_record_value_type(
					call_user_func( $value, $record, $default ),
					$column_attrs
				);
			}

			$prepared[ $column_name ] = $column_attrs;
		}

		return $prepared;
	}

	protected function prepare_record_value_type( $value, $column ) {
		$type = $column['type'] ?? 'string';

		switch ( $type ) {
			case 'integer':
				return (int) $value;
			case 'float':
				return (float) $value;
			case 'array':
				return (array) $value;
			default:
				return (string) $value;
		}
	}

}

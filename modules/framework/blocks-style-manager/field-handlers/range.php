<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Range extends Base {

	/**
	 * Get the parsed value.
	 *
	 * @return array
	 */
	public function get_parsed_value() {

		if ( is_array( $this->raw_value )
			&& isset( $this->raw_value['value'] )
			&& isset( $this->raw_value['unit'] )
		) {
			return array(
				'value' => ! empty( $this->raw_value['value'] ) ? esc_attr( $this->raw_value['value'] ) : 0,
				'unit'  => esc_attr( $this->raw_value['unit'] ),
			);
		}

		return array(
			'value' => ! empty( $this->raw_value ) ? esc_attr( $this->raw_value ) : 0,
			'unit'  => '',
		);
	}
}

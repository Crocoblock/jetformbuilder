<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Range extends Base {

	/**
	 * Get the parsed value.
	 *
	 * @return array
	 */
	public function get_parsed_value() {
		return array(
			'value' => ! empty( $this->raw_value ) ? floatval( $this->raw_value ) : 0,
			'unit'  => '',
		);
	}
}

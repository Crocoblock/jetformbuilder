<?php


namespace Jet_Form_Builder\Blocks\Map_Field;

class MapTools {

	const STRING  = 'location_string';
	const ARRAY   = 'location_array';
	const ADDRESS = 'location_address';

	public static function get_formats(): array {
		return array(
			array(
				'value' => self::STRING,
				'label' => __( 'String', 'jet-form-builder' ),
			),
			array(
				'value' => self::ARRAY,
				'label' => __( 'Array', 'jet-form-builder' ),
			),
			array(
				'value' => self::ADDRESS,
				'label' => __( 'Address', 'jet-form-builder' ),
			),
		);
	}

}

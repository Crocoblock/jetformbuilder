<?php


namespace Jet_Form_Builder\Blocks\Map_Field;

class Map_Tools {

	const STRING  = 'location_string';
	const ARRAY   = 'location_array';
	const ADDRESS = 'location_address';

	public static function get_formats(): array {
		return array(
			array(
				'value' => self::STRING,
				'label' => __( 'String', 'jet-form-builder' ),
				'title' => __( 'String with location Lat and Lng separated by coma', 'jet-form-builder' ),
			),
			array(
				'value' => self::ARRAY,
				'label' => __( 'Array', 'jet-form-builder' ),
				'title' => __( 'Array with location Lat and Lng', 'jet-form-builder' ),
			),
			array(
				'value' => self::ADDRESS,
				'label' => __( 'Address', 'jet-form-builder' ),
				'title' => __( 'Location Address', 'jet-form-builder' ),
			),
		);
	}

}

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

	public static function is_supported(): bool {
		return (
			function_exists( 'jet_engine' ) &&
			version_compare( jet_engine()->get_version(), '3.0.0', '>=' ) &&
			jet_engine()->modules->is_module_active( 'maps-listings' )
		);
	}

	public static function get_help_message(): string {
		return sprintf(
			__(
				'The Map Field type requires both the <a href="%1$s">JetEngine</a> plugin and its <a href="%2$s">Map Listing</a> feature to be activated.',
				'jet-form-builder'
			),
			'https://crocoblock.com/plugins/jetengine/',
			'https://crocoblock.com/knowledge-base/articles/jetengine-maps-listing-overview/'
		);
	}

}

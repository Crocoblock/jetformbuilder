<?php


namespace Jet_Form_Builder\Blocks\Types;


use Jet_Engine\Modules\Maps_Listings\Base_Provider;
use Jet_Engine\Modules\Maps_Listings\Module;

class Map_Field extends Base {

	/**
	 * @return string
	 */
	public function get_name() {
		return 'map-field';
	}

	public function is_supported(): bool {
		return (
			function_exists( 'jet_engine' ) &&
			jet_engine()->modules->is_module_active( 'maps-listings' )
		);
	}


	/**
	 * @param null $wp_block
	 *
	 * @return mixed
	 */
	public function get_block_renderer( $wp_block = null ) {
		/** @var Base_Provider $provider */
		$provider = Module::instance()->providers->get_active_map_provider();

		$provider->register_public_assets();
		$provider->public_assets( null, array( 'marker_clustering' => false ), null );

		wp_enqueue_script(
			'jet-fb-map-field',
			jet_engine()->plugin_url( 'includes/modules/maps-listings/assets/js/admin/map-field.js' ),
			array( 'jquery', 'wp-api-fetch' ),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script( 'jet-engine-map-field', 'JetMapFieldsSettings', array(
			'api'     => jet_engine()->api->get_route( 'get-map-point-data' ),
			'apiHash' => jet_engine()->api->get_route( 'get-map-location-hash' ),
			'i18n'    => array(
				'loading'   => esc_html__( 'Loading ...', 'jet-engine' ),
				'notFound'  => esc_html__( 'Address not found', 'jet-engine' ),
				'resetBtn'  => esc_html__( 'Reset location', 'jet-engine' ),
				'descTitle' => esc_html__( 'Lat and Lng are separately stored in the following fields', 'jet-engine' ),
			),
		) );
		return 'Map Field';
	}

}
<?php


namespace Jet_Form_Builder\Blocks\Types;

use Jet_Engine\Modules\Maps_Listings\Base_Provider;
use Jet_Engine\Modules\Maps_Listings\Module;
use Jet_Form_Builder\Blocks\Map_Field\Map_Tools;
use Jet_Form_Builder\Blocks\Render\Base as RenderBase;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Options_Page;

class Map_Field extends Base {

	/**
	 * @return string
	 */
	public function get_name() {
		return 'map-field';
	}

	public function get_field_settings(): array {
		return array(
			'height'       => $this->block_attrs['height'] ?? 300,
			'format'       => $this->block_attrs['format'] ?? Map_Tools::STRING,
			'field_prefix' => $this->block_attrs['name'] ?? '',
		);
	}

	public function get_extra_fields( Base_Source $source ): array {
		if ( is_a( $source, Preset_Source_Options_Page::class ) ) {
			return array(
				'self' => '%prop%',
				'lat'  => '%prop|md5%_lat',
				'lng'  => '%prop|md5%_lng',
			);
		}

		return array(
			'self' => '%key%',
			'lat'  => '%key|md5%_lat',
			'lng'  => '%key|md5%_lng',
		);
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_EXACTLY );
	}

	protected function get_value_from_repeater( array $row, string $name ) {
		if ( ! isset( $row[ $name ] ) ) {
			return false;
		}

		return array(
			'self' => $row[ $name ],
			'lat'  => $row[ $name . '_lat' ],
			'lng'  => $row[ $name . '_lng' ],
		);
	}

	protected function render_field( array $attrs, $content = null, $wp_block = null ): string {
		if ( ! Map_Tools::is_supported() ) {
			return Map_Tools::get_help_message();
		}

		return parent::render_field( $attrs, $content, $wp_block );
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
			jet_form_builder()->plugin_url( 'assets/js/map-field.js' ),
			array( 'jquery', 'wp-api-fetch' ),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			'jet-fb-map-field',
			'JetMapFieldsSettings',
			array(
				'api'     => jet_engine()->api->get_route( 'get-map-point-data' ),
				'apiHash' => jet_engine()->api->get_route( 'get-map-location-hash' ),
				'i18n'    => array(
					'loading'   => esc_html__( 'Loading ...', 'jet-form-builder' ),
					'notFound'  => esc_html__( 'Address not found', 'jet-form-builder' ),
					'resetBtn'  => esc_html__( 'Reset location', 'jet-form-builder' ),
					'descTitle' => esc_html__( 'Lat and Lng are separately stored in the following fields', 'jet-form-builder' ),
				),
			)
		);

		return ( new class( $this ) extends RenderBase {
			public function get_name() {
				return 'map-field';
			}
		} )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'JetFBMapField',
			array(
				'formats'      => Map_Tools::get_formats(),
				'image'        => jet_form_builder()->plugin_url( 'assets/img/map-placeholder.png' ),
				'is_supported' => Map_Tools::is_supported(),
				'help'         => Map_Tools::get_help_message(),
			)
		);
	}

}

<?php


namespace JFB_Compatibility\Jet_Engine\Blocks;

use Jet_Engine\Modules\Maps_Listings\Base_Provider;
use Jet_Engine\Modules\Maps_Listings\Module;
use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Blocks\Render\Base as RenderBase;
use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Compatibility\Jet_Engine\Preset_Sources\Preset_Source_Options_Page;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use JFB_Components\Compatibility\Compatibility_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Map_Field extends Base {

	const HANDLE = 'jet-fb-map-field';

	/**
	 * @return string
	 */
	public function get_name() {
		return 'map-field';
	}

	public function get_path_metadata_block() {
		return Compatibility_Tools::get_dir(
			'jet-engine',
			"blocks-metadata/{$this->get_name()}"
		);
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

		return ( new class( $this ) extends RenderBase {
			public function get_name() {
				return 'map-field';
			}
		} )->render();
	}

}

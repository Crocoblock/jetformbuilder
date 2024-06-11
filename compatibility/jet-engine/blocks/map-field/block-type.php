<?php


namespace JFB_Compatibility\Jet_Engine\Blocks\Map_Field;

use Jet_Engine\Modules\Maps_Listings\Base_Provider;
use Jet_Engine\Modules\Maps_Listings\Module;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Compatibility\Jet_Engine\Preset_Sources\Preset_Source_Options_Page;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use JFB_Compatibility\Jet_Engine\Jet_Engine;
use JFB_Modules\Blocks_V2\Interfaces\Block_Type_With_Assets_Interface;
use JFB_Modules\Blocks_V2\Traits\Block_Type_With_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	const HANDLE       = 'jet-fb-map-field';
	const DEFAULT_ZOOM = 14;

	/**
	 * @return string
	 */
	public function get_name() {
		return 'map-field';
	}

	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		/** @var \JFB_Modules\Block_Parsers\Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'block-parsers' );

		$module->install( new Block_Parser() );

		parent::register_block();
	}

	public function get_field_settings(): array {
		return array(
			'format'       => $this->block_attrs['format'] ?? Tools::STRING,
			'field_prefix' => $this->block_attrs['name'] ?? '',
			'zoom'         => $this->block_attrs['zoom'] ?? 14,
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

	public function set_preset() {
		parent::set_preset();

		$this->apply_plain_coords();
		$this->sanitize_zoom();
	}

	/**
	 * Allows you to specify default coordinates in the following format:
	 * 50.4496017860376, 30.52537590265274.
	 *
	 * Where the first number is lat (Latitude), and the second is lng (Longitude)
	 *
	 * @since 3.2.0
	 */
	private function apply_plain_coords() {
		if ( empty( $this->block_attrs['default'] ) ||
			! is_string( $this->block_attrs['default'] )
		) {
			$this->apply_plain_preset();

			return;
		}

		$this->try_to_split_coords( $this->block_attrs['default'] );
	}

	private function apply_plain_preset() {
		if ( empty( $this->block_attrs['default']['self'] ) ||
			! is_string( $this->block_attrs['default']['self'] ) ||
			! empty( $this->block_attrs['default']['lat'] ) ||
			! empty( $this->block_attrs['default']['lng'] )
		) {
			return;
		}

		$this->try_to_split_coords( $this->block_attrs['default']['self'] );
	}

	private function try_to_split_coords( string $plain_coords ) {
		$parts = array_map( 'trim', explode( ',', $plain_coords ) );

		if ( 2 !== count( $parts ) ) {
			return;
		}

		foreach ( $parts as $coordinate ) {
			if ( ! is_numeric( $coordinate ) ) {
				return;
			}
		}

		$this->block_attrs['default'] = array(
			'self' => $plain_coords,
			'lat'  => $parts[0],
			'lng'  => $parts[1],
		);
	}

	private function sanitize_zoom() {
		if ( ! array_key_exists( 'zoom', $this->block_attrs ) ) {
			return;
		}

		$zoom = &$this->block_attrs['zoom'];

		if ( ! is_numeric( $zoom ) ||
			$zoom < 1 || 18 < $zoom
		) {
			$zoom = self::DEFAULT_ZOOM;
		}
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
		if ( ! Tools::is_supported() ) {
			return Tools::get_help_message();
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

		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * @param $path
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_field_template( $path ) {
		/** @var Jet_Engine $compat */
		$compat = jet_form_builder()->compat( Jet_Engine::class );

		return $compat->get_dir( 'blocks/map-field/block-template.php' );
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Jet_Engine $compat */
		$compat = jet_form_builder()->compat( Jet_Engine::class );

		return $compat->get_dir( 'blocks/map-field' );
	}

}

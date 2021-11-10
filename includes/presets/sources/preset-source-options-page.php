<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Preset_Exception;

class Preset_Source_Options_Page extends Base_Source {

	public function get_id() {
		return 'option_page';
	}

	public function condition(): bool {
		return function_exists( 'jet_engine' );
	}

	/**
	 * @return object
	 * @throws Preset_Exception
	 */
	public function query_source() {
		$key = explode( '::', $this->prop );

		if ( 2 !== count( $key ) || empty( $key[0] ) ) {
			throw new Preset_Exception( "Invalid prop: {$this->prop}" );
		}

		$item = jet_engine()->options_pages->registered_pages[ $key[0] ] ?? false;

		if ( ! $item ) {
			throw new Preset_Exception( "Undefined option page: {$key[0]}" );
		}

		if ( empty( $key[1] ) ) {
			throw new Preset_Exception( "Undefined {$key[0]} page value: {$key[1]}" );
		}

		$this->prop = $key[1];

		return $item;
	}

	/**
	 * @param string $prop
	 *
	 * @return string
	 *
	 * @throws Preset_Exception
	 * @see https://gist.github.com/MjHead/49ebe7ecc20bff9aaf8516417ed27c38
	 */
	public function default_prop( string $prop ) {
		if ( ! is_a( $this->src(), '\Jet_Engine_Options_Page_Factory' ) ) {
			throw new Preset_Exception( 'Source is not instance of ' . \Jet_Engine_Options_Page_Factory::class );
		}

		return $this->src()->get( $prop );
	}

	public function after_register() {
		add_filter( 'jet-form-builder/editor/preset-config', array( $this, 'manage_config' ) );
	}

	public function manage_config( $config ) {
		$config['global_fields'][0]['options'][] = array(
			'value' => $this->get_id(),
			'label' => __( 'Option Page', 'jet-form-builder' ),
		);

		$config['map_fields'][] = array(
			'name'             => 'prop',
			'label'            => __( 'Option Value', 'jet-form-builder' ),
			'type'             => 'grouped_select',
			'options'          => Tools::with_placeholder(
				jet_engine()->options_pages->get_options_for_select( 'all', 'blocks' )
			),
			'parent_condition' => array(
				'field' => 'from',
				'value' => $this->get_id(),
			),
		);

		return $config;
	}

}

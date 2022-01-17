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
		$key = explode( '::', $prop );

		if ( empty( $key[1] ) ) {
			throw new Preset_Exception( "Undefined {$key[0]} page value: {$key[1]}" );
		}

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
				$this->get_options_fields_for_select()
			),
			'parent_condition' => array(
				'field' => 'from',
				'value' => $this->get_id(),
			),
		);

		return $config;
	}

	public function get_options_fields_for_select(): array {
		$result = array();

		foreach ( jet_engine()->options_pages->options_list as $slug => $data ) {
			$blocks_group = array();

			foreach ( $data['options'] as $name => $field_data ) {
				$black_list = array( 'html', 'tab', 'accordion', 'endpoint' );

				if ( ! in_array( $field_data['type'], $black_list, true ) ) {
					$group[ $name ] = $field_data['title'];

					$blocks_group[] = array(
						'value' => $name,
						'label' => $field_data['title'],
					);
				}
			}
			if ( ! empty( $blocks_group ) ) {
				$result[] = array(
					'label'  => $data['label'],
					'values' => $blocks_group,
				);
			}
		}



		return $result;

	}

}

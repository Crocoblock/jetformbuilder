<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine\Preset_Sources;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Sources\Base_Source;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_Source_Options_Page extends Base_Source {

	private $page = '';

	public function get_id() {
		return 'option_page';
	}

	/**
	 * @return object
	 * @throws Preset_Exception
	 */
	public function query_source() {
		if ( empty( $this->page ) ) {
			throw new Preset_Exception( 'Empty page' );
		}

		$item = jet_engine()->options_pages->registered_pages[ $this->page ] ?? false;

		if ( ! $item ) {
			throw new Preset_Exception( "Undefined option page: {$this->page}" );
		}

		return $item;
	}

	/**
	 * @return string
	 * @throws Preset_Exception
	 */
	protected function get_prop() {
		$prop = explode( '::', parent::get_prop() );

		$this->page = $prop[0] ?? '';
		$slug       = $prop[1] ?? '';

		if ( empty( $this->page ) || empty( $slug ) ) {
			throw new Preset_Exception( 'Undefined option' );
		}

		return $slug;
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

	protected function before_query_extra_field( $field ) {
		$this->prop = $field;
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

<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Conditional_Block_Render;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Conditional_Block extends Base {

	public function block_params() {
		return array(
			'attributes'      => $this->block_attributes(),
			'render_callback' => array( $this, 'render_field__conditional' )
		);
	}

	public function render_field__conditional( array $attrs, $content = null ) {
		$this->set_block_data( $attrs, $content );

		return ( new Conditional_Block_Render( $this ) )->render();
	}

	public function get_conditions() {
		foreach ( $this->block_attrs['conditions'] as $index => $condition ) {
			$this->parse_condition( $condition, $index );
		}
		return htmlspecialchars( json_encode( $this->block_attrs['conditions'] ) );
	}

	private function parse_condition( $condition, $index ) {
		$this->block_attrs['conditions'][ $index ]['value'] = ( new Dynamic_Preset( 'value' ) )->parse_value( $condition );
		$this->block_attrs['conditions'][ $index ]['set_value'] = ( new Dynamic_Preset( 'set_value' ) )->parse_value( $condition );
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Conditional Block';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'conditional-block';
	}

	public function general_style_attributes() {
		return array();
	}

	public function general_style_manager_options() {
	}


	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return '';
	}


	/**
	 * Returns global attributes list
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array();
	}


	/**
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'conditions' => array(
				'type'    => 'array',
				'default' => array()
			),
		);
	}
}

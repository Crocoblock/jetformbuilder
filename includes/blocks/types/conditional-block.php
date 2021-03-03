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

	public $use_style_manager = false;

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'conditional-block';
	}

	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
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
		$dynamic_value = ( new Dynamic_Preset( 'value' ) )->parse_value( $condition );

		$this->block_attrs['conditions'][ $index ]['value']     = $this->parse_string_with_commas( $dynamic_value );
		$this->block_attrs['conditions'][ $index ]['set_value'] = ( new Dynamic_Preset( 'set_value' ) )->parse_value( $condition );
	}

	private function parse_string_with_commas( $value ) {
		$value_in_array = explode( ',', $value );

		if ( 1 === count( $value_in_array ) ) {
			return $value;
		}

		return array_map( 'trim', $value_in_array );
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
}

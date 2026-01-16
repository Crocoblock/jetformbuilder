<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Modules\Advanced_Choices\Block_Renders\Choice_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choice extends Base implements Base_Choice_Item_It {

	use Base_Choice_Item_Trait;
	use Block_Metadata_Trait;

	public $use_style_manager = false;

	public function get_name() {
		return 'choice';
	}

	public function render_row_layout() {
		return false;
	}

	public function general_style_unregister() {
		return array( 'description', 'required' );
	}

	/**
	 * @param null|array $wp_block
	 *
	 * @throws Render_Empty_Field
	 */
	public function get_block_renderer( $wp_block = null ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			throw new Render_Empty_Field();
		}

		return ( new Choice_Render( $this ) )->render( $wp_block );
	}

	public function get_field_value( $attributes = array() ) {
		return $this->block_attrs['value'] ?? '';
	}

	public function get_calculated_value(): string {
		return $this->block_attrs['calc_value'] ?? '';
	}
}

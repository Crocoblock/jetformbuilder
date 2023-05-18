<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Modules\Advanced_Choices\Block_Renders\Choice_Control_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choice_Control extends Base implements Base_Choice_Item_It {

	use Base_Choice_Item_Trait;
	use Block_Metadata_Trait;

	public $use_style_manager = false;

	public function get_name() {
		return 'choice-control';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * @param null|array $wp_block
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Choice_Control_Render( $this ) )->render( $wp_block );
	}

	public function get_field_value( $attributes = array() ) {
		return $this->block_context['jet-forms/choice--value'] ?? '';
	}

	public function get_calculated_value(): string {
		return $this->block_context['jet-forms/choice--calc_value'] ?? '';
	}

	public function is_image_control(): bool {
		return 'image' === ( $this->block_attrs['control_type'] ?? '' );
	}

	public function get_control_image_default(): string {
		if ( ! $this->is_image_control() ) {
			return '';
		}

		return $this->block_attrs['default_image_control']['url'] ?? '';
	}

	public function get_control_image_checked(): string {
		if ( ! $this->is_image_control() ) {
			return '';
		}

		return $this->block_attrs['checked_image_control']['url'] ?? '';
	}
}

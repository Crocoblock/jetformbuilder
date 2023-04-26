<?php


namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Choice_Check_Render;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choice_Control extends Base implements Base_Choice_Item_It {

	use Base_Choice_Item_Trait;

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
		return ( new Choice_Check_Render( $this ) )->render( $wp_block );
	}

	public function get_field_value( $attributes = array() ) {
		return $this->block_context['jet-forms/choice--value'] ?? '';
	}

	public function get_calculated_value(): string {
		return $this->block_context['jet-forms/choice--calc_value'] ?? '';
	}
}

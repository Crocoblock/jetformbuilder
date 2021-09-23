<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Action_Button;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 * @property Action_Button $block_type
 */
class Action_Button_Render extends Base {

	public function get_name() {
		return 'action-button';
	}

	public function label_allowed() {
		return false;
	}

	public function before_render( $args ) {
		$type      = $args['action_type'] ?? '';
		$btn_class = $this->block_type->get_button_prop( $type, 'button_class', '' );

		$this->add_attribute( 'class', 'jet-form-builder__action-button' );
		$this->add_attribute( 'class', $args['class_name'] );
		$this->add_attribute( 'class', $btn_class );
		$this->add_attribute( 'type', 'button' );
	}

}

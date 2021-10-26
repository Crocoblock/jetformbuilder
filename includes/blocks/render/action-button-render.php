<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Button_Types\Button_Type_Base;
use Jet_Form_Builder\Blocks\Types\Action_Button;
use Jet_Form_Builder\Blocks\Types\Submit_Field;
use Jet_Form_Builder\Classes\Attributes_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 *
 * @property Action_Button $block_type
 */
class Action_Button_Render extends Base {

	public $wrapper;

	public function get_name() {
		return 'action-button';
	}

	public function label_allowed() {
		return false;
	}

	public function before_render( $args ) {
		$type          = $args['action_type'] ?? '';
		$this->wrapper = new class() {
			use Attributes_Trait;
		};

		/** @var Button_Type_Base $type */
		$type = $this->block_type->get_button_type( $type );

		$this->add_attribute( 'class', 'jet-form-builder__action-button' );
		$this->add_attribute( 'class', $args['class_name'] );
		$this->add_attribute( 'class', $type->get_class( 'button' ) );
		$this->add_attribute( 'type', $type->get_type() );

		$wrap_classes = array( $type->get_class( 'wrapper' ) );

		if ( isset( $args['add_prev'] ) && $args['add_prev'] && 1 < $this->block_type->get_current_form_break()->get_current() ) {
			$wrap_classes[] = 'has-prev';
		}

		$this->wrapper->add_attribute( 'class', $wrap_classes );
	}

}

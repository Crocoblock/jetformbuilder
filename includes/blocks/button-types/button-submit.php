<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;

class Button_Submit extends Button_Type_Base {

	public function slug(): string {
		return 'submit';
	}

	public function label(): string {
		return __( 'Submit Form', 'jet-from-builder' );
	}

	public function preset_label(): string {
		return __( 'Submit', 'jet-from-builder' );
	}

	public function html_attrs() {
		$button      = array( "jet-form-builder__{$this->slug()}" );
		$submit_type = Live_Form::instance()->form_id
			? Live_Form::instance()->spec_data->submit_type
			: false;

		if ( $submit_type ) {
			$button[] = "submit-type-$submit_type";
		}

		return array(
			'type'  => 'reload' === $submit_type ? 'submit' : 'button',
			'class' => array(
				'button'  => $button,
				'wrapper' => "jet-form-builder__{$this->slug()}-wrap",
			),
		);
	}


}

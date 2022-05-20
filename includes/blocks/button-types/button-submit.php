<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

class Button_Submit extends Button_Type_Base {

	public function slug(): string {
		return 'submit';
	}

	public function label(): string {
		return __( 'Submit Form', 'jet-form-builder' );
	}

	public function preset_label(): string {
		return __( 'Submit', 'jet-form-builder' );
	}

	public function html_attrs() {
		$button   = array( "jet-form-builder__{$this->slug()}" );
		$type     = jet_fb_live_args()->get_submit_type();
		$button[] = "submit-type-{$type}";

		return array(
			'type'  => 'reload' === $type ? 'submit' : 'button',
			'class' => array(
				'button'  => $button,
				'wrapper' => "jet-form-builder__{$this->slug()}-wrap",
			),
		);
	}


}

<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Button_Submit extends Button_Type_Base {

	public function slug(): string {
		return 'submit';
	}

	public function html_attrs(): array {
		$button   = array( "jet-form-builder__{$this->slug()}" );
		$type     = jet_fb_live_args()->get_submit_type();
		$button[] = "submit-type-{$type}";

		return array(
			'type'  => 'submit',
			'class' => array(
				'button'  => $button,
				'wrapper' => "jet-form-builder__{$this->slug()}-wrap",
			),
		);
	}


}

<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

class Button_Switch_State extends Button_Type_Base {

	public function slug(): string {
		return 'switch-state';
	}

	public function label(): string {
		return __( 'Change Render State', 'jet-form-builder' );
	}

	public function preset_label(): string {
		return __( 'Switch', 'jet-form-builder' );
	}


}

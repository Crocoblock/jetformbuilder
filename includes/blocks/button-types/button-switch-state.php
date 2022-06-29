<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

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

	public function before_render( Base $render, array $args ) {
		$switch_on = $args['buttons'][ $this->slug() ]['switch_on'] ?? array();

		$render->add_attribute( 'data-switch-on', Tools::encode_json( $switch_on ) );
	}


}

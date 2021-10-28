<?php


namespace Jet_Form_Builder\Blocks\Button_Types;


class Button_Next extends Button_Type_Base {

	public function slug(): string {
		return 'next';
	}

	public function label(): string {
		return __( 'Go to Next Page', 'jet-from-builder' );
	}

	public function preset_label(): string {
		return __( 'Next Page', 'jet-from-builder' );
	}

	public function html_attrs() {
		return array(
			'class' => array(
				'button' => "jet-form-builder__next-page",
			),
		);
	}


}
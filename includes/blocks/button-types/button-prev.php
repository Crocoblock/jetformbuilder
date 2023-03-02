<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Button_Prev extends Button_Type_Base {

	public function slug(): string {
		return 'prev';
	}

	public function label(): string {
		return __( 'Go to Prev Page', 'jet-form-builder' );
	}

	public function preset_label(): string {
		return __( 'Prev Page', 'jet-form-builder' );
	}

	public function html_attrs(): array {
		return array(
			'class' => array(
				'button' => 'jet-form-builder__prev-page',
			),
		);
	}


}

<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

class Button_Next extends Button_Type_Base {

	public function slug(): string {
		return 'next';
	}

	public function label(): string {
		return __( 'Go to Next Page', 'jet-form-builder' );
	}

	public function preset_label(): string {
		return __( 'Next Page', 'jet-form-builder' );
	}

	public function before_render( Base $render, array $args ) {
		$render->add_attribute( 'data-jfb-conditional', static::get_conditions() );
		$render->add_attribute( 'data-jfb-func', 'disable' );
	}

	public function html_attrs(): array {
		return array(
			'class' => array(
				'button' => 'jet-form-builder__next-page',
			),
		);
	}

	public static function get_conditions(): string {
		$conditions = array(
			array(
				'page_state' => 'active'
			),
		);

		return htmlspecialchars( Tools::encode_json( $conditions ) );
	}


}

<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		self::add_next_disable( $render );
	}

	public function html_attrs(): array {
		return array(
			'class' => array(
				'button' => 'jet-form-builder__next-page',
			),
		);
	}

	public static function add_next_disable( Base $block ) {
		$options      = Tab_Handler_Manager::get_options( 'options-tab' );
		$disable_next = $options['disable_next_button'] ?? true;

		if ( ! $disable_next ) {
			return;
		}

		$block->add_attribute(
			'data-jfb-conditional',
			Tools::esc_attr( array(
				array(
					'page_state' => 'active'
				),
			) )
		);
		$block->add_attribute( 'data-jfb-func', 'disable' );
	}

}

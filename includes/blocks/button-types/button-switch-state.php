<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Render\Action_Button_Render;
use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Blocks\Types\Conditional_Block;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Button_Switch_State extends Button_Type_Base {

	public function slug(): string {
		return 'switch-state';
	}

	/**
	 * @param Base|Action_Button_Render $render
	 * @param array $args
	 */
	public function before_render( Base $render, array $args ) {
		$switch_on = $args['buttons'][ $this->slug() ]['switch_on'] ?? array();

		wp_enqueue_script( Conditional_Block::HANDLE );

		$render->add_attribute( 'data-switch-on', Tools::esc_attr( $switch_on ) );
		$render->add_attribute(
			'data-jfb-conditional',
			Tools::esc_attr(
				array(
					array(
						'operator'     => 'render_state',
						'render_state' => $switch_on,
					),
				)
			)
		);
		$render->add_attribute(
			'data-jfb-func',
			Tools::esc_attr(
				array(
					'setCssClass' => array(
						'className' => 'has-active-state',
					),
				)
			)
		);

		$has_active_state = Render_State::instance()->get_current()->intersect( $switch_on );

		if ( ! $has_active_state ) {
			return;
		}

		$render->add_attribute( 'class', 'has-active-state' );
	}


}

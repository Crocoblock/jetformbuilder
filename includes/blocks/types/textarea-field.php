<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Textarea_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Textarea_Field extends Base {


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'textarea-field';
	}

	public function get_css_scheme() {
		return array(
			'field'   => '__field-wrap textarea',
			'wrapper' => '__field-wrap',
		);
	}

	public function _jsm_register_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'field_style',
				'title' => __( 'Textarea', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_textarea_height',
				'type'         => 'range',
				'separator'    => 'after',
				'label'        => __( 'Height', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 20,
							'max'  => 1000,
						),
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'height: {{VALUE}}px; min-height: {{VALUE}}px;',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 100,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'field' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->add_margin_padding(
			$this->css_scheme['field'],
			array(
				'padding' => array(
					'id'        => 'item_field_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();

	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Textarea_Field_Render( $this ) )->render();
	}

}

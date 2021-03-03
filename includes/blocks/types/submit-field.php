<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Heading_Field_Render;
use Jet_Form_Builder\Blocks\Render\Submit_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Submit_Field extends Base {

	public function general_style_manager_options() {
	}

	public function get_css_scheme() {
		return array(
			'button' => '__submit',
			'wrap'   => '__submit-wrap'
		);
	}

	public function _jsm_register_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'submit_wrap_style',
				'title' => __( 'Submit Wrap', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->selector( '__submit-wrap' ),
			array(
				'padding' => array(
					'id'  => 'submit_wrap_padding',
				)
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'submit_style',
				'title' => __( 'Submit Button', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->selector( '__submit' ),
			array(
				'margin' => array(
					'id'        => 'submit_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'submit_padding',
					'separator' => 'after',
				)
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'button_width',
			'type'         => 'range',
			'separator'    => 'after',
			'label'        => __( 'Button Width', 'jet-form-builder' ),
			'units'        => [
				[
					'value'     => '%',
					'intervals' => [
						'step' => 1,
						'min'  => 10,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				$this->selector( '__submit' ) => 'width: {{VALUE}}%; max-width: {{VALUE}}%',
			],
			'attributes'   => array(
				'default' => array(
					'value' => 20
				),
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_alignment',
			'type'         => 'choose',
			'separator'    => 'after',
			'label'        => __( 'Button Alignment', 'jet-form-builder' ),
			'options'      => [
				'flex-start' => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center'     => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'flex-end'   => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				$this->selector( '__submit-wrap' ) => 'align-items: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'flex-start'
				),
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_text_alignment',
			'type'         => 'choose',
			'separator'    => 'after',
			'label'        => __( 'Text Alignment', 'jet-form-builder' ),
			'options'      => [
				'flex-start' => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center'     => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'flex-end'   => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				$this->selector( '__submit' ) => 'justify-content: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'flex-start'
				),
			],
		] );


		$this->controls_manager->add_control( [
			'id'           => 'submit_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				$this->selector( '__submit' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->selector( '__submit' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'submit_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'submit_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'submit_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->selector( '__submit' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->selector( '__submit' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'submit_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'submit_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->selector( '__submit' ) . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'submit_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->selector( '__submit' ) . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();

		$this->controls_manager->end_section();
	}


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'submit-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Submit_Field_Render( $this ) )->render();
	}

}

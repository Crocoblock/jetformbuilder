<?php


namespace Jet_Form_Builder\Blocks\Types;


trait Form_Break_Field_Style {

	public function form_break_css_scheme() {
		return array(
			'next-button'      => '__next-page',
			'prev-button'      => '__prev-page',
			'disabled-message' => '__next-page-msg',
			'break-wrap'       => '__next-page-wrap'
		);
	}

	public function form_break_styles() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'break_buttons_style',
				'title' => __( 'Form Break Row', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->div_selector( 'break-wrap' ),
			array(
				'padding' => array(
					'id'        => 'break_buttons_padding',
					'separator' => 'after',
				),
			)
		);
		$this->controls_manager->add_control( [
			'id'           => 'break_buttons_alignment',
			'type'         => 'choose',
			'separator'    => 'after',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'options'      => [
				'left'   => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center' => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'right'  => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				$this->div_selector( 'break-wrap' ) => 'text-align: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'left'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'break_buttons_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->div_selector( 'break-wrap' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'next_button_style',
				'title' => __( 'Form Break Next Button', 'jet-form-builder' ),

			]
		);

		$this->add_margin_padding(
			$this->button_selector( 'next-button' ),
			array(
				'margin'  => array(
					'id'        => 'next_button_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'next_button_padding',
					'separator' => 'after',
				),
			)
		);
		$this->controls_manager->add_control( [
			'id'           => 'next_button_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				$this->button_selector( 'next-button' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );
		$this->controls_manager->add_control( [
			'id'           => 'next_button_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'next-button' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'next_button_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'next_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'next_button_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->button_selector( 'next-button' ) => 'color: {{VALUE}}',
			),
		] );
		$this->controls_manager->add_control( [
			'id'           => 'next_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'next-button' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'next_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'next_button_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->button_selector( 'next-button', ':hover:not(:disabled)' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'next_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'next-button', ':hover:not(:disabled)' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();

		/**
		 * Prev button
		 */
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'prev_button_style',
				'title' => __( 'Form Break Prev Button', 'jet-form-builder' ),
			]
		);

		$this->add_margin_padding(
			$this->css_scheme['prev-button'],
			array(
				'margin'  => array(
					'id'        => 'prev_button_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'prev_button_padding',
					'separator' => 'after',
				),
			)
		);
		$this->controls_manager->add_control( [
			'id'           => 'prev_button_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				$this->button_selector( 'prev-button' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'prev-button' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'prev_button_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'prev_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->button_selector( 'prev-button' ) => 'color: {{VALUE}}',
			),
		] );
		$this->controls_manager->add_control( [
			'id'           => 'prev_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'prev-button' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'prev_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				$this->button_selector( 'prev-button', ':hover:not(:disabled)' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				$this->button_selector( 'prev-button', ':hover:not(:disabled)' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();

		/**
		 * Prev button
		 */
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'disabled_message_style',
				'title' => __( 'Form Break Disabled Message', 'jet-form-builder' ),
			]
		);

		$this->add_margin_padding(
			$this->div_selector( 'disabled-message' ),
			array(
				'margin'  => array(
					'id'        => 'disabled_message_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'disabled_message_padding',
					'separator' => 'after',
				),
			)
		);
		$this->controls_manager->add_control( [
			'id'           => 'disabled_message_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				$this->div_selector( 'disabled-message' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );
		$this->controls_manager->add_control( [
			'id'           => 'disabled_message_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->div_selector( 'disabled-message' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();
	}

}
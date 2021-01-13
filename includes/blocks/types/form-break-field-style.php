<?php


namespace Jet_Form_Builder\Blocks\Types;


trait Form_Break_Field_Style {

	public function form_break_css_scheme() {
		return array(
			'next-button'      => 'button.jet-form-builder__next-page',
			'prev-button'      => 'button.jet-form-builder__prev-page',
			'disabled-message' => 'div.jet-form-builder__next-page-msg',
			'wrap'             => 'div.jet-form-builder__next-page-wrap'
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
			$this->css_scheme['wrap'],
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
				'{{WRAPPER}} ' . $this->css_scheme['wrap'] => 'text-align: {{VALUE}};',
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
				'{{WRAPPER}} ' . $this->css_scheme['wrap'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
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
			$this->css_scheme['next-button'],
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
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );
		$this->controls_manager->add_control( [
			'id'           => 'next_button_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
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
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] => 'color: {{VALUE}}',
			),
		] );
		$this->controls_manager->add_control( [
			'id'           => 'next_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] => 'background-color: {{VALUE}}',
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
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'next_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['next-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
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
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
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
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] => 'color: {{VALUE}}',
			),
		] );
		$this->controls_manager->add_control( [
			'id'           => 'prev_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] => 'background-color: {{VALUE}}',
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
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'prev_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['prev-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
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
			$this->css_scheme['disabled-message'],
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
				'{{WRAPPER}} ' . $this->css_scheme['disabled-message'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );
		$this->controls_manager->add_control( [
			'id'           => 'disabled_message_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['disabled-message'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();
	}

}
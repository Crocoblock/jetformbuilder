<?php


namespace Jet_Form_Builder\Blocks\Modules;


trait General_Style {

	use General_Style_Functions;

	public function general_style_manager_options() {
		$this->maybe_add_controls_type( 'wrap' );
		$this->maybe_add_controls_type( 'input' );
		$this->maybe_add_controls_type( 'label' );
		$this->maybe_add_controls_type( 'required' );
		$this->maybe_add_controls_type( 'description' );
	}

	public function general_css_scheme() {
		return array(
			'wrap'        => $this->get_field_wrap(),
			'label'       => $this->get_label_selector(),
			'input'       => $this->get_field_input(),
			'required'    => $this->get_required_selector(),
			'description' => $this->get_description_selector()
		);
	}

	public function general_controls_callbacks() {
		return array(
			'wrap'        => array( $this, 'add_content_controls' ),
			'label'       => array( $this, 'add_label_controls' ),
			'input'       => array( $this, 'add_input_controls' ),
			'required'    => array( $this, 'add_required_mark_controls' ),
			'description' => array( $this, 'add_description_controls' ),
		);
	}

	public function general_style_unregister() {
		return array( 'input' );
	}

	public function get_label_selector() {
		return 'div.jet-form-builder__label';
	}

	public function get_required_selector() {
		return '.jet-form-builder__label span.jet-form-builder__required';
	}

	public function get_description_selector() {
		return 'div.jet-form-builder__desc';
	}

	public function get_field_wrap() {
		return 'div.jet-form-builder-row';
	}

	public function get_field_input() {
		return 'div.jet-form-builder-row input';
	}


	public function general_style_attributes() {
		return array(
			'label_margin'                 => array(
				'type' => 'object'
			),
			'label_padding'                => array(
				'type' => 'object'
			),
			'label_typography'             => array(
				'type' => 'object'
			),
			'label_color'                  => array(
				'type' => 'object'
			),
			'label_border'                 => array(
				'type' => 'object'
			),
			'label_alignment'              => array(
				'type' => 'object'
			),
			'label_background_color'       => array(
				'type' => 'object'
			),
			'description_margin'           => array(
				'type' => 'object'
			),
			'description_padding'          => array(
				'type' => 'object'
			),
			'description_typography'       => array(
				'type' => 'object'
			),
			'description_color'            => array(
				'type' => 'object'
			),
			'description_background_color' => array(
				'type' => 'object'
			),
			'description_border'           => array(
				'type' => 'object'
			),
			'description_alignment'        => array(
				'type' => 'object'
			),
			'required_color'               => array(
				'type' => 'object'
			),
			'required_background_color'    => array(
				'type' => 'object'
			),
			'required_typography'          => array(
				'type' => 'object'
			),
		);
	}

	public function _get_default_control( $selector ) {
		return array(
			'padding' => array(
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $selector => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			),
			'margin'       => array(
				'type'         => 'dimensions',
				'label'        => __( 'Margin', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $selector => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);
	}

	public function add_margin_padding( $selector, $control_options, $responsive = array() ) {
		foreach ( $control_options as $type => $options ) {
			$options = $this->merge_controls_or_add_id( $this->_get_default_control( $selector )[ $type ], $options );

			if ( in_array( $type, $responsive ) ) {
				$this->controls_manager->add_responsive_control( $options );
			} else {
				$this->controls_manager->add_control( $options );
			}
		}
	}

	public function merge_controls_or_add_id( $control, $options ) {
		if ( is_array( $options ) ) {
			return array_merge( $control, $options );

		} elseif ( is_string( $options ) ) {

			$control['id'] = $options;

			return $control;
		}
	}


	private function add_content_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'content_style',
				'title' => __( 'Content', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->selector( 'wrap' ),
			array(
				'margin'  => array(
					'id'        => 'field_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'field_padding',
					'separator' => 'after',
				)
			),
			array( 'padding', 'margin' )
		);

		$this->controls_manager->add_control( [
			'id'           => 'field_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
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
		] );


		$this->controls_manager->add_control( [
			'id'           => 'field_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['wrap'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'field_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['wrap'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();
	}

	private function add_label_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'label_style',
				'title' => __( 'Label', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->selector( 'label' ),
			array(
				'margin'  => array(
					'id'        => 'label_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'label_padding',
					'separator' => 'after',
				)
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'label_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
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
				'{{WRAPPER}} ' . $this->css_scheme['label'] => 'text-align: {{VALUE}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['label'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['label'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['label'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['label'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();
	}

	private function add_description_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'description_style',
				'title' => __( 'Description', 'jet-form-builder' ),
				/*'condition' => array(
					'desc' => true
				),*/
			]
		);

		$this->add_margin_padding(
			$this->selector( 'description' ),
			array(
				'margin'  => array(
					'id'        => 'description_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'description_padding',
					'separator' => 'after',
				)
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'description_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
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
				'{{WRAPPER}} ' . $this->css_scheme['description'] => 'text-align: {{VALUE}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['description'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['description'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['description'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['description'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();
	}

	private function add_required_mark_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'required_style',
				'title' => __( 'Required Mark', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id' => 'required_typography',

			'disable_line_height'    => true,
			'disable_family'         => true,
			'disable_transform'      => true,
			'disable_style'          => true,
			'disable_decoration'     => true,
			'disable_letter_spacing' => true,
			'separator'              => 'after',
			'type'                   => 'typography',
			'css_selector'           => [
				'{{WRAPPER}} ' . $this->css_scheme['required'] => 'font-weight: {{WEIGHT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'required_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['required'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'required_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['required'] => 'background-color: {{VALUE}}',
			),
		] );


		$this->controls_manager->end_section();
	}

	private function add_input_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'input_style',
				'title' => __( 'Field', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding(
			$this->selector( 'input' ),
			array(
				'margin'  => array(
					'id'        => 'input_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'input_padding',
					'separator' => 'after',
				)
			)
		);

		$this->controls_manager->add_control( $this->merge_controls_or_add_id(
			array(
				'id'           => 'input_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
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
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['input'] => 'text-align: {{VALUE}};',
				),
			),
			$this->get_additional_styles( 'input_alignment' )
		) );

		$this->controls_manager->add_control( [
			'id'           => 'input_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['input'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'input_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['input'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'input_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['input'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'input_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['input'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();
	}


}
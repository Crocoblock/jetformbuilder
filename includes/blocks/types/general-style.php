<?php


namespace Jet_Form_Builder\Blocks\Types;


trait General_Style {

	public function get_label_selector() {
		return 'div.jet-form-builder__label-text';
	}

	public function get_required_selector() {
		return '.jet-form-builder__label-text span.jet-form-builder__required';
	}

	public function get_description_selector() {
		return 'div.jet-form-builder__desc';
	}

	public function general_css_scheme() {
		return array(
			'field-label'       => $this->get_label_selector(),
			'field-required'    => $this->get_required_selector(),
			'field-description' => $this->get_description_selector()
		);
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

	public function add_margin_padding( $selector, $selector_ids ) {
		$this->controls_manager->add_control( [
			'id'           => $selector_ids['margin'],
			'type'         => 'dimensions',
			'label'        => __( 'Margin', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $selector => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
			'separator'    => 'after',
		] );

		$this->controls_manager->add_control( [
			'id'           => $selector_ids['padding'],
			'type'         => 'dimensions',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $selector => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
			'separator'    => 'after',
		] );
	}

	public function general_style_manager_options() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'label_style',
				'title' => __( 'Label', 'jet-forms-builder' )
			]
		);

		$this->add_margin_padding(
			$this->css_scheme['field-label'],
			array(
				'margin'  => 'label_margin',
				'padding' => 'label_padding'
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'label_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field-label'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#000000'
				),
			),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-label'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'label_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-label'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'description_style',
				'title' => __( 'Description', 'jet-forms-builder' )
			]
		);

		$this->add_margin_padding(
			$this->css_scheme['field-description'],
			array(
				'margin'  => 'description_margin',
				'padding' => 'description_padding'
			)
		);

		$this->controls_manager->add_control( [
			'id'           => 'label_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field-description'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#000000'
				),
			),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-description'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'description_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-description'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'required_style',
				'title' => __( 'Required Mark', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'required_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-required'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'required_background_color',
			'type'         => 'color-picker',
			'separator'    => 'after',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['field-required'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id' => 'required_typography',

			'disable_line_height'    => true,
			'disable_family'         => true,
			'disable_transform'      => true,
			'disable_style'          => true,
			'disable_decoration'     => true,
			'disable_letter_spacing' => true,

			'type'         => 'typography',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field-required'] => 'font-weight: {{WEIGHT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->end_section();
	}


}
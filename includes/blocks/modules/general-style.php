<?php


namespace Jet_Form_Builder\Blocks\Modules;

use JET_SM\Gutenberg\Controls_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Controls_Manager controls_manager
 *
 * Trait General_Style
 * @package Jet_Form_Builder\Blocks\Modules
 */
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
			'description' => $this->get_description_selector(),
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
		return '__label.%1$s__label.%1$s__label';
	}

	public function get_required_selector() {
		return '__label span.%1$s__required.%1$s__required.%1$s__required';
	}

	public function get_description_selector() {
		return '__desc.%1$s__desc.%1$s__desc';
	}

	public function get_field_wrap() {
		return '-row.%1$s-row.%1$s-row.%1$s-row';
	}

	public function get_field_input() {
		return '-row.%1$s-row.%1$s-row input';
	}


	public function general_style_attributes() {
		return array(
			'label_margin'                 => array(
				'type' => 'object',
			),
			'label_padding'                => array(
				'type' => 'object',
			),
			'label_typography'             => array(
				'type' => 'object',
			),
			'label_color'                  => array(
				'type' => 'object',
			),
			'label_border'                 => array(
				'type' => 'object',
			),
			'label_alignment'              => array(
				'type' => 'object',
			),
			'label_background_color'       => array(
				'type' => 'object',
			),
			'description_margin'           => array(
				'type' => 'object',
			),
			'description_padding'          => array(
				'type' => 'object',
			),
			'description_typography'       => array(
				'type' => 'object',
			),
			'description_color'            => array(
				'type' => 'object',
			),
			'description_background_color' => array(
				'type' => 'object',
			),
			'description_border'           => array(
				'type' => 'object',
			),
			'description_alignment'        => array(
				'type' => 'object',
			),
			'required_color'               => array(
				'type' => 'object',
			),
			'required_background_color'    => array(
				'type' => 'object',
			),
			'required_typography'          => array(
				'type' => 'object',
			),
		);
	}

	// phpcs:ignore PSR2.Methods.MethodDeclaration.Underscore
	public function _get_default_control( $selector ) {
		return array(
			'padding' => array(
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$selector => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			),
			'margin'  => array(
				'type'         => 'dimensions',
				'label'        => __( 'Margin', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					$selector => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			),
		);
	}

	public function add_margin_padding( $selector, $control_options, $responsive = array() ) {
		foreach ( $control_options as $type => $options ) {
			$options = $this->merge_controls_or_add_id( $this->_get_default_control( $selector )[ $type ], $options );

			if ( in_array( $type, $responsive, true ) ) {
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

		return $control;
	}


	private function add_content_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'content_style',
				'title' => __( 'Content', 'jet-form-builder' ),
			)
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
				),
			),
			array( 'padding', 'margin' )
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'field_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'wrap' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'field_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'wrap' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'field_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'wrap' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	private function add_label_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'label_style',
				'title' => __( 'Label', 'jet-form-builder' ),
			)
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
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'label_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'label' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'label_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'label' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'label_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'label' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'label_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'label' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'label_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'label' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	private function add_description_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'description_style',
				'title' => __( 'Description', 'jet-form-builder' ),
			)
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
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'description_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'description' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'description_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'description' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'description_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'description' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'description_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'description' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'description_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'description' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	private function add_required_mark_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'required_style',
				'title' => __( 'Required Mark', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'                     => 'required_typography',

				'disable_line_height'    => true,
				'disable_family'         => true,
				'disable_transform'      => true,
				'disable_style'          => true,
				'disable_decoration'     => true,
				'disable_letter_spacing' => true,
				'separator'              => 'after',
				'type'                   => 'typography',
				'css_selector'           => array(
					$this->selector( 'required' ) => 'font-weight: {{WEIGHT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'required_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'required' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'required_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'required' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	private function add_input_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'input_style',
				'title' => __( 'Field', 'jet-form-builder' ),
			)
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
				),
			)
		);

		$this->controls_manager->add_control(
			$this->merge_controls_or_add_id(
				array(
					'id'           => 'input_alignment',
					'type'         => 'choose',
					'label'        => __( 'Alignment', 'jet-form-builder' ),
					'separator'    => 'after',
					'options'      => array(
						'left'   => array(
							'shortcut' => __( 'Left', 'jet-form-builder' ),
							'icon'     => 'dashicons-editor-alignleft',
						),
						'center' => array(
							'shortcut' => __( 'Center', 'jet-form-builder' ),
							'icon'     => 'dashicons-editor-aligncenter',
						),
						'right'  => array(
							'shortcut' => __( 'Right', 'jet-form-builder' ),
							'icon'     => 'dashicons-editor-alignright',
						),
					),
					'css_selector' => array(
						$this->selector( 'input' ) => 'text-align: {{VALUE}};',
					),
				),
				$this->get_additional_styles( 'input_alignment' )
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'input_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'input' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'input_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'input' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'input_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'input' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'input_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'input' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}


}

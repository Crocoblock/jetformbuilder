<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Elementor\Check_Mark;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use JFB_Compatibility\Jet_Engine\Jet_Engine;

class Widget extends Widget_Base {

	public function get_name() {
		return 'jet-form-builder-check-mark';
	}

	public function get_title() {
		return __( 'Check mark', 'jet-form-builder' );
	}

	public function get_style_depends() {
		return array(
			'jet-fb-compat-jet-engine-check-mark',
		);
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_general',
			array(
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
				'label' => __( 'Content', 'jet-form-builder' ),
			)
		);
		$this->add_control(
			'controlType',
			array(
				'label'       => __( 'Control type', 'jet-form-builder' ),
				'type'        => Controls_Manager::SELECT,
				'default'     => '',
				'label_block' => false,
				'options'     => array(
					''      => __( 'HTML input', 'jet-form-builder' ),
					'image' => __( 'Image', 'jet-form-builder' ),
				),
			)
		);
		$this->end_controls_section();

		$this->start_controls_section(
			'section_default_image',
			array(
				'tab'       => \Elementor\Controls_Manager::TAB_CONTENT,
				'label'     => __( 'Control Default', 'jet-form-builder' ),
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);

		$this->add_control(
			'defaultImageControl',
			array(
				'type'  => \Elementor\Controls_Manager::MEDIA,
				'label' => __( 'Default icon', 'jet-form-builder' ),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_checked_image',
			array(
				'tab'       => \Elementor\Controls_Manager::TAB_CONTENT,
				'label'     => __( 'Control Checked', 'jet-form-builder' ),
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);

		$this->add_control(
			'checkedImageControl',
			array(
				'type'  => \Elementor\Controls_Manager::MEDIA,
				'label' => __( 'Checked icon', 'jet-form-builder' ),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_image_style',
			array(
				'label'     => __( 'Image', 'jet-form-builder' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);

		$this->add_responsive_control(
			'width',
			array(
				'type'       => Controls_Manager::SLIDER,
				'label'      => __( 'Width', 'jet-form-builder' ),
				'size_units' => array( 'px', '%', 'em', 'rem', 'custom' ),
				'selectors'  => array(
					'{{WRAPPER}}' => '--jfb-check-mark-width: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$attributes = new Widget_Attributes();

		$attributes->set_control_type( $settings['controlType'] ?? '' );
		$attributes->set_default_icon_url( $settings['defaultImageControl']['url'] ?? '' );
		$attributes->set_checked_icon_url( $settings['checkedImageControl']['url'] ?? '' );

		/**
		 * @var Jet_Engine $module
		 * @noinspection PhpUnhandledExceptionInspection
		 */
		$module = jet_form_builder()->compat( Jet_Engine::class );

		require $module->get_dir( 'blocks/check-mark/block-template.php' );
	}
}

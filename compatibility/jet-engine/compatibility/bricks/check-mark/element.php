<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Bricks\Check_Mark;

use JFB_Compatibility\Bricks\Widgets\Base;
use JFB_Compatibility\Jet_Engine\Compatibility\Elementor\Check_Mark\Widget_Attributes;
use JFB_Compatibility\Jet_Engine\Jet_Engine;

class Element extends Base {

	/**
	 * Use predefined element category 'general'
	 *
	 * @var string
	 */
	public $category = 'jet-form-builder';

	/**
	 * Make sure to prefix your elements
	 *
	 * @var string
	 */
	public $name = 'jet-form-builder-check-mark';

	public function get_label() {
		return __( 'Check Mark', 'jet-form-builder' );
	}

	public function set_control_groups() {
		$this->register_jet_control_group(
			'section_general',
			array(
				'title' => __( 'Content', 'jet-form-builder' ),
				'tab'   => 'content',
			)
		);
		$this->register_jet_control_group(
			'section_default_image',
			array(
				'tab'       => 'content',
				'label'     => __( 'Control Default', 'jet-form-builder' ),
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);
		$this->register_jet_control_group(
			'section_checked_image',
			array(
				'tab'       => 'content',
				'label'     => __( 'Control Checked', 'jet-form-builder' ),
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);
		$this->register_jet_control_group(
			'section_image_style',
			array(
				'label'     => __( 'Image', 'jet-form-builder' ),
				'tab'       => 'style',
				'condition' => array(
					'controlType' => 'image',
				),
			)
		);
	}

	public function set_controls() {
		$this->start_jet_control_group( 'section_general' );

		$this->register_jet_control(
			'controlType',
			array(
				'tab'     => 'content',
				'label'   => __( 'Control type', 'jet-form-builder' ),
				'type'    => 'select',
				'options' => array(
					''      => __( 'HTML input', 'jet-form-builder' ),
					'image' => __( 'Image', 'jet-form-builder' ),
				),
			)
		);

		$this->end_jet_control_group();

		$this->start_jet_control_group( 'section_default_image' );

		$this->register_jet_control(
			'defaultImageControl',
			array(
				'tab'   => 'content',
				'type'  => 'image',
				'label' => __( 'Default icon', 'jet-form-builder' ),
			)
		);

		$this->end_jet_control_group();

		$this->start_jet_control_group( 'section_checked_image' );

		$this->register_jet_control(
			'checkedImageControl',
			array(
				'tab'   => 'content',
				'type'  => 'image',
				'label' => __( 'Checked icon', 'jet-form-builder' ),
			)
		);

		$this->end_jet_control_group();

		$this->start_jet_control_group( 'section_image_style' );

		$this->register_jet_control(
			'width',
			array(
				'tab'   => 'style',
				'label' => __( 'Width', 'jet-form-builder' ),
				'type'  => 'number',
				'units' => true,
				'min'   => 10,
				'max'   => 300,
				'css'   => array( array( 'property' => '--jfb-check-mark-width' ) ),
			)
		);

		$this->end_jet_control_group();
	}

	public function enqueue_scripts() {
		wp_enqueue_style( 'jet-fb-compat-jet-engine-check-mark' );
	}

	public function render() {
		$settings = $this->parse_jet_render_attributes( $this->get_jet_settings() );
		$this->set_attribute( '_root', 'class', array( 'jet-fb-check-mark' ) );

		$attributes = new Element_Attributes();

		$attributes->set_element( $this );
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

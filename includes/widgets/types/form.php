<?php


namespace Jet_Form_Builder\Widgets\Types;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;
use Jet_Form_Builder\Blocks\Modules\General_Style_Functions;
use Jet_Form_Builder\Classes\Tools;

class Form extends Widget_Base {

	use General_Style_Functions;

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );

		add_action(
			'jet-engine/booking-form/register-controls/content/before',
			array( $this, 'booking_form_register_content_before' )
		);
		add_action(
			'jet-engine/booking-form/register-controls/content/after',
			array( $this, 'booking_form_register_content_after' )
		);

		add_action(
			'jet-engine/booking-form/register-controls/style/after',
			array( $this, 'booking_form_register_style_after' )
		);

		add_filter(
			'jet-engine/forms/pre-render-form',
			array( $this, 'booking_form_render' ), 10, 2
		);

		add_filter(
			'jet-engine/booking-form/filtering-controls/content',
			array( $this, 'on_jet_engine' )
		);

	}


	/**
	 * @return string
	 */
	public function get_name() {
		return 'jet-form-builder-form';
	}

	public function get_title() {
		return __( 'JetForm', 'jet-form-builder' );
	}

	public function get_icon() {
		return 'jet-engine-icon-forms';
	}

	public function get_categories() {
		return array( 'jet-listing-elements' );
	}

	private function jet_form_builder_slug() {
		return jet_form_builder()->post_type->slug();
	}

	private function jet_engine_form_slug() {
		return jet_engine()->forms->slug();
	}

	public function booking_form_register_content_before( $booking_form ) {
		$booking_form->remove_control( '_form_id' );

		$booking_form->add_control(
			'form_provider',
			array(
				'label'   => __( 'Choose Provider', 'jet-form-builder' ),
				'type'    => Controls_Manager::SELECT,
				'options' => array(
					$this->jet_form_builder_slug() => __( 'JetFormBuilder', 'jet-form-builder' ),
					$this->jet_engine_form_slug()  => __( 'JetEngine', 'jet-form-builder' ),
				),
				'default' => $this->jet_engine_form_slug(),
			)
		);

		$booking_form->add_control(
			'_form_id',
			array(
				'label'      => __( 'Select JetEngine form', 'jet-form-builder' ),
				'type'       => 'jet-query',
				'query_type' => 'post',
				'query'      => array(
					'post_type' => $this->jet_engine_form_slug(),
				),
				'condition'  => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);

		$booking_form->add_control(
			'form_id',
			array(
				'label'      => __( 'Select JetForm', 'jet-form-builder' ),
				'type'       => 'jet-query',
				'query_type' => 'post',
				'query'      => array(
					'post_type' => $this->jet_form_builder_slug(),
				),
				'condition'  => array( 'form_provider' => $this->jet_form_builder_slug() )
			)
		);


	}

	public function booking_form_register_content_after( $booking_form ) {
		$booking_form->add_control(
			'enable_progress',
			array(
				'label'        => __( 'Enable form pages progress', 'jet-form-builder' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => __( 'Yes', 'jet-form-builder' ),
				'label_off'    => __( 'No', 'jet-form-builder' ),
				'return_value' => true,
				'default'      => false,
				'condition'    => array( 'form_provider' => $this->jet_form_builder_slug() )
			)
		);
	}

	private function on_fb( $args ) {
		return array_merge( $args, array(
			'condition' => array(
				'form_provider' => jet_form_builder()->post_type->slug(),
			)
		) );
	}

	public function on_jet_engine( $args ) {
		return array_merge_recursive( $args, array(
			'condition' => array(
				'form_provider' => jet_engine()->forms->slug(),
			),
		) );
	}

	public function booking_form_register_style_after( $booking_form ) {

		$booking_form->start_controls_section(
			'builder__checkbox_field_style_section',
			$this->on_fb( array(
				'label' => __( 'JetForm Checkbox', 'jet-engine' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			) )
		);

		$booking_form->add_control(
			'builder__checkbox_show_decorator',
			array(
				'label'     => __( 'Show Checkbox' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => array(
					'inline-block' => array(
						'title' => __( 'Yes', 'jet-engine' ),
						'icon'  => 'fa fa-check',
					),
					'none'         => array(
						'title' => __( 'No', 'jet-engine' ),
						'icon'  => 'fa fa-times',
					),
				),
				'default'   => 'inline-block',
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-checkbox span::before' ) => 'display:{{VALUE}};'
				)
			)
		);

		$booking_form->add_responsive_control(
			'builder__checkbox_size',
			array(
				'label'      => __( 'Checkbox Size', 'jet-engine' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 50,
					),
				),
				'selectors'  => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-checkbox span::before' ) => 'font-size: {{SIZE}}px;',
				),
				'condition'  => array(
					'builder__checkbox_show_decorator' => 'inline-block',
				),
			)
		);

		$booking_form->start_controls_tabs( 'builder__checkbox_state_styles' );

		$booking_form->start_controls_tab(
			'builder__checkbox_state--normal',
			array(
				'label' => esc_html__( 'Normal', 'jet-engine' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__checkbox_state--normal__border',
			$booking_form->css_selector_jfb( '__field-wrap .for-checkbox span::before' )
		);

		$booking_form->add_control(
			'builder__checkbox_state--normal__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-engine' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-checkbox span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();

		$booking_form->start_controls_tab(
			'builder__checkbox_state--checked',
			array(
				'label' => esc_html__( 'Checked', 'jet-engine' ),
			)
		);

		$this->add_border(
			$booking_form,
			'builder__checkbox_state--checked__border',
			$booking_form->css_selector_jfb( '__field-wrap label.for-checkbox :checked + span::before' )
		);
		$booking_form->add_control(
			'builder__checkbox_state--checked__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-engine' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap label.for-checkbox :checked + span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();
		$booking_form->end_controls_tabs();
		$booking_form->end_controls_section();

		$booking_form->start_controls_section(
			'builder__radio_field_style_section',
			$this->on_fb( array(
				'label' => __( 'JetForm Radio', 'jet-engine' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			) )
		);
		$booking_form->add_control(
			'builder__radio_show_decorator',
			array(
				'label'     => __( 'Show Radio' ),
				'type'      => Controls_Manager::CHOOSE,
				'default'   => 'inline-block',
				'options'   => array(
					'inline-block' => array(
						'title' => __( 'Yes', 'jet-engine' ),
						'icon'  => 'fa fa-check',
					),
					'none'         => array(
						'title' => __( 'No', 'jet-engine' ),
						'icon'  => 'fa fa-times',
					),
				),
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-radio span::before' ) => 'display:{{VALUE}};'
				)
			)
		);

		$booking_form->add_responsive_control(
			'builder__radio_size',
			array(
				'label'      => __( 'Radio Size', 'jet-engine' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 50,
					),
				),
				'selectors'  => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-radio span::before' ) => 'font-size: {{SIZE}}px;',
				),
				'condition'  => array(
					'builder__radio_show_decorator' => 'inline-block',
				),
			)
		);

		$booking_form->start_controls_tabs( 'builder__radio_state_styles' );

		$booking_form->start_controls_tab(
			'builder__radio_state--normal',
			array(
				'label' => esc_html__( 'Normal', 'jet-engine' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__radio_state--normal__border',
			$booking_form->css_selector_jfb( '__field-wrap .for-radio span::before' )
		);
		$booking_form->add_control(
			'builder__radio_state--normal__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-engine' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap .for-radio span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();

		$booking_form->start_controls_tab(
			'builder__radio_state--checked',
			array(
				'label' => esc_html__( 'Checked', 'jet-engine' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__radio_state--checked__border',
			$booking_form->css_selector_jfb( '__field-wrap label.for-radio :checked + span::before' )
		);
		$booking_form->add_control(
			'builder__radio_state--checked__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-engine' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$booking_form->css_selector_jfb( '__field-wrap label.for-radio :checked + span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();
		$booking_form->end_controls_tabs();
		$booking_form->end_controls_section();

		$this->run_form_progress_controls(
			$booking_form,
			array( $booking_form, 'css_selector_jfb' ),
			array( $this, 'on_fb' )
		);
	}


	public function run_form_progress_controls( $instance, $selector_callable, $add_section_condition ) {
		$instance->start_controls_section(
			'jet_fb_progress_wrapper_section',
			$add_section_condition( array(
				'label' => __( 'Form Progress - Wrapper', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			) )
		);
		$instance->add_responsive_control(
			'jet_fb_progress_wrapper_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( '-progress-pages' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_wrapper_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( '-progress-pages' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'jet_fb_progress_wrapper_typography',
				'selector' => $selector_callable( '-progress-pages' ),
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_wrapper_border',
			$selector_callable( '-progress-pages' )
		);
		$instance->add_control(
			'jet_fb_progress_wrapper_color',
			array(
				'label'     => __( 'Text Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( '-progress-pages' ) => 'color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_wrapper_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( '-progress-pages' ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->end_controls_section();


		$instance->start_controls_section(
			'jet_fb_progress_pages_section',
			$add_section_condition( array(
				'label' => __( 'Form Progress - Pages', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			) )
		);
		$instance->start_controls_tabs( 'jet_fb_progress_pages_tabs' );

		/**
		 *
		 */
		$wrapper = '-progress-pages__item--wrapper';
		$item    = '-progress-pages__item';

		$scheme = array(
			'active-wrapper'   => "$wrapper.active-page",
			'active-item'      => "$wrapper.active-page .%s$item",
			'active-separator' => "$wrapper.active-page .%s-progress-pages__separator",
			'active-circle'    => "$wrapper.active-page .%s$item--circle",

			'next-wrapper'   => "$wrapper:not(.passed-page):not(.active-page)",
			'next-item'      => "$wrapper:not(.passed-page):not(.active-page) .%s$item",
			'next-separator' => "$wrapper:not(.passed-page):not(.active-page) .%s-progress-pages__separator",
			'next-circle'    => "$wrapper:not(.passed-page):not(.active-page) .%s$item--circle",

			'prev-wrapper'   => "$wrapper.passed-page",
			'prev-item'      => "$wrapper.passed-page .%s$item",
			'prev-separator' => "$wrapper.passed-page .%s-progress-pages__separator",
			'prev-circle'    => "$wrapper.passed-page .%s$item--circle",
		);

		/**
		 *
		 */
		$instance->start_controls_tab(
			'jet_fb_progress_pages_tab--current',
			array(
				'label' => esc_html__( 'Current', 'jet-form-builder' ),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--current_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['active-item'] ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--current_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['active-item'] ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'jet_fb_progress_pages_tab--current_typography',
				'selector' => $selector_callable( $scheme['active-item'] ),
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--current_item_border',
			$selector_callable( $scheme['active-item'] )
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--current_color',
			array(
				'label'     => __( 'Text Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['active-item'] ) => 'color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--current_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['active-item'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_active_separator',
			array(
				'label'     => esc_html__( 'Separator', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--current_separator_height',
			array(
				'label'      => __( 'Height', 'jet-form-builder' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 1,
						'max' => 100,
					),
				),
				'selectors'  => array(
					$selector_callable( $scheme['active-separator'] ) => 'height: {{SIZE}}px; min-height: {{SIZE}}px;',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--current_separator_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['active-separator'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_active_circle',
			array(
				'label'     => esc_html__( 'Circle', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--current_separator_border',
			$selector_callable( $scheme['active-circle'] )
		);
		$instance->end_controls_tab();


		$instance->start_controls_tab(
			'jet_fb_progress_pages_tab--next',
			array(
				'label' => esc_html__( 'Next', 'jet-form-builder' ),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--next_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['next-item'] ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--next_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['next-item'] ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'jet_fb_progress_pages_tab--next_typography',
				'selector' => $selector_callable( $scheme['next-item'] ),
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--next_item_border',
			$selector_callable( $scheme['next-item'] )
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--next_color',
			array(
				'label'     => __( 'Text Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['next-item'] ) => 'color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--next_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['next-item'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_next_separator',
			array(
				'label'     => esc_html__( 'Separator', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--next_separator_height',
			array(
				'label'      => __( 'Height', 'jet-form-builder' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 1,
						'max' => 100,
					),
				),
				'selectors'  => array(
					$selector_callable( $scheme['next-separator'] ) => 'height: {{SIZE}}px; min-height: {{SIZE}}px;',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--next_separator_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['next-separator'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_next_circle',
			array(
				'label'     => esc_html__( 'Circle', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--next_separator_border',
			$selector_callable( $scheme['next-circle'] )
		);
		$instance->end_controls_tab();


		$instance->start_controls_tab(
			'jet_fb_progress_pages_tab--prev',
			array(
				'label' => esc_html__( 'Prev', 'jet-form-builder' ),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--prev_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['prev-item'] ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--prev_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$selector_callable( $scheme['prev-item'] ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
		$instance->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'jet_fb_progress_pages_tab--prev_typography',
				'selector' => $selector_callable( $scheme['prev-item'] ),
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--prev_item_border',
			$selector_callable( $scheme['prev-item'] )
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--prev_color',
			array(
				'label'     => __( 'Text Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['prev-item'] ) => 'color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--prev_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['prev-item'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_prev_separator',
			array(
				'label'     => esc_html__( 'Separator', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$instance->add_responsive_control(
			'jet_fb_progress_pages_tab--prev_separator_height',
			array(
				'label'      => __( 'Height', 'jet-form-builder' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 1,
						'max' => 100,
					),
				),
				'selectors'  => array(
					$selector_callable( $scheme['prev-separator'] ) => 'height: {{SIZE}}px; min-height: {{SIZE}}px;',
				),
			)
		);
		$instance->add_control(
			'jet_fb_progress_pages_tab--prev_separator_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$selector_callable( $scheme['prev-separator'] ) => 'background-color: {{VALUE}}',
				),
			)
		);
		$instance->add_control(
			'jet_fb_separator_prev_circle',
			array(
				'label'     => esc_html__( 'Circle', 'jet-form-builder' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$this->add_border(
			$instance,
			'jet_fb_progress_pages_tab--prev_separator_border',
			$selector_callable( $scheme['prev-circle'] )
		);
		$instance->end_controls_tab();
		$instance->end_controls_tabs();
		$instance->end_controls_section();
	}

	public function booking_form_render( $result, $settings ) {
		$slug = $this->jet_form_builder_slug();

		if ( empty( $settings['form_provider'] ) || $slug !== $settings['form_provider'] ) {
			return false;
		}
		if ( empty( $settings['form_id'] ) ) {
			return __( 'Please, select JetForm to show', 'jet-form-builder' );
		}

		return jet_fb_render_form( $settings );
	}

	/**
	 * Register the widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.1.0
	 *
	 * @access protected
	 */
	protected function _register_controls() {

		$options = Tools::get_form_settings_options( true );

		$this->start_controls_section(
			'section_form_settings',
			[
				'label' => __( 'Form Settings', 'jet-form-builder' ),
			]
		);

		$this->add_control(
			'form_id',
			array(
				'label'       => __( 'Choose Form', 'jet-form-builder' ),
				'type'        => Controls_Manager::SELECT2,
				'default'     => '',
				'label_block' => true,
				'options'     => Tools::get_forms_list_for_js( true ),
			)
		);

		$this->add_control(
			'fields_layout',
			[
				'label'   => __( 'Fields Layout', 'jet-form-builder' ),
				'type'    => Controls_Manager::SELECT,
				'default' => __( 'column', 'jet-form-builder' ),
				'options' => $options['fields_layout']
			]
		);

		$this->add_control(
			'required_mark',
			[
				'label'   => __( 'Required Mark', 'jet-form-builder' ),
				'type'    => Controls_Manager::TEXT,
				'default' => __( '*', 'jet-form-builder' ),
			]
		);

		$this->add_control(
			'submit_type',
			[
				'label'   => __( 'Submit Type', 'jet-form-builder' ),
				'type'    => Controls_Manager::SELECT,
				'default' => __( 'reload', 'jet-form-builder' ),
				'options' => $options['submit_type']
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_style',
			array(
				'label' => __( 'Form Row', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control( 'form_row_gap_before', array(

			'type'       => Controls_Manager::SLIDER,
			'label'      => __( 'Gap Before', 'jet-form-builder' ),
			'size_units' => array( 'px' ),
			'range'      => array(
				'px' => array(
					'min' => 0,
					'max' => 100,
				),
			),
			'selectors'  => array(
				$this->selector( '-row' ) => 'margin-top: {{SIZE}}px;',
			),
		) );

		$this->add_responsive_control( 'form_row_gap_after', array(

			'type'       => Controls_Manager::SLIDER,
			'label'      => __( 'Gap After', 'jet-form-builder' ),
			'size_units' => array( 'px' ),
			'range'      => array(
				'px' => array(
					'min' => 0,
					'max' => 100,
				),
			),
			'selectors'  => array(
				$this->selector( '-row' ) => 'margin-bottom: {{SIZE}}px;',
			),
		) );


		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_break_style',
			array(
				'label' => __( 'Form Break Row', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control(
			'form_break_gap',
			array(
				'label'      => __( 'Gap', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__next-page-wrap' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_break_alignment',
			array(
				'label'       => __( 'Alignment', 'jet-form-builder' ),
				'type'        => Controls_Manager::CHOOSE,
				'label_block' => false,
				'default'     => 'left',
				'separator'   => 'before',
				'options'     => array(
					'left'   => array(
						'title' => __( 'Left', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => __( 'Center', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => __( 'Right', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'selectors'   => array(
					$this->selector( '__next-page-wrap' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->add_border(
			$this,
			'form_break_border',
			$this->selector( '__next-page-wrap' )
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_break_next_style',
			array(
				'label' => __( 'Form Break Next Button', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control(
			'form_break_next_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__next-page' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_break_next_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__next-page' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_break_next_typography',
				'selector' => $this->selector( '__next-page' ),
			)
		);

		$this->add_border(
			$this,
			'form_break_next_border',
			$this->selector( '__next-page' )
		);

		$this->start_controls_tabs( 'form_break_next_styles' );

		$this->start_controls_tab(
			'form_break_next--normal',
			array(
				'label' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->add_control(
			'form_break_next_color--normal',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__next-page' ) => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'form_break_next_bg_color--normal',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__next-page' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'form_break_next--hover',
			array(
				'label' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->add_control(
			'form_break_next_color--hover',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__next-page:hover' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_break_next_bg_color--hover',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__next-page:hover' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();
		$this->end_controls_tabs();
		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_break_prev_style',
			array(
				'label' => __( 'Form Break Prev Button', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control(
			'form_break_prev_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__prev-page' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_break_prev_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__prev-page' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_break_prev_typography',
				'selector' => $this->selector( '__prev-page' ),
			)
		);

		$this->add_border(
			$this,
			'form_break_prev_border',
			$this->selector( '__prev-page' )
		);

		$this->start_controls_tabs( 'form_break_prev_styles' );

		$this->start_controls_tab(
			'form_break_prev--normal',
			array(
				'label' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->add_control(
			'form_break_prev_color--normal',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__prev-page' ) => 'color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'form_break_prev_bg_color--normal',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__prev-page' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'form_break_prev--hover',
			array(
				'label' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->add_control(
			'form_break_prev_color--hover',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__prev-page:hover' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_break_prev_bg_color--hover',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__prev-page:hover' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_tab();
		$this->end_controls_tabs();
		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_break_disabled_style',
			array(
				'label' => __( 'Form Break Disabled Message', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_responsive_control(
			'form_break_disabled_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__next-page-msg' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_break_disabled_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__next-page-msg' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_break_disabled_typography',
				'selector' => $this->selector( '__next-page-msg' ),
			)
		);

		$this->add_border(
			$this,
			'form_break_disabled_border',
			$this->selector( '__next-page-msg' )
		);

		$this->end_controls_section();

		$this->run_form_progress_controls(
			$this,
			array( $this, 'selector' ),
			function ( $args ) { return $args; }
		);

		$this->start_controls_section(
			'section_message_success_style',
			array(
				'label' => __( 'Message Success', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);
		$this->add_responsive_control(
			'form_success_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '-message--success' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_success_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '-message--success' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_success_alignment',
			array(
				'label'       => __( 'Alignment', 'jet-form-builder' ),
				'type'        => Controls_Manager::CHOOSE,
				'label_block' => false,
				'default'     => 'center',
				'separator'   => 'before',
				'options'     => array(
					'left'   => array(
						'title' => __( 'Left', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => __( 'Center', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => __( 'Right', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'selectors'   => array(
					$this->selector( '-message--success' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_success_typography',
				'selector' => $this->selector( '-message--success' ),
			)
		);

		$this->add_control(
			'form_success_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '-message--success' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_success_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '-message--success' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_border(
			$this,
			'form_success_border',
			$this->selector( '-message--success' )
		);
		$this->end_controls_section();

		$this->start_controls_section(
			'section_message_error_style',
			array(
				'label' => __( 'Message Error', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);
		$this->add_responsive_control(
			'form_error_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '-message--error' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_error_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '-message--error' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_error_alignment',
			array(
				'label'       => __( 'Alignment', 'jet-form-builder' ),
				'type'        => Controls_Manager::CHOOSE,
				'label_block' => false,
				'default'     => 'center',
				'separator'   => 'before',
				'options'     => array(
					'left'   => array(
						'title' => __( 'Left', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => __( 'Center', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => __( 'Right', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'selectors'   => array(
					$this->selector( '-message--error' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_error_typography',
				'selector' => $this->selector( '-message--error' ),
			)
		);

		$this->add_control(
			'form_error_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '-message--error' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_error_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '-message--error' ) => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_border(
			$this,
			'form_error_border',
			$this->selector( '-message--error' )
		);
		$this->end_controls_section();

		$this->start_controls_section(
			'section_label_style',
			array(
				'label' => __( 'Label', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);
		$this->add_responsive_control(
			'form_label_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__label' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_label_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__label' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_label_alignment',
			array(
				'label'       => __( 'Alignment', 'jet-form-builder' ),
				'type'        => Controls_Manager::CHOOSE,
				'label_block' => false,
				'default'     => 'left',
				'separator'   => 'before',
				'options'     => array(
					'left'   => array(
						'title' => __( 'Left', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => __( 'Center', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => __( 'Right', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'selectors'   => array(
					$this->selector( '__label' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_label_typography',
				'selector' => $this->selector( '__label' ),
			)
		);

		$this->add_control(
			'form_label_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__label' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_label_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__label' ) => 'background-color: {{VALUE}};',
				),
			)
		);
		$this->add_border(
			$this,
			'form_label_border',
			$this->selector( '__label' )
		);
		$this->end_controls_section();

		$this->start_controls_section(
			'section_mark_style',
			array(
				'label' => __( 'Required Mark', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_required_typography',
				'selector' => $this->selector( '__label .%s__required' ),
			)
		);
		$this->add_control(
			'form_required_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__label .%s__required' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_required_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__label .%s__required' ) => 'background-color: {{VALUE}};',
				),
			)
		);
		$this->end_controls_section();

		$this->start_controls_section(
			'section_description_style',
			array(
				'label' => __( 'Description', 'jet-form-builder' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);
		$this->add_responsive_control(
			'form_description_margin',
			array(
				'label'      => __( 'Margin', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__desc' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_description_padding',
			array(
				'label'      => __( 'Padding', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px' ),
				'selectors'  => array(
					$this->selector( '__desc' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'form_description_alignment',
			array(
				'label'       => __( 'Alignment', 'jet-form-builder' ),
				'type'        => Controls_Manager::CHOOSE,
				'label_block' => false,
				'default'     => 'left',
				'separator'   => 'before',
				'options'     => array(
					'left'   => array(
						'title' => __( 'Left', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-left',
					),
					'center' => array(
						'title' => __( 'Center', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-center',
					),
					'right'  => array(
						'title' => __( 'Right', 'jet-form-builder' ),
						'icon'  => 'eicon-h-align-right',
					),
				),
				'selectors'   => array(
					$this->selector( '__desc' ) => 'text-align: {{VALUE}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'form_description_typography',
				'selector' => $this->selector( '__desc' ),
			)
		);

		$this->add_control(
			'form_description_color',
			array(
				'label'     => __( 'Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__desc' ) => 'color: {{VALUE}};',
				),
			)
		);
		$this->add_control(
			'form_description_bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__desc' ) => 'background-color: {{VALUE}};',
				),
			)
		);
		$this->add_border(
			$this,
			'form_description_border',
			$this->selector( '__desc' )
		);
		$this->end_controls_section();
	}

	private function add_border( $instance, $control_id, $selector ) {
		$instance->add_group_control(
			Group_Control_Border::get_type(),
			array(
				'name'        => $control_id,
				'label'       => __( 'Border', 'jet-form-builder' ),
				'placeholder' => '1px',
				'selector'    => $selector,
			)
		);
		$instance->add_responsive_control(
			$control_id . '_radius',
			array(
				'label'      => __( 'Border Radius', 'jet-form-builder' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%' ),
				'selectors'  => array(
					$selector => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);
	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.1.0
	 *
	 * @access protected
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();

		echo jet_fb_render_form( $settings );
	}


}
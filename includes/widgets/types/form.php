<?php


namespace Jet_Form_Builder\Widgets\Types;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Jet_Form_Builder\Blocks\Modules\General_Style_Functions;
use Jet_Form_Builder\Classes\Tools;

class Form extends Jfb_Widget_Base {

	use General_Style_Functions;

	public function init_hooks() {
		add_filter(
			'jet-engine/booking-form/combine-selector',
			array( $this, 'combine_selector' ), 10, 3
		);

		add_filter(
			'jet-engine/forms/pre-render-form',
			array( $this, 'booking_form_render' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_general/after_section_start',
			array( $this, 'after_general_section_start' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_general/before_section_end',
			array( $this, 'update_general_form_controls' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_range_fields_style/before_section_end',
			array( $this, 'update_section_range_fields_style' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/form_submit_style/before_section_end',
			array( $this, 'update_form_submit_style' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_rows_style/before_section_end',
			array( $this, 'update_section_rows_style' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_fields_style/before_section_end',
			array( $this, 'update_section_fields_style' ), 10, 2
		);

		add_action(
			'elementor/element/jet-engine-booking-form/section_checkradio_fields_style/before_section_end',
			array( $this, 'update_section_checkradio_fields_style' ), 10, 2
		);
		add_action(
			'elementor/element/jet-engine-booking-form/section_checkradio_fields_style/after_section_end',
			array( $this, 'after_section_checkradio_fields_style' ), 10, 2
		);
		//form_prev_page_style
		add_action(
			'elementor/element/jet-engine-booking-form/form_prev_page_style/after_section_end',
			array( $this, 'after_form_prev_page_style' ), 10, 2
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
		return 'jet-form-builder-icon--form';
	}

	public function get_categories() {
		return array( 'jet-form-builder' );
	}

	private function jet_form_builder_slug() {
		return jet_form_builder()->post_type->slug();
	}

	private function jet_engine_form_slug() {
		return jet_engine()->forms->slug();
	}

	public function combine_selector( $additional, $engine_selector, $control_id ) {
		if ( ! $control_id ) {
			return $this->selector( $engine_selector );
		}

		switch ( $control_id ) {
			case 'labels_v_alignment':
				return $this->selector( '-row' );
			case 'fields_background_color':
				return $this->selector( '__field:not(.checkradio-field):not(.range-field):not(.%s-repeater)' );
			case 'field_messages_font_size':
			case 'field_messages_color':
			case 'field_messages_margin':
			case 'field_messages_alignment':
				return $this->selector( '-file-upload__errors' );
		}
	}


	public function after_general_section_start( $element, $args ) {
		$element->add_control(
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

		$element->add_control(
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

	public function update_general_form_controls( $element, $args ) {
		$element->update_control(
			'_form_id',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);
		$element->update_control(
			'fields_label_tag',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);
		$element->update_control(
			'cache_form',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);
		$element->add_control(
			'enable_progress',
			array(
				'label'     => __( 'Enable form pages progress', 'jet-form-builder' ),
				'type'      => Controls_Manager::SWITCHER,
				'condition' => array( 'form_provider' => $this->jet_form_builder_slug() )
			)
		);
	}

	public function update_section_rows_style( $element, $args ) {
		$element->update_control(
			'rows_divider',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			)
		);
		$element->update_control(
			'rows_divider_height',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			),
			array( 'recursive' => true )
		);
		$element->update_control(
			'rows_divider_color',
			array(
				'condition' => array( 'form_provider' => $this->jet_engine_form_slug() )
			),
			array( 'recursive' => true )
		);
		$element->update_control(
			'cols_gap',
			array(
				'selectors' => array(
					$this->selector( ' .wp-block-column:not(:first-child)' ) => 'margin-left: {{SIZE}}{{UNIT}};'
				)
			),
			array( 'recursive' => true )
		);
	}

	public function update_section_fields_style( $element, $args ) {
		$element->update_control(
			'fields_placeholder_color',
			array(
				'selectors' => array(
					$this->selector( ' ::-webkit-input-placeholder' ) => 'color: {{VALUE}};',
					$this->selector( ' ::-ms-input-placeholder' )     => 'color: {{VALUE}};',
					$this->selector( ' ::-moz-placeholder' )          => 'color: {{VALUE}};',
					$this->selector( ' :-moz-placeholder' )           => 'color: {{VALUE}};',
				)
			),
			array( 'recursive' => true )
		);
	}

	public function update_section_checkradio_fields_style( $element, $args ) {
		$element->update_control(
			'checkradio_fields_gap',
			array(
				'selectors' => array(
					'body:not(.rtl) ' . $this->selector( '__field-wrap.checkradio-wrap span::before' ) => 'margin-right: {{SIZE}}px;',
					'body.rtl ' . $this->selector( '__field-wrap.checkradio-wrap span::before' )       => 'margin-left: {{SIZE}}px;'
				)
			),
			array( 'recursive' => true )
		);
	}

	public function after_section_checkradio_fields_style( $booking_form, $args ) {
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
					$this->selector( '__field-wrap .for-checkbox span::before' ) => 'display:{{VALUE}};'
				)
			)
		);

		$booking_form->add_responsive_control(
			'builder__checkbox_size',
			array(
				'label'      => __( 'Checkbox Size', 'jet-form-builder' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 50,
					),
				),
				'selectors'  => array(
					$this->selector( '__field-wrap .for-checkbox span::before' ) => 'font-size: {{SIZE}}px;',
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
				'label' => esc_html__( 'Normal', 'jet-form-builder' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__checkbox_state--normal__border',
			$this->selector( '__field-wrap .for-checkbox span::before' )
		);

		$booking_form->add_control(
			'builder__checkbox_state--normal__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__field-wrap .for-checkbox span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();

		$booking_form->start_controls_tab(
			'builder__checkbox_state--checked',
			array(
				'label' => esc_html__( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->add_border(
			$booking_form,
			'builder__checkbox_state--checked__border',
			$this->selector( '__field-wrap label.for-checkbox :checked + span::before' )
		);
		$booking_form->add_control(
			'builder__checkbox_state--checked__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__field-wrap label.for-checkbox :checked + span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();
		$booking_form->end_controls_tabs();
		$booking_form->end_controls_section();

		$booking_form->start_controls_section(
			'builder__radio_field_style_section',
			$this->on_fb( array(
				'label' => __( 'JetForm Radio', 'jet-form-builder' ),
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
						'title' => __( 'Yes', 'jet-form-builder' ),
						'icon'  => 'fa fa-check',
					),
					'none'         => array(
						'title' => __( 'No', 'jet-form-builder' ),
						'icon'  => 'fa fa-times',
					),
				),
				'selectors' => array(
					$this->selector( '__field-wrap .for-radio span::before' ) => 'display:{{VALUE}};'
				)
			)
		);

		$booking_form->add_responsive_control(
			'builder__radio_size',
			array(
				'label'      => __( 'Radio Size', 'jet-form-builder' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px' ),
				'range'      => array(
					'px' => array(
						'min' => 0,
						'max' => 50,
					),
				),
				'selectors'  => array(
					$this->selector( '__field-wrap .for-radio span::before' ) => 'font-size: {{SIZE}}px;',
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
				'label' => esc_html__( 'Normal', 'jet-form-builder' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__radio_state--normal__border',
			$this->selector( '__field-wrap .for-radio span::before' )
		);
		$booking_form->add_control(
			'builder__radio_state--normal__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__field-wrap .for-radio span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();

		$booking_form->start_controls_tab(
			'builder__radio_state--checked',
			array(
				'label' => esc_html__( 'Checked', 'jet-form-builder' ),
			)
		);
		$this->add_border(
			$booking_form,
			'builder__radio_state--checked__border',
			$this->selector( '__field-wrap label.for-radio :checked + span::before' )
		);
		$booking_form->add_control(
			'builder__radio_state--checked__bg_color',
			array(
				'label'     => __( 'Background Color', 'jet-form-builder' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					$this->selector( '__field-wrap label.for-radio :checked + span::before' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$booking_form->end_controls_tab();
		$booking_form->end_controls_tabs();
		$booking_form->end_controls_section();
	}

	public function after_form_prev_page_style( $element, $args ) {
		$this->run_form_progress_controls(
			$element,
			array( $this, 'selector' ),
			array( $this, 'on_fb' )
		);
	}

	public function update_section_range_fields_style( $element, $args ) {
		$range_obj = jet_form_builder()->blocks->get_field_by_name( 'range-field' );

		$element->update_control(
			'track_height',
			array(
				'selectors' => array(
					$this->selector() => $range_obj::CSS_VAR_RANGE_HEIGHT . ': {{SIZE}}{{UNIT}};',
				)
			),
			array( 'recursive' => true )
		);
		$element->update_control(
			'thumb_size',
			array(
				'selectors' => array(
					$this->selector() => $range_obj::CSS_VAR_SLIDER_SIZE . ': {{SIZE}}{{UNIT}};',
				)
			),
			array( 'recursive' => true )
		);

		$element->update_control(
			'track_border_radius',
			array(
				'selectors' => array(
					$this->selector( '__field.range-field::-webkit-slider-runnable-track' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					$this->selector( '__field.range-field::-moz-range-track' )              => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					$this->selector( '__field.range-field::-ms-track' )                     => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				)
			),
			array( 'recursive' => true )
		);
		$element->update_control(
			'thumb_border_radius',
			array(
				'selectors' => array(
					$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					$this->selector( '__field.range-field::-moz-range-thumb' )     => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					$this->selector( '__field.range-field::-ms-thumb' )            => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				)
			),
			array( 'recursive' => true )
		);

		$element->update_control(
			'track_bg_color',
			array(
				'selectors' => array(
					$this->selector( '__field.range-field::-webkit-slider-runnable-track' ) => 'background-color: {{VALUE}};',
					$this->selector( '__field.range-field::-moz-range-track' )              => 'background-color: {{VALUE}};',
					$this->selector( '__field.range-field::-ms-track' )                     => 'background-color: {{VALUE}};',
				)
			),
			array( 'recursive' => true )
		);
		$element->update_control(
			'thumb_bg_color',
			array(
				'selectors' => array(
					$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'background-color: {{VALUE}};',
					$this->selector( '__field.range-field::-moz-range-thumb' )     => 'background-color: {{VALUE}};',
					$this->selector( '__field.range-field::-ms-thumb' )            => 'background-color: {{VALUE}};',
				)
			),
			array( 'recursive' => true )
		);
	}

	public function update_form_submit_style( $element, $args ) {
		$element->update_control(
			'booking_form_submit_alignment',
			array(
				'selectors' => array(
					$this->selector( '__submit' ) => 'justify-content: center;'
				)
			),
			array( 'recursive' => true )
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

		/** Form Settings */
		$closure = function () use ( $options ) {
			$this->start_controls_section(
				'section_ form_settings',
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
				'fields_label_tag',
				array(
					'label'   => __( 'Fields label HTML tag', 'jet-form-builder' ),
					'type'    => Controls_Manager::SELECT,
					'default' => 'div',
					'options' => $options['fields_label_tag']
				)
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

			$this->add_control(
				'enable_progress',
				array(
					'label'        => __( 'Enable form pages progress', 'jet-form-builder' ),
					'type'         => Controls_Manager::SWITCHER,
					'label_on'     => __( 'Yes', 'jet-form-builder' ),
					'label_off'    => __( 'No', 'jet-form-builder' ),
					'return_value' => true,
					'default'      => false,
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Form Row */
		$closure = function () {
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
		};
		$closure();

		/** Label */
		$closure = function () {
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

			$this->add_control(
				'divider__label__required_mark',
				[
					'label'     => __( 'Required Mark', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				]
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
			$this->end_controls_section();
		};
		$closure();

		/** Description */
		$closure = function () {
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
		};
		$closure();

		/** Checkbox & Radio Fields */
		$closure = function () {
			$this->start_controls_section(
				'section_checkradio_fields_style',
				array(
					'label'      => __( 'Checkbox & Radio Fields', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->add_responsive_control(
				'checkradio_fields_layout',
				array(
					'label'       => __( 'Layout', 'jet-form-builder' ),
					'type'        => Controls_Manager::CHOOSE,
					'label_block' => false,
					'options'     => array(
						'inline-block' => array(
							'title' => __( 'Horizontal', 'jet-form-builder' ),
							'icon'  => 'fa fa-ellipsis-h',
						),
						'block'        => array(
							'title' => __( 'Vertical', 'jet-form-builder' ),
							'icon'  => 'fa fa-bars',
						),
					),
					'selectors'   => array(
						$this->selector( '__field-wrap.checkradio-wrap' ) => 'display: {{VALUE}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'checkradio_fields_typography',
					'selector' => $this->selector( '__field-wrap label' ),
				)
			);

			$this->add_responsive_control(
				'checkradio_fields_gap',
				array(
					'label'      => __( 'Gap between control and label', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 0,
							'max' => 50,
						),
					),
					'selectors'  => array(
						'body:not(.rtl) ' . $this->selector( '__field-wrap.checkradio-wrap' ) => 'margin-right: {{SIZE}}px;',
						'body.rtl ' . $this->selector( '__field-wrap.checkradio-wrap' )       => 'margin-left: {{SIZE}}px;',
					),
				)
			);
			$this->add_responsive_control(
				'checkradio_fields_control_size',
				array(
					'label'      => __( 'Control Size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 0,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__field-wrap span::before' ) => 'font-size: {{SIZE}}px;',
					),
				)
			);

			$this->add_control(
				'checkradio_fields_option_label_heading',
				[
					'label'     => __( 'Option label', 'plugin-name' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				]
			);

			$this->add_control(
				'checkradio_fields_color',
				array(
					'label'     => __( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-wrap label' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'checkradio_fields_background_color',
				array(
					'label'     => __( 'Background color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-wrap label' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->start_controls_tabs( 'tab__checkradio_tabs_items', array(
				'separator' => 'before'
			) );

			$this->start_controls_tab(
				'tab__checkradio_control_color__normal',
				array(
					'label' => __( 'Normal', 'jet-form-builder' ),
				)
			);

			$this->add_border(
				$this,
				'tab__checkradio_control_border__normal',
				$this->selector( '__field-wrap span::before' )
			);

			$this->add_control(
				'tab__checkradio_control_bg_color__normal',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-wrap label > span::before' ) => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'tab__checkradio_control_border__checked',
				array(
					'label' => __( 'Checked', 'jet-form-builder' ),
				)
			);
			$this->add_border(
				$this,
				'tab__checkradio_control_border__checked',
				$this->selector( '__field-wrap label :checked + span::before' )
			);
			$this->add_control(
				'tab__checkradio_control_bg_color__checked',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-wrap label :checked + span::before' ) => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();
			$this->end_controls_tabs();
			$this->end_controls_section();
		};
		$closure();

		/** Input Fields */
		$closure = function () {

			$simple_input = '__field:not(.checkradio-field):not(.range-field):not(.%s-repeater):not(.wysiwyg-field)';

			$this->start_controls_section(
				'section_form_input_fields',
				array(
					'label' => __( 'Input Fields', 'jet-form-builder' ),
					'tab'   => Controls_Manager::TAB_STYLE,
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'fields_typography',
					'selector' => $this->selector( $simple_input ),
				)
			);

			$this->add_control(
				'fields_color',
				array(
					'label'     => __( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( $simple_input ) => 'color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'fields_placeholder_color',
				array(
					'label'     => __( 'Placeholder Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( ' ::-webkit-input-placeholder' ) => 'color: {{VALUE}};',
						$this->selector( ' ::-ms-input-placeholder' )     => 'color: {{VALUE}};',
						$this->selector( ' ::-moz-placeholder' )          => 'color: {{VALUE}};',
						$this->selector( ' :-moz-placeholder' )           => 'color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'fields_background_color',
				array(
					'label'     => __( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( $simple_input ) => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->add_responsive_control(
				'fields_padding',
				array(
					'label'      => __( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( $simple_input ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'fields_margin',
				array(
					'label'      => __( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( $simple_input ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'fields_border',
					'label'       => __( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( $simple_input ),
				)
			);

			$this->add_responsive_control(
				'fields_border_radius',
				array(
					'label'      => __( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( $simple_input ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Box_Shadow::get_type(),
				array(
					'name'     => 'fields_box_shadow',
					'selector' => $this->selector( $simple_input ),
				)
			);

			$this->add_responsive_control(
				'fields_width',
				array(
					'label'      => __( 'Fields width', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px', '%' ),
					'range'      => array(
						'px' => array(
							'min' => 50,
							'max' => 1000,
						),
					),
					'selectors'  => array(
						$this->selector( $simple_input ) => 'max-width: {{SIZE}}{{UNIT}};width: {{SIZE}}{{UNIT}};flex: 0 1 {{SIZE}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'fields_textarea_height',
				array(
					'label'      => __( 'Textarea Height', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 10,
							'max' => 500,
						),
					),
					'selectors'  => array(
						$this->selector( '__field.textarea-field' ) => 'height:{{SIZE}}px;min-height:{{SIZE}}px;',
					),
				)
			);

			$this->end_controls_section();

		};
		$closure();

		/** Calculated Fields */
		$closure = function () {
			$this->start_controls_section(
				'section_calc_fields_style',
				array(
					'label'      => __( 'Calculated Fields', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'calc_fields_typography',
					'selector' => $this->selector( '__calculated-field' ),
				)
			);

			$this->add_control(
				'calc_fields_color',
				array(
					'label'     => __( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__calculated-field' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'calc_fields_prefix_color',
				array(
					'label'     => __( 'Prefix Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__calculated-field-prefix' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_responsive_control(
				'calc_fields_prefix_size',
				array(
					'label'      => __( 'Prefix size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 10,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__calculated-field-prefix' ) => 'font-size: {{SIZE}}px;',
					),
				)
			);

			$this->add_control(
				'calc_fields_suffix_color',
				array(
					'label'     => __( 'Suffix Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__calculated-field-suffix' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_responsive_control(
				'calc_fields_suffix_size',
				array(
					'label'      => __( 'Suffix size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 10,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__calculated-field-suffix' ) => 'font-size: {{SIZE}}px;',
					),
				)
			);

			$this->add_control(
				'calc_fields_background_color',
				array(
					'label'     => __( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__calculated-field' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->add_responsive_control(
				'calc_fields_padding',
				array(
					'label'      => __( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( '__calculated-field' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'calc_fields_margin',
				array(
					'label'      => __( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( '__calculated-field' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'calc_fields_border',
					'label'       => __( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( '__calculated-field' ),
				)
			);

			$this->add_responsive_control(
				'calc_fields_border_radius',
				array(
					'label'      => __( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '__calculated-field' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Range Fields */
		$closure = function () {
			$this->start_controls_section(
				'section_range_fields_style',
				array(
					'label' => __( 'Range Fields', 'jet-form-builder' ),
					'tab'   => Controls_Manager::TAB_STYLE,
				)
			);

			$this->add_control(
				'range_max_width',
				array(
					'label'      => esc_html__( 'Max Width', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px', '%' ),
					'range'      => array(
						'px' => array(
							'min' => 1,
							'max' => 1000,
						),
					),
					'selectors'  => array(
						$this->selector( '__field-wrap.range-wrap' ) => 'max-width: {{SIZE}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'range_slider_heading',
				array(
					'label'     => esc_html__( 'Slider', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->add_control(
				'track_height',
				array(
					'label'      => esc_html__( 'Track Height', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 1,
							'max' => 20,
						),
					),
					'selectors'  => array(
						$this->selector( ' .range-field::-webkit-slider-runnable-track' ) => 'height: {{SIZE}}{{UNIT}};',
						$this->selector( ' .range-field::-moz-range-track' )              => 'height: {{SIZE}}{{UNIT}};',
						$this->selector( ' .range-field::-ms-track' )                     => 'height: {{SIZE}}{{UNIT}};',
						$this->selector( ' .range-field::-webkit-slider-thumb' )          => 'margin-top: calc( (18px - {{SIZE}}{{UNIT}})/-2 )',
					),
				)
			);

			$this->add_control(
				'thumb_size',
				array(
					'label'      => esc_html__( 'Thumb Size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 1,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__field.range-field' )                       => 'min-height: {{SIZE}}{{UNIT}};',
						$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}; margin-top: calc( ({{SIZE}}{{UNIT}} - 4px)/-2 )',
						$this->selector( '__field.range-field::-moz-range-thumb' )     => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
						$this->selector( '__field.range-field::-ms-thumb' )            => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'thumb_indent',
				array(
					'type'      => Controls_Manager::HIDDEN,
					'default'   => 'style',
					'selectors' => array(
						$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'margin-top: calc( ({{thumb_size.SIZE}}{{thumb_size.UNIT}} - {{track_height.SIZE}}{{track_height.UNIT}})/-2 )',
					),
				)
			);

			$this->add_control(
				'track_border_radius',
				array(
					'label'      => esc_html__( 'Track Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '__field.range-field::-webkit-slider-runnable-track' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						$this->selector( '__field.range-field::-moz-range-track' )              => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						$this->selector( '__field.range-field::-ms-track' )                     => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'thumb_border_radius',
				array(
					'label'      => esc_html__( 'Thumb Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						$this->selector( '__field.range-field::-moz-range-thumb' )     => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
						$this->selector( '__field.range-field::-ms-thumb' )            => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'track_bg_color',
				array(
					'label'     => esc_html__( 'Track Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field.range-field::-webkit-slider-runnable-track' ) => 'background-color: {{VALUE}};',
						$this->selector( '__field.range-field::-moz-range-track' )              => 'background-color: {{VALUE}};',
						$this->selector( '__field.range-field::-ms-track' )                     => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'thumb_bg_color',
				array(
					'label'     => esc_html__( 'Thumb Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field.range-field::-webkit-slider-thumb' ) => 'background-color: {{VALUE}};',
						$this->selector( '__field.range-field::-moz-range-thumb' )     => 'background-color: {{VALUE}};',
						$this->selector( '__field.range-field::-ms-thumb' )            => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'range_value_heading',
				array(
					'label'     => esc_html__( 'Value', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'range_value_typography',
					'selector' => $this->selector( '__field-value.range-value' ),
				)
			);

			$this->add_control(
				'range_value_color',
				array(
					'label'     => esc_html__( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-value.range-value' ) => 'color: {{VALUE}};',
					),
				)
			);

			$this->add_responsive_control(
				'range_prefix_value_size',
				array(
					'label'      => __( 'Prefix size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px', 'em', 'rem' ),
					'range'      => array(
						'px' => array(
							'min' => 10,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__field-value.range-value .%s__field-value-prefix' ) => 'font-size: {{SIZE}}px;',
					),
					'separator'  => 'before',
				)
			);

			$this->add_control(
				'range_prefix_value_color',
				array(
					'label'     => __( 'Prefix Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-value.range-value .%s__field-value-prefix' ) => 'color: {{VALUE}};',
					),
				)
			);

			$this->add_responsive_control(
				'range_suffix_value_size',
				array(
					'label'      => __( 'Suffix size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px', 'em', 'rem' ),
					'range'      => array(
						'px' => array(
							'min' => 10,
							'max' => 50,
						),
					),
					'selectors'  => array(
						$this->selector( '__field-value.range-value .%s__field-value-suffix' ) => 'font-size: {{SIZE}}px;',
					),
					'separator'  => 'before',
				)
			);

			$this->add_control(
				'range_suffix_value_color',
				array(
					'label'     => __( 'Suffix Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__field-value.range-value .%s__field-value-suffix' ) => 'color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Heading Fields */
		$closure = function () {
			$this->start_controls_section(
				'section_headings_style',
				array(
					'label'      => __( 'Heading', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->add_control(
				'field_heading_styles_heading',
				array(
					'label'     => esc_html__( 'Label', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'field_heading_typography',
					'selector' => $this->selector( '__heading' ),
				)
			);

			$this->add_control(
				'fields_heading_color',
				array(
					'label'     => __( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__heading' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_responsive_control(
				'fields_heading_gap',
				array(
					'label'      => __( 'Gap', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( '__heading' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'field_heading_styles_desc',
				array(
					'label'     => esc_html__( 'Description', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'field_desc_typography',
					'selector' => $this->selector( '__heading-desc' ),
				)
			);

			$this->add_control(
				'fields_desc_color',
				array(
					'label'     => __( 'Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__heading-desc' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_responsive_control(
				'fields_heading_desc_gap',
				array(
					'label'      => __( 'Gap', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px' ),
					'selectors'  => array(
						$this->selector( '__heading-desc' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Repeater */
		$closure = function () {
			$this->start_controls_section(
				'section_repeater_style',
				array(
					'label'      => __( 'Repeater', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->add_control(
				'field_repeater_row_desc',
				array(
					'label'     => esc_html__( 'Repeater row', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_row_padding',
				array(
					'label'      => esc_html__( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '-repeater__row' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'field_repeater_new_desc',
				array(
					'label'     => esc_html__( 'New item button', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->start_controls_tabs( 'tabs_booking_form_repeater_style' );

			$this->start_controls_tab(
				'booking_form_repeater_normal',
				array(
					'label' => esc_html__( 'Normal', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_repeater_bg_color',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__new' ) => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_color',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__new' ) => 'color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'booking_form_repeater_hover',
				array(
					'label' => esc_html__( 'Hover', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_repeater_bg_color_hover',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__new:hover' ) => 'background-color: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_color_hover',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__new:hover' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_hover_border_color',
				array(
					'label'     => esc_html__( 'Border Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'condition' => array(
						'booking_form_repeater_border_border!' => '',
					),
					'selectors' => array(
						$this->selector( '-repeater__new:hover' ) => 'border-color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();

			$this->end_controls_tabs();

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'           => 'booking_form_repeater_typography',
					'selector'       => $this->selector( '-repeater__new' ),
					'fields_options' => array(
						'typography' => array(
							'separator' => 'before',
						),
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_padding',
				array(
					'label'      => esc_html__( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '-repeater__new' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_margin',
				array(
					'label'      => esc_html__( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '-repeater__new' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'booking_form_repeater_border',
					'label'       => esc_html__( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( '-repeater__new' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_border_radius',
				array(
					'label'      => esc_html__( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '-repeater__new' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Box_Shadow::get_type(),
				array(
					'name'     => 'booking_form_repeater_box_shadow',
					'selector' => $this->selector( '-repeater__new' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_alignment',
				array(
					'label'     => esc_html__( 'Alignment', 'jet-form-builder' ),
					'type'      => Controls_Manager::CHOOSE,
					'options'   => array(
						'flex-start' => array(
							'title' => esc_html__( 'Start', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-left' : 'eicon-h-align-right',
						),
						'center'     => array(
							'title' => esc_html__( 'Center', 'jet-form-builder' ),
							'icon'  => 'eicon-h-align-center',
						),
						'flex-end'   => array(
							'title' => esc_html__( 'End', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-right' : 'eicon-h-align-left',
						),
					),
					'selectors' => array(
						$this->selector( '-repeater__actions' ) => 'justify-content: {{VALUE}};',
					),
				)
			);

			$this->add_control(
				'field_repeater_del_desc',
				array(
					'label'     => esc_html__( 'Remove item button', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->start_controls_tabs( 'tabs_booking_form_repeater_del_style' );

			$this->start_controls_tab(
				'booking_form_repeater_del_normal',
				array(
					'label' => esc_html__( 'Normal', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_bg_color',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__remove' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_color',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__remove' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'booking_form_repeater_del_hover',
				array(
					'label' => esc_html__( 'Hover', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_bg_color_hover',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__remove:hover' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_color_hover',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '-repeater__remove:hover' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_hover_border_color',
				array(
					'label'     => esc_html__( 'Border Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'condition' => array(
						'booking_form_repeater_del_border_border!' => '',
					),
					'selectors' => array(
						$this->selector( '-repeater__remove:hover' ) => 'border-color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();

			$this->end_controls_tabs();

			$this->add_responsive_control(
				'booking_form_repeater_del_padding',
				array(
					'label'      => esc_html__( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'separator'  => 'before',
					'selectors'  => array(
						$this->selector( '-repeater__remove' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_del_margin',
				array(
					'label'      => esc_html__( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '-repeater__remove' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'booking_form_repeater_del_border',
					'label'       => esc_html__( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( '-repeater__remove' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_del_border_radius',
				array(
					'label'      => esc_html__( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '-repeater__remove' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_control(
				'booking_form_repeater_del_size',
				array(
					'label'      => esc_html__( 'Icon Size', 'jet-form-builder' ),
					'type'       => Controls_Manager::SLIDER,
					'size_units' => array( 'px' ),
					'range'      => array(
						'px' => array(
							'min' => 12,
							'max' => 90,
						),
					),
					'selectors'  => array(
						$this->selector( '-repeater__remove' ) => 'font-size: {{SIZE}}{{UNIT}};line-height: {{SIZE}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Box_Shadow::get_type(),
				array(
					'name'     => 'booking_form_repeater_del_box_shadow',
					'selector' => $this->selector( '-repeater__remove' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_repeater_del_alignment',
				array(
					'label'     => esc_html__( 'Alignment', 'jet-form-builder' ),
					'type'      => Controls_Manager::CHOOSE,
					'default'   => 'flex-start',
					'options'   => array(
						'flex-start' => array(
							'title' => esc_html__( 'Top', 'jet-form-builder' ),
							'icon'  => 'eicon-v-align-top',
						),
						'center'     => array(
							'title' => esc_html__( 'Middle', 'jet-form-builder' ),
							'icon'  => 'eicon-v-align-middle',
						),
						'flex-end'   => array(
							'title' => esc_html__( 'Bottom', 'jet-form-builder' ),
							'icon'  => 'eicon-v-align-bottom',
						),
					),
					'selectors' => array(
						$this->selector( '-repeater__row-remove' ) => 'align-self: {{VALUE}};',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Conditional block */
		$closure = function () {
			$this->start_controls_section(
				'conditional_style',
				array(
					'label'      => esc_html__( 'Conditional block', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->add_responsive_control(
				'conditional_padding',
				array(
					'label'      => esc_html__( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '__conditional' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'conditional_margin',
				array(
					'label'      => esc_html__( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '__conditional' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'conditional_border',
					'label'       => esc_html__( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( '__conditional' ),
				)
			);

			$this->add_responsive_control(
				'conditional_border_radius',
				array(
					'label'      => esc_html__( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '__conditional' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Box_Shadow::get_type(),
				array(
					'name'     => 'conditional_box_shadow',
					'selector' => $this->selector( '__conditional' ),
				)
			);

			$this->add_control(
				'conditional_bg_color',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__conditional' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Submit */
		$closure = function () {
			$this->start_controls_section(
				'form_submit_style',
				array(
					'label'      => esc_html__( 'Submit', 'jet-form-builder' ),
					'tab'        => Controls_Manager::TAB_STYLE,
					'show_label' => false,
				)
			);

			$this->start_controls_tabs( 'tabs_booking_form_submit_style' );

			$this->start_controls_tab(
				'booking_form_submit_normal',
				array(
					'label' => esc_html__( 'Normal', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_submit_bg_color',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__action-button' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_submit_color',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__action-button' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->end_controls_tab();

			$this->start_controls_tab(
				'booking_form_submit_hover',
				array(
					'label' => esc_html__( 'Hover', 'jet-form-builder' ),
				)
			);

			$this->add_control(
				'booking_form_submit_bg_color_hover',
				array(
					'label'     => esc_html__( 'Background Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__action-button:hover' ) => 'background-color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_submit_color_hover',
				array(
					'label'     => esc_html__( 'Text Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						$this->selector( '__action-button:hover' ) => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'booking_form_submit_hover_border_color',
				array(
					'label'     => esc_html__( 'Border Color', 'jet-form-builder' ),
					'type'      => Controls_Manager::COLOR,
					'condition' => array(
						'booking_form_submit_border_border!' => '',
					),
					'selectors' => array(
						$this->selector( '__action-button:hover' ) => 'border-color: {{VALUE}};',
					),
				)
			);

			$this->end_controls_tab();

			$this->end_controls_tabs();

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'           => 'booking_form_submit_typography',
					'selector'       => $this->selector( '__action-button' ),
					'fields_options' => array(
						'typography' => array(
							'separator' => 'after',
						),
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_submit_padding',
				array(
					'label'      => esc_html__( 'Padding', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '__action-button' ) => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_submit_margin',
				array(
					'label'      => esc_html__( 'Margin', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%', 'em' ),
					'selectors'  => array(
						$this->selector( '__action-button' ) => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Border::get_type(),
				array(
					'name'        => 'booking_form_submit_border',
					'label'       => esc_html__( 'Border', 'jet-form-builder' ),
					'placeholder' => '1px',
					'selector'    => $this->selector( '__action-button' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_submit_border_radius',
				array(
					'label'      => esc_html__( 'Border Radius', 'jet-form-builder' ),
					'type'       => Controls_Manager::DIMENSIONS,
					'size_units' => array( 'px', '%' ),
					'selectors'  => array(
						$this->selector( '__action-button' ) => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Box_Shadow::get_type(),
				array(
					'name'     => 'booking_form_submit_box_shadow',
					'selector' => $this->selector( '__action-button' ),
				)
			);

			$this->add_responsive_control(
				'booking_form_submit_alignment',
				array(
					'label'     => esc_html__( 'Alignment', 'jet-form-builder' ),
					'type'      => Controls_Manager::CHOOSE,
					'options'   => array(
						'flex-start' => array(
							'title' => esc_html__( 'Start', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-left' : 'eicon-h-align-right',
						),
						'center'     => array(
							'title' => esc_html__( 'Center', 'jet-form-builder' ),
							'icon'  => 'eicon-h-align-center',
						),
						'flex-end'   => array(
							'title' => esc_html__( 'End', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-right' : 'eicon-h-align-left',
						),
						'stretch'    => array(
							'title' => esc_html__( 'Fullwidth', 'jet-form-builder' ),
							'icon'  => 'eicon-h-align-stretch',
						),
					),
					'selectors' => array(
						$this->selector( '__submit-wrap' ) => 'justify-content: {{VALUE}}; align-items: {{VALUE}};',
					),
				)
			);

			$this->add_responsive_control(
				'booking_form_submit_alignment_text',
				array(
					'label'     => esc_html__( 'Button Text Alignment', 'jet-form-builder' ),
					'type'      => Controls_Manager::CHOOSE,
					'options'   => array(
						'flex-start' => array(
							'title' => esc_html__( 'Start', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-left' : 'eicon-h-align-right',
						),
						'center'     => array(
							'title' => esc_html__( 'Center', 'jet-form-builder' ),
							'icon'  => 'eicon-h-align-center',
						),
						'flex-end'   => array(
							'title' => esc_html__( 'End', 'jet-form-builder' ),
							'icon'  => ! is_rtl() ? 'eicon-h-align-right' : 'eicon-h-align-left',
						),
					),
					'selectors' => array(
						$this->selector( '__submit' ) => 'justify-content: {{VALUE}};',
					),
				)
			);

			$this->end_controls_section();
		};
		$closure();

		/** Form Break Row */
		$closure = function () {

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
		};
		$closure();

		/** Form Break Buttons */
		$closure = function () {
			$this->start_controls_section(
				'section_form_break_next_style',
				array(
					'label' => __( 'Form Break Buttons', 'jet-form-builder' ),
					'tab'   => Controls_Manager::TAB_STYLE,
				)
			);

			$this->add_control(
				'form_break_next_button__error_heading',
				array(
					'label'     => __( 'Next Button', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'after',
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

			$this->start_controls_tabs( 'form_break_next_styles' );


			$this->start_controls_tab(
				'form_break_next--normal',
				array(
					'label' => __( 'Normal', 'jet-form-builder' ),
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

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'form_break_next_typography--hover',
					'selector' => $this->selector( '__next-page:hover' ),
				)
			);

			$this->add_border(
				$this,
				'form_break_next_border--hover',
				$this->selector( '__next-page:hover' )
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

			$this->add_control(
				'form_break_prev_button__error_heading',
				array(
					'label'     => __( 'Prev Button', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
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

			$this->start_controls_tabs( 'form_break_prev_styles' );

			$this->start_controls_tab(
				'form_break_prev--normal',
				array(
					'label' => __( 'Normal', 'jet-form-builder' ),
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

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'form_break_prev_typography--hover',
					'selector' => $this->selector( '__prev-page:hover' ),
				)
			);

			$this->add_border(
				$this,
				'form_break_prev_border--hover',
				$this->selector( '__prev-page:hover' )
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
		};
		$closure();

		/** Form Break Disabled Message */
		$closure = function () {
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
		};
		$closure();

		$this->run_form_progress_controls(
			$this,
			array( $this, 'selector' ),
			function ( $args ) {
				return $args;
			}
		);

		/** Messages */
		$closure = function () {
			$this->start_controls_section(
				'section_message_error_style',
				array(
					'label' => __( 'Messages', 'jet-form-builder' ),
					'tab'   => Controls_Manager::TAB_STYLE,
				)
			);

			$this->start_controls_tabs( 'section_messages_tabs' );

			$this->start_controls_tab( 'messages_success_tab', array(
				'label' => __( 'Success Message', 'jet-form-builder' ),
			) );

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

			$this->add_control(
				'form_messages__error_heading',
				array(
					'label'     => __( 'Success Message', 'jet-form-builder' ),
					'type'      => Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);

			$this->end_controls_tab();

			$this->start_controls_tab( 'messages_error_tab', array(
				'label' => __( 'Error Message', 'jet-form-builder' ),
			) );

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

			$this->end_controls_tab();
			$this->end_controls_tabs();
			$this->end_controls_section();
		};
		$closure();
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
<?php


namespace Jet_Form_Builder\Blocks\Modules;


trait General_Style_Functions {

	private $namespace = 'jet-form-builder';

	public function maybe_add_controls_type( $type ) {
		if ( ! in_array( $type, $this->general_style_unregister() ) ) {

			if ( is_callable( $this->general_controls_callbacks()[ $type ] ) ) {
				$this->general_controls_callbacks()[$type]();
			}
		}
	}

	public function additional_selectors_for_controls() {
		return array();
	}

	public function get_additional_styles( $id ) {
		$styles = $this->additional_selectors_for_controls();

		return isset( $styles[ $id ] ) ? $styles[ $id ] : array();
	}

	public function selector( $selector = '', $prefix_base = '', $additional = '' ) {
		$base = $prefix_base . ".$this->namespace";

		if ( $selector && isset( $this->css_scheme[ $selector ] ) ) {
			$selector = $this->css_scheme[ $selector ];
		}

		$result = "{{WRAPPER}} $base" . sprintf( $selector, $this->namespace );

		if ( $additional ) {
			$result .= $additional;
		}

		return $result;
	}

	public function selector_no_space( $selector = '' ) {
		return ( "{{WRAPPER}}" . sprintf( $selector, $this->namespace ) );
	}

	public function button_selector( $selector, $additional = '' ) {
		return $this->selector( $selector, 'button', $additional );
	}

	public function div_selector( $selector, $additional = '' ) {
		return $this->selector( $selector, 'div', $additional );
	}


	public function get_default_margin_control( $selector ) {
		return array(
			'type'         => 'dimensions',
			'label'        => __( 'Margin', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $selector => 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		);
	}

	public function get_default_padding_control( $selector ) {
		return array(
			'type'         => 'dimensions',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				$selector => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		);
	}

	public function add_margin_padding( $selector, $control_options ) {
		if ( isset( $control_options['margin'] ) ) {

			$options = $this->merge_controls_or_add_id(
				$this->get_default_margin_control( $selector ),
				$control_options['margin']
			);
			$this->controls_manager->add_control( $options );
		}

		if ( isset( $control_options['padding'] ) ) {

			$options = $this->merge_controls_or_add_id(
				$this->get_default_padding_control( $selector ),
				$control_options['padding']
			);
			$this->controls_manager->add_control( $options );
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

}
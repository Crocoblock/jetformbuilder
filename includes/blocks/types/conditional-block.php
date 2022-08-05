<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Manager;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Render\Conditional_Block_Render;
use Jet_Form_Builder\Form_Break;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Conditional_Block extends Base {

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'conditional-block';
	}

	public function get_label_selector() {
		return '__label';
	}

	public function get_required_selector() {
		return '__label-text .%1$s__required';
	}

	public function get_description_selector() {
		return '__desc';
	}

	protected function jsm_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'conditional_wrapper_section',
				'title' => __( 'Wrapper', 'jet-form-builder' ),
			)
		);
		$this->add_margin_padding(
			$this->selector( '__conditional' ),
			array(
				'padding' => array(
					'id'        => 'style_padding',
					'separator' => 'after',
				),
				'margin'  => array(
					'id'        => 'style_margin',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'style_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__conditional' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'style_bg_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__conditional' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	protected function render_field( array $attrs, $content = null, $wp_block = null ): string {
		if ( ! Live_Form::instance()->form_id ) {
			return '';
		}
		$this->set_block_data( $attrs, $content, $wp_block );

		$conditions = $this->get_conditions();
		$content    = $this->block_content;
		$name       = $this->block_attrs['name'] ?? '';

		if ( Live_Form::instance()->isset_form_break( $name ) ) {
			$break = Live_Form::instance()->get_form_break( $name );

			$content = $break->maybe_start_page( true ) . $content . $break->maybe_end_page( true );
		}

		return sprintf(
			'<div class="jet-form-builder__conditional" data-jfb-conditional="%2$s" data-jfb-func="show_dom">%1$s</div>',
			$content,
			$conditions
		);
	}

	/**
	 * @return string
	 * @throws Render_Empty_Field
	 */
	private function get_conditions(): string {
		$conditions = Condition_Manager::instance()->prepare(
			$this->block_attrs['conditions'] ?? array()
		);

		return htmlspecialchars( wp_json_encode( $conditions ) );
	}

	private function parse_condition( $condition, $index ) {
		$dynamic_value = ( new Dynamic_Preset() )->parse_value( $condition, 'value' );

		$this->block_attrs['conditions'][ $index ]['value']     = $this->parse_string_with_commas( $dynamic_value );
		$this->block_attrs['conditions'][ $index ]['set_value'] = ( new Dynamic_Preset() )->parse_value( $condition, 'set_value' );
	}

	private function parse_string_with_commas( $value ) {
		$value_in_array = explode( ',', $value );

		if ( 1 === count( $value_in_array ) ) {
			return $value;
		}

		return array_map( 'trim', $value_in_array );
	}


	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return '';
	}
}

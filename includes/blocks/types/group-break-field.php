<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Group_Break_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Group_Break_Field extends Base {


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'group-break-field';
	}

	public function general_style_manager_options() {
	}

	public function get_css_scheme() {
		return array(
			'field'       => '.jet-form-builder__group-break',
			'front-field' => '.jet-form-builder__field-wrap .jet-form-builder__group-break',
		);
	}


	protected function _jsm_register_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'break_style',
				'initialOpen' => true,
				'title'       => __( 'Group Break', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'break_height',
				'type'         => 'range',
				'label'        => __( 'Height', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 20,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['front-field']       => 'height: {{VALUE}}{{UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['field'] . ':before' => 'border-top-width: {{VALUE}}{{UNIT}};',

				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'break_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['front-field']       => 'background-color: {{VALUE}};',
					'{{WRAPPER}} ' . $this->css_scheme['field'] . ':before' => 'border-top-color: {{VALUE}}',
				),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#e3ddd8',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'break_gap_before',
				'type'         => 'range',
				'label'        => __( 'Gap Before', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 1,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field'] => 'margin-top: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'break_gap_after',
				'type'         => 'range',
				'label'        => __( 'Gap After', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 1,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['field'] => 'margin-bottom: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);

		$this->controls_manager->end_section();
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Group_Break_Field_Render( $this ) )->render();
	}

}

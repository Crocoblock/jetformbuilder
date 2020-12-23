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
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Group Break Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'group-break-field';
	}

	public function general_style_attributes() {
		return array();
	}

	public function general_style_manager_options() {
	}

	public function get_css_scheme() {
		return array(
			'field'       => '.jet-form-builder__group-break',
			'front-field' => '.jet-form-builder__field-wrap .jet-form-builder__group-break'
		);
	}

	public function get_style_attributes() {
		return array(
			'break_height'           => [
				'type' => 'object',
			],
			'break_background_color' => [
				'type' => 'object',
			],
			'break_gap_before'       => [
				'type' => 'object',
			],
			'break_gap_after'        => [
				'type' => 'object',
			],
		);
	}

	protected function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'          => 'break_style',
				'initialOpen' => true,
				'title'       => __( 'Group Break', 'jet-forms-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'break_height',
			'type'         => 'range',
			'label'        => __( 'Height', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 20,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['front-field']       => 'height: {{VALUE}}{{UNIT}};',
				'{{WRAPPER}} ' . $this->css_scheme['field'] . ':before' => 'border-top-width: {{VALUE}}{{UNIT}};',

			],
			'attributes'   => [
				'default' => array(
					'value' => 1
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'break_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Color', 'jet-form-builder' ),
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['front-field']       => 'background-color: {{VALUE}};',
				'{{WRAPPER}} ' . $this->css_scheme['field'] . ':before' => 'border-top-color: {{VALUE}}',
			],
			'separator'    => 'after',
			'attributes'   => array(
				'default' => array(
					'value' => '#e3ddd8'
				)
			)
		] );

		$this->controls_manager->add_control( [
			'id'           => 'break_gap_before',
			'type'         => 'range',
			'label'        => __( 'Gap Before', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 1,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field'] => 'margin-top: {{VALUE}}{{UNIT}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 1
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'break_gap_after',
			'type'         => 'range',
			'label'        => __( 'Gap After', 'jet-form-builder' ),
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 1,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['field'] => 'margin-bottom: {{VALUE}}{{UNIT}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 1
				),
			]
		] );

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


	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array();
	}

	/**
	 * Returns global attributes list
	 *
	 * @return array[]
	 */
	public function get_global_attributes() {
		return array(
			'add_prev'   => array(
				'type'     => 'boolean',
				'default'  => false,
				'advanced' => array(
					'type'  => 'toggle',
					'label' => __( 'Add Prev Page Button', 'jet-form-builder' )
				),
			),
			'prev_label' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'      => 'text',
					'label'     => __( 'Prev Page Button Label', 'jet-form-builder' ),
					'condition' => 'add_prev'
				),
			),
			'visibility' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'    => 'select',
					'label'   => __( 'Field Visibility', 'jet-form-builder' ),
					'options' => array(
						array(
							'value' => 'all',
							'label' => __( 'For all', 'jet-form-builder' ),
						),
						array(
							'value' => 'logged_id',
							'label' => __( 'Only for logged in users', 'jet-form-builder' ),
						),
						array(
							'value' => 'not_logged_in',
							'label' => __( 'Only for NOT-logged in users', 'jet-form-builder' ),
						),
					),
				),
			),
			'class_name' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'CSS Class Name', 'jet-form-builder' )
				),
			),
		);
	}


}

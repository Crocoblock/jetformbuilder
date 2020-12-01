<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Form_Messages_Builder;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form extends Base {

	public function __construct() {

		$this->unregister_attributes(
			array(
				'required',
				'label',
				'name',
				'desc',
				'default',
				'placeholder',
				'required',
				'add_prev',
				'prev_label',
				'visibility',
				'class_name',
			)
		);

		parent::__construct();
	}

	public function get_label_selector() {
		return '.jet-form-builder__label-text';
	}

	public function get_required_selector() {
		return '.jet-form-builder__label-text .jet-form-builder__required';
	}

	public function get_description_selector() {
		return '.jet-form-builder__desc';
	}

	public function get_css_scheme() {
		return array(
			'success' => '.jet-form-message--success',
			'error'   => '.jet-form-message--error',
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'success_style',
				'title' => __( 'Message Success', 'jet-forms-builder' )
			]
		);

		$this->add_margin_padding( $this->css_scheme['success'], array(
			'padding' => 'success_padding',
			'margin'  => 'success_margin'
		) );

		$this->controls_manager->add_control( [
			'id'           => 'success_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
			'options'      => [
				'left'   => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center' => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'right'  => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['success'] => 'text-align: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'left'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['success'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => [
				'default' => '',
			],
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['success'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => [
				'default' => '',
			],
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['success'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['success'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'error_style',
				'title' => __( 'Message Error', 'jet-forms-builder' )
			]
		);

		$this->add_margin_padding( $this->css_scheme['error'], array(
			'padding' => 'error_padding',
			'margin'  => 'error_margin'
		) );

		$this->controls_manager->add_control( [
			'id'           => 'error_alignment',
			'type'         => 'choose',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'separator'    => 'after',
			'options'      => [
				'left'   => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center' => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'right'  => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['error'] => 'text-align: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'left'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['error'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => [
				'default' => '',
			],
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['error'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => [
				'default' => '',
			],
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['error'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['error'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();

	}

	public function get_style_attributes() {
		return array(
			'success_padding'          => array(
				'type' => 'object'
			),
			'success_margin'           => array(
				'type' => 'object'
			),
			'success_alignment'        => array(
				'type' => 'object'
			),
			'success_typography'       => array(
				'type' => 'object'
			),
			'success_color'            => array(
				'type' => 'object'
			),
			'success_background_color' => array(
				'type' => 'object'
			),
			'success_border'           => array(
				'type' => 'object'
			),


			'error_padding'          => array(
				'type' => 'object'
			),
			'error_margin'           => array(
				'type' => 'object'
			),
			'error_typography'       => array(
				'type' => 'object'
			),
			'error_color'            => array(
				'type' => 'object'
			),
			'error_background_color' => array(
				'type' => 'object'
			),
			'error_alignment'        => array(
				'type' => 'object'
			),
			'error_border'           => array(
				'type' => 'object'
			),
		);
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Form';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-block';
	}

	public function get_storage_name() {
		return jet_form_builder()->blocks::OTHERS_STORAGE;
	}

	/**
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param array $attributes
	 *
	 * @return false
	 */
	public function get_block_renderer( $attributes = null ) {
		return false;
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'form_id' => array(
				'type'    => 'number',
				'default' => 0,
			),

			'submit_type' => array(
				'type'    => 'string',
				'default' => Plugin::instance()->post_type->get_default_arg__submit_type()
			),
			'required_mark' => array(
				'type'    => 'string',
				'default' => Plugin::instance()->post_type->get_default_arg__required_mark()
			),
			'fields_layout' => array(
				'type'    => 'string',
				'default' => Plugin::instance()->post_type->get_default_arg__fields_layout()
			),
		);
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'JetFormData', array(
			'forms_list' => Tools::get_forms_list_for_js()
		) );
	}

	/**
	 * Render callback for the block
	 *
	 * @param array $attrs [description]
	 *
	 * @param null $content
	 * @param null $wp_block
	 *
	 * @return false|string [type]             [description]
	 */
	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {

		$form_id = $attrs['form_id'];

		if ( ! $form_id ) {
			return 'Please select form to show';
		}

		$builder  = new Form_Builder( $form_id );
		$messages = jet_form_builder()->form_handler->get_message_builder( $form_id );

		ob_start();

		$builder->render_form();
		$messages->render_messages();

		if ( Tools::is_editor() ) {
			$messages->render_messages_samples();
		}

		return ob_get_clean();
	}

}

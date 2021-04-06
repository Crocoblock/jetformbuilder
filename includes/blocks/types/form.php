<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form extends Base {

	use Form_Break_Field_Style;

	public function get_label_selector() {
		return '__label';
	}

	public function get_required_selector() {
		return '__label-text .%1$s__required';
	}

	public function get_description_selector() {
		return '__desc';
	}

	public function general_style_unregister() {
		return array( 'input', 'wrap' );
	}

	public function get_css_scheme() {
		return array_merge(
			array(
				'success' => '-message--success',
				'error'   => '-message--error',
			),
			$this->form_break_css_scheme()
		);
	}

	public function _jsm_register_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'form_row_style',
				'title' => __( 'Form Row', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'form_row_gap_before',
			'type'         => 'range',
			'label'        => __( 'Gap Before', 'jet-form-builder' ),
			'separator'    => 'after',
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				$this->selector( '-row' ) => 'margin-top: {{VALUE}}{{UNIT}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 1
				),
			]
		] );
		$this->controls_manager->add_control( [
			'id'           => 'form_row_gap_after',
			'type'         => 'range',
			'label'        => __( 'Gap After', 'jet-form-builder' ),
			'units'        => [
				[
					'value'     => 'px',
					'intervals' => [
						'step' => 1,
						'min'  => 0,
						'max'  => 100,
					]
				],
			],
			'css_selector' => [
				$this->selector( '-row' ) => 'margin-bottom: {{VALUE}}{{UNIT}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 1
				),
			]
		] );

		$this->controls_manager->end_section();


		/**
		 * Form Break fields
		 */
		$this->form_break_styles();


		/**
		 * Response Success Message
		 */
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'success_style',
				'title' => __( 'Message Success', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding( $this->selector( 'success' ), array(
			'margin'  => array(
				'id'        => 'success_margin',
				'separator' => 'after',
			),
			'padding' => array(
				'id'        => 'success_padding',
				'separator' => 'after',
			)
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
				$this->selector( 'success' ) => 'text-align: {{VALUE}};',
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
				$this->selector( 'success' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => array(
				'default' => array(
					'value' => 'green'
				),
			),
			'css_selector' => array(
				$this->selector( 'success' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				$this->selector( 'success' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'success_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->selector( 'success' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();

		/**
		 * Response Error Message
		 */
		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'error_style',
				'title' => __( 'Message Error', 'jet-form-builder' )
			]
		);

		$this->add_margin_padding( $this->selector( 'error' ), array(
			'margin'  => array(
				'id'        => 'error_margin',
				'separator' => 'after',
			),
			'padding' => array(
				'id'        => 'error_padding',
				'separator' => 'after',
			)
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
				$this->selector( 'error' ) => 'text-align: {{VALUE}};',
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
				$this->selector( 'error' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => array(
				'default' => array(
					'value' => '#000000'
				),
			),
			'css_selector' => array(
				$this->selector( 'error' ) => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'attributes'   => array(
				'default' => array(
					'value' => '#FFFFFF'
				),
			),
			'css_selector' => array(
				$this->selector( 'error' ) => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'error_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				$this->selector( 'error' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->end_section();

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
	 * Returns current block render instatnce
	 *
	 * @param array $attributes
	 *
	 * @return false
	 */
	public function get_block_renderer( $attributes = null ) {
		return false;
	}


	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'JetFormData', array(
			'forms_list' => Tools::with_placeholder( Tools::get_forms_list_for_js() )
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

		$styles = $this->maybe_render_styles_block( $form_id );
		$custom_form = apply_filters( 'jet-form-builder/prevent-render-form', false, $attrs );

		if ( $custom_form ) {
			return ( $styles . $custom_form );
		}

		$builder  = new Form_Builder( $form_id, false, $attrs );
		$messages = jet_form_builder()->form_handler->get_message_builder( $form_id );

		Error_Handler::instance();

		ob_start();
		echo $styles;
		$builder->render_form();
		$messages->render_messages();

		if ( Tools::is_editor() ) {
			$messages->render_messages_samples();
		}

		return ob_get_clean();
	}

	private function maybe_render_styles_block( $form_id ) {
		if ( ! Jet_Style_Manager::is_activated() ) {
			return '';
		}
		$result = '<div id="jet-sm-gb-style--fb"><style>';
		$result .= Plugin::instance()->post_type->maybe_get_jet_sm_ready_styles( $form_id );

		return $result . '</style></div>';
	}

}

<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
use Jet_Form_Builder\Plugin;
use JET_SM\Gutenberg\Style_Manager;

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
			array(
				'id'    => 'form_row_style',
				'title' => __( 'Form Row', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'form_row_gap_before',
				'type'         => 'range',
				'label'        => __( 'Gap Before', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( '-row' ) => 'margin-top: {{VALUE}}{{UNIT}};',
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
				'id'           => 'form_row_gap_after',
				'type'         => 'range',
				'label'        => __( 'Gap After', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( '-row' ) => 'margin-bottom: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 1,
					),
				),
			)
		);

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
			array(
				'id'    => 'success_style',
				'title' => __( 'Message Success', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			$this->selector( 'success' ),
			array(
				'margin'  => array(
					'id'        => 'success_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'success_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'success_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'success' ) => 'text-align: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'left',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'success_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'success' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'success_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => 'green',
					),
				),
				'css_selector' => array(
					$this->selector( 'success' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'success_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'success' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'success_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'success' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->end_section();

		/**
		 * Response Error Message
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'error_style',
				'title' => __( 'Message Error', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			$this->selector( 'error' ),
			array(
				'margin'  => array(
					'id'        => 'error_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'error_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'error_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'left'   => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'right'  => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'error' ) => 'text-align: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'left',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'error_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'error' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'error_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#000000',
					),
				),
				'css_selector' => array(
					$this->selector( 'error' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'error_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'error' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'error_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'error' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

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
		wp_localize_script(
			$handle,
			'JetFormData',
			array(
				'forms_list' => Tools::with_placeholder( Tools::get_forms_list_for_js() ),
			)
		);
	}

	private function get_style_manager_html( $form_id ): string {
		return $this->maybe_render_styles_block( $form_id ) . $this->maybe_render_fonts_block( $form_id );
	}

	/**
	 * Render callback for the block
	 *
	 * @param array $attrs [description]
	 *
	 * @param null  $content
	 * @param null  $wp_block
	 *
	 * @return false|string [type]             [description]
	 */
	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
		$form_id = $attrs['form_id'];

		if ( ! $form_id ) {
			return 'Please select form to show';
		}

		Plugin::instance()->admin_bar->register_item(
			$form_id,
			array(
				'title'     => get_the_title( $form_id ),
				'sub_title' => __( 'JetForm', 'jet-form-builder' ),
				'href'      => get_edit_post_link( $form_id ),
			)
		);

		jet_form_builder()->msg_router->set_up( array(
			'form_id' => $form_id
		) );

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		$custom_form = apply_filters( 'jet-form-builder/prevent-render-form', false, $attrs );

		if ( $custom_form ) {
			return ( $this->get_style_manager_html( $form_id ) . $custom_form );
		}

		$builder = new Form_Builder( $form_id, false, $attrs );

		Error_Handler::instance();

		ob_start();
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $this->get_style_manager_html( $form_id );
		$builder->render_form();
		jet_form_builder()->msg_router->get_builder()->render_messages();

		if ( Tools::is_editor() ) {
			jet_form_builder()->msg_router->get_builder()->render_messages_samples();
		}

		return ob_get_clean();
	}

	private function maybe_render_styles_block( $form_id ) {
		if ( ! Jet_Style_Manager::is_activated() ) {
			return '';
		}
		$result  = '<div id="jet-sm-gb-style--fb"><style>';
		$result .= Plugin::instance()->post_type->maybe_get_jet_sm_ready_styles( $form_id );

		return $result . '</style></div>';
	}

	private function maybe_render_fonts_block( $form_id ) {
		if (
			! Jet_Style_Manager::is_activated()
			|| ! method_exists( Style_Manager::get_instance(), 'get_blocks_fonts' )
		) {
			return '';
		}
		$fonts = Style_Manager::get_instance()->get_blocks_fonts( $form_id );

		if ( $fonts ) {
			$fonts = trim( $fonts, '"' );
			$fonts = wp_unslash( $fonts );

			return wp_kses(
				$fonts,
				array(
					'link' => array(
						'href' => true,
						'rel'  => true,
					),
				)
			);
		}

		return '';
	}


}

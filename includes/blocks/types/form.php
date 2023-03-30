<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Manager;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Default_State;
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Post\Not_Found_Post_Exception;
use Jet_Form_Builder\Classes\Post\Post_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
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
		return sprintf(
			'<div class="jet-fb-form-block" data-is-block="jet-forms/%2$s">%1$s</div>',
			$this->render_form( $attrs, $content, $wp_block ),
			$this->get_name()
		);
	}

	public function get_placeholder(): string {
		return __( 'Please select form to show', 'jet-form-builder' );
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

	public function jsm_controls() {
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

	public function get_name() {
		return 'form-block';
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
		$options = Form_Arguments::get_options();

		wp_localize_script(
			$handle,
			'JetFormData',
			array_merge(
				array(
					'forms_list' => Tools::with_placeholder(
						Tools::get_forms_list_for_js(),
						$this->get_placeholder()
					),
				),
				$options
			)
		);
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
	public function render_form( array $attrs, $content = null, $wp_block = null ) {
		$form_id = absint( $attrs['form_id'] ?? 0 );

		if ( ! $form_id ) {
			return $this->get_placeholder();
		}

		try {
			$form = Post_Tools::get_post( $form_id );
		} catch ( Not_Found_Post_Exception $exception ) {
			return $this->get_placeholder();
		}

		Plugin::instance()->admin_bar->register_item(
			$form_id,
			array(
				'title'     => get_the_title( $form ),
				'sub_title' => __( 'JetForm', 'jet-form-builder' ),
				'href'      => get_edit_post_link( $form ),
			)
		);

		jet_form_builder()->msg_router->set_up(
			array(
				'form_id' => $form_id,
			)
		);

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		$custom_form = apply_filters( 'jet-form-builder/prevent-render-form', false, $attrs );

		if ( $custom_form ) {
			return $custom_form;
		}

		$form = ( new Form_Builder( $form_id, $attrs ) )->render_form();

		ob_start();
		jet_form_builder()->msg_router->get_builder()->render_messages();

		if ( Tools::is_editor() ) {
			jet_form_builder()->msg_router->get_builder()->render_messages_samples();
		}

		Render_State::instance()->clear_current();

		return ( $form . ob_get_clean() );
	}


}

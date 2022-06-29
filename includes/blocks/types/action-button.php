<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Action_Buttons_Manager;
use Jet_Form_Builder\Blocks\Button_Types\Button_Next;
use Jet_Form_Builder\Blocks\Button_Types\Button_Prev;
use Jet_Form_Builder\Blocks\Button_Types\Button_Submit;
use Jet_Form_Builder\Blocks\Button_Types\Button_Switch_State;
use Jet_Form_Builder\Blocks\Render\Action_Button_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Action_Button extends Base {

	use Action_Buttons_Manager;

	public function general_style_manager_options() {
	}

	public function register_block_type() {
		parent::register_block_type();

		$this->set_button_type( new Button_Submit() );
		$this->set_button_type( new Button_Prev() );
		$this->set_button_type( new Button_Next() );
		$this->set_button_type( new Button_Switch_State() );

		do_action( "jet-form-builder/{$this->get_name()}/on-register", $this );
	}

	public function get_css_scheme() {
		return array(
			'button' => '__submit',
			'wrap'   => '__submit-wrap',
		);
	}

	public function jsm_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'submit_wrap_style',
				'title' => __( 'Submit Wrap', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			$this->selector( '__submit-wrap' ),
			array(
				'padding' => array(
					'id' => 'submit_wrap_padding',
				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'submit_style',
				'title' => __( 'Action Button', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			$this->selector( '__action-button' ),
			array(
				'margin'  => array(
					'id'        => 'submit_margin',
					'separator' => 'after',
				),
				'padding' => array(
					'id'        => 'submit_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'button_width',
				'type'         => 'range',
				'separator'    => 'after',
				'label'        => __( 'Button Width', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => '%',
						'intervals' => array(
							'step' => 1,
							'min'  => 10,
							'max'  => 100,
						),
					),
				),
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'width: {{VALUE}}%; max-width: {{VALUE}}%',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 20,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_alignment',
				'type'         => 'choose',
				'separator'    => 'after',
				'label'        => __( 'Button Alignment', 'jet-form-builder' ),
				'options'      => array(
					'flex-start' => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center'     => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'flex-end'   => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( '__action-button-wrapper' ) => 'justify-content: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'flex-start',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_text_alignment',
				'type'         => 'choose',
				'separator'    => 'after',
				'label'        => __( 'Text Alignment', 'jet-form-builder' ),
				'options'      => array(
					'flex-start' => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignleft',
					),
					'center'     => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-aligncenter',
					),
					'flex-end'   => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon'     => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'justify-content: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'flex-start',
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			array(
				'id' => 'submit_style_tabs',
			)
		);

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'submit_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__action-button' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'submit_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( '__action-button' ) . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'submit_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__action-button' ) . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();

		$this->controls_manager->end_section();
	}


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'submit-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		wp_enqueue_script(
			'jet-form-builder-action-button',
			jet_form_builder()->plugin_url( 'assets/js/action.buttons.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		return ( new Action_Button_Render( $this ) )->render_without_layout();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'JetFormActionButton',
			apply_filters(
				"jet-form-builder/field-data/{$this->get_name()}",
				array( 'actions' => $this->get_button_types_for_js() )
			)
		);
	}

}

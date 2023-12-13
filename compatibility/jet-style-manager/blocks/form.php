<?php


namespace JFB_Compatibility\Jet_Style_Manager\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Manager;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Interfaces\Style_Block_It;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Traits\Style_Block_Trait;
use JFB_Compatibility\Jet_Style_Manager\Jet_Style_Manager;

class Form implements Style_Block_It {

	use Style_Block_Trait;

	public function __construct() {
		$this->set_css_scheme(
			array(
				'success' => '-message--success',
				'error'   => '-message--error',
			)
		);
	}

	public function rep_item_id() {
		return Form_Manager::NAMESPACE_FIELDS . 'form-block';
	}

	/**
	 * @throws Repository_Exception
	 */
	public function process_controls() {
		/** @var Jet_Style_Manager $module */
		$module = jet_form_builder()->compat( 'jet-style-manager' );

		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'form_row_style',
				'title' => __( 'Form Row', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
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
		$this->get_manager()->add_control(
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

		$this->get_manager()->end_section();

		$form_break = new Form_Break();
		$form_break->set_manager( $this->get_manager() );

		$form_break->process_controls();

		/**
		 * Response Success Message
		 */
		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'success_style',
				'title' => __( 'Message Success', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( 'success' ),
				array(
					'id'        => 'success_margin',
					'separator' => 'after',
				)
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'success' ),
				array(
					'id'        => 'success_padding',
					'separator' => 'after',
				)
			)
		);

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'success' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
			array(
				'id'           => 'success_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'success' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->end_section();

		/**
		 * Response Error Message
		 */
		$this->get_manager()->start_section(
			'style_controls',
			array(
				'id'    => 'error_style',
				'title' => __( 'Message Error', 'jet-form-builder' ),
			)
		);

		$this->get_manager()->add_control(
			$module->create_margin(
				$this->selector( 'error' ),
				array(
					'id'        => 'error_margin',
					'separator' => 'after',
				)
			)
		);

		$this->get_manager()->add_control(
			$module->create_padding(
				$this->selector( 'error' ),
				array(
					'id'        => 'error_padding',
					'separator' => 'after',
				)
			)
		);

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'error' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',

				),
			)
		);

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
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

		$this->get_manager()->add_control(
			array(
				'id'           => 'error_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'error' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->get_manager()->end_section();
	}
}

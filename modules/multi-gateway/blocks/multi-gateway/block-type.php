<?php

namespace JFB_Modules\Multi_Gateway\Blocks\Multi_Gateway;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Native_Block_Wrapper_Attributes;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Wysiwyg\Module;

class Block_Type extends Base implements Native_Block_Wrapper_Attributes {

	public function get_name() {
		return 'multi-gateway';
	}

	public function get_block_renderer( $wp_block = null ) {
		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'multi-gateway' );

		return $module->get_dir( 'blocks/multi-gateway' );
	}

	public function get_field_template( $path ) {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'multi-gateway' );

		return $module->get_dir( 'blocks/multi-gateway/block-template.php' );
	}

	public function get_css_scheme() {
		return array(
			'container'        => '.jfb-multi-gateway',

			// Heading (block title/desc at the top)
			'title'            => '.jfb-multi-gateway__title',
			'desc'             => '.jfb-multi-gateway__desc',

			'empty'            => '.jfb-multi-gateway__empty',
			'list'             => '.jfb-multi-gateway__list',
			'item'             => '.jfb-multi-gateway__item',
			'item_hover'       => '.jfb-multi-gateway__item:hover',
			'item_input'       => '.jfb-multi-gateway__item .jet-form-builder__field',
			'item_content'     => '.jfb-multi-gateway__content',
			'item_title'       => '.jfb-multi-gateway__label',
			'item_desc'        => '.jfb-multi-gateway__description',
			'item_title_hover' => '.jfb-multi-gateway__item:hover .jfb-multi-gateway__label',
			'item_desc_hover'  => '.jfb-multi-gateway__item:hover .jfb-multi-gateway__description',
		);
	}

	public function general_style_unregister() {
		return array( 'wrap', 'input', 'label', 'required', 'description' );
	}

	public function jsm_controls() {

		/**
		 * Wrapper (block container)
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_wrapper',
				'title' => __( 'Wrapper', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			'{{WRAPPER}} ' . $this->css_scheme['container'],
			array(
				'padding' => array(
					'id'        => 'mg_wrapper_padding',
					'separator' => 'after',
				),
			),
			array( 'padding' )
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_wrapper_bg',
				'type'         => 'color-picker',
				'label'        => __( 'Background', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['container'] => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_wrapper_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['container'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => array(
							'borderStyle' => 'solid',
						),
					),
				),
			)
		);

		$this->controls_manager->end_section();

		/**
		 * Heading (top title + description)
		 * NOTE: attributes title/description already exist — we only style them here.
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_heading',
				'title' => __( 'Heading', 'jet-form-builder' ),
			)
		);

		// Title color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_heading_title_color',
				'type'         => 'color-picker',
				'label'        => __( 'Title Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['title'] => 'color: {{VALUE}};',
				),
			)
		);

		// Title typography
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_heading_title_typography',
				'type'         => 'typography',
				'label'        => __( 'Title Typography', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['title'] =>
						'font-family: {{FAMILY}};'
						. ' font-weight: {{WEIGHT}};'
						. ' text-transform: {{TRANSFORM}};'
						. ' font-style: {{STYLE}};'
						. ' text-decoration: {{DECORATION}};'
						. ' line-height: {{LINEHEIGHT}}{{LH_UNIT}};'
						. ' letter-spacing: {{LETTERSPACING}}{{LS_UNIT}};'
						. ' font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		// Description color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_heading_desc_color',
				'type'         => 'color-picker',
				'label'        => __( 'Description Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['desc'] => 'color: {{VALUE}};',
				),
			)
		);

		// Description typography
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_heading_desc_typography',
				'type'         => 'typography',
				'label'        => __( 'Description Typography', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['desc'] =>
						'font-family: {{FAMILY}};'
						. ' font-weight: {{WEIGHT}};'
						. ' text-transform: {{TRANSFORM}};'
						. ' font-style: {{STYLE}};'
						. ' text-decoration: {{DECORATION}};'
						. ' line-height: {{LINEHEIGHT}}{{LH_UNIT}};'
						. ' letter-spacing: {{LETTERSPACING}}{{LS_UNIT}};'
						. ' font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->end_section();

		/**
		 * List layout (direction / gap)
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_list_layout',
				'title' => __( 'List Layout', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'      => 'mg_list_direction',
				'type'    => 'choose',
				'label'   => __( 'Direction', 'jet-form-builder' ),
				'options' => array(
					'column' => array(
						'label' => __( 'Vertical', 'jet-form-builder' ),
					),
					'row'    => array(
						'label' => __( 'Horizontal', 'jet-form-builder' ),
					),
				),
				'default'      => 'column',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['list'] => 'display:flex;flex-direction: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_list_gap',
				'type'         => 'range',
				'label'        => __( 'Gap', 'jet-form-builder' ),
				'units'        => array( 'px' ),
				'default'      => array(
					'value' => 10,
					'unit'  => 'px',
				),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['list'] => 'gap: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->controls_manager->end_section();

		/**
		 * Item (background, border, radius, padding + hover bg/border)
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_item',
				'title' => __( 'Item', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_item_bg',
				'type'         => 'color-picker',
				'label'        => __( 'Background', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_item_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => array(
							'borderStyle' => 'solid',
						),
					),
				),
			)
		);

		$this->add_margin_padding(
			'{{WRAPPER}} ' . $this->css_scheme['item'],
			array(
				'padding' => array(
					'id'        => 'mg_item_padding',
					'separator' => 'after',
				),
			),
			array( 'padding' )
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_item_hover_bg',
				'type'         => 'color-picker',
				'label'        => __( 'Hover Background', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_hover'] => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_item_hover_border_color',
				'type'         => 'color-picker',
				'label'        => __( 'Hover Border Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_hover'] => 'border-color: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->end_section();

		/**
		 * Label / Description (colors + typography + hover colors)
		 */
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_text',
				'title' => __( 'Label & Description', 'jet-form-builder' ),
			)
		);

		// Label color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_label_color',
				'type'         => 'color-picker',
				'label'        => __( 'Label Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_title'] => 'color: {{VALUE}};',
				),
			)
		);

		// Label typography
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_label_typography',
				'type'         => 'typography',
				'label'        => __( 'Label Typography', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_title'] =>
						'font-family: {{FAMILY}};'
						. ' font-weight: {{WEIGHT}};'
						. ' text-transform: {{TRANSFORM}};'
						. ' font-style: {{STYLE}};'
						. ' text-decoration: {{DECORATION}};'
						. ' line-height: {{LINEHEIGHT}}{{LH_UNIT}};'
						. ' letter-spacing: {{LETTERSPACING}}{{LS_UNIT}};'
						. ' font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		// Label hover color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_label_hover_color',
				'type'         => 'color-picker',
				'label'        => __( 'Label Hover Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_title_hover'] => 'color: {{VALUE}};',
				),
			)
		);

		// Description color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_desc_color',
				'type'         => 'color-picker',
				'label'        => __( 'Description Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_desc'] => 'color: {{VALUE}};',
				),
			)
		);

		// Description typography
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_desc_typography',
				'type'         => 'typography',
				'label'        => __( 'Description Typography', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_desc'] =>
						'font-family: {{FAMILY}};'
						. ' font-weight: {{WEIGHT}};'
						. ' text-transform: {{TRANSFORM}};'
						. ' font-style: {{STYLE}};'
						. ' text-decoration: {{DECORATION}};'
						. ' line-height: {{LINEHEIGHT}}{{LH_UNIT}};'
						. ' letter-spacing: {{LETTERSPACING}}{{LS_UNIT}};'
						. ' font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		// Description hover color
		$this->controls_manager->add_control(
			array(
				'id'           => 'mg_desc_hover_color',
				'type'         => 'color-picker',
				'label'        => __( 'Description Hover Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['item_desc_hover'] => 'color: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->end_section();
	}

}

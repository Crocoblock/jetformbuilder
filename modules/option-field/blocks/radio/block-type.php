<?php

namespace JFB_Modules\Option_Field\Blocks\Radio;

use Jet_Form_Builder\Blocks\Native_Block_Wrapper_Attributes;
use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;
use JFB_Modules\Option_Field\Traits\Support_Option_Query_Trait;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Option_Field\Blocks\Checkbox;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Block_Type extends Base implements Native_Block_Wrapper_Attributes, Support_Option_Query_It {

	use Support_Option_Query_Trait;

	const HANDLE = 'jet-fb-radio-field';

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'radio-field';
	}

	public function get_css_scheme() {
		return array(
			// Active
			'item'         => '.components-radio-control__option',
			// Active
			'option-label' => '.components-radio-control__option label',
			'front-label'  => '.jet-form-builder__field-wrap label',
			'front-wrap'   => '.jet-form-builder__field-wrap.checkradio-wrap',

			'radio'        => '.components-radio-control__option input',

			// Active
			'field'        => '.components-base-control__field',
			'list-wrapper' => '.jet-form-builder__fields-group',
		);
	}

	public function jsm_controls() {
		$wrapper_selector = (
			'{{WRAPPER}} ' . $this->css_scheme['list-wrapper'] . ', {{WRAPPER}} ' . $this->css_scheme['list-wrapper'] . ' .components-flex'
		);

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'          => 'items_style',
				'initialOpen' => true,
				'title'       => __( 'Items', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'filters_position',
				'type'         => 'choose',
				'label'        => __( 'Options Position', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => array(
					'column'        => array(
						'shortcut' => __( 'Column', 'jet-form-builder' ),
						'icon'     => 'dashicons-menu-alt',
					),
					'row' => array(
						'shortcut' => __( 'Line', 'jet-form-builder' ),
						'icon'     => 'dashicons-ellipsis',
					),
				),
				'css_selector' => array(
					$wrapper_selector => 'flex-direction: {{VALUE}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 'column',
					),
				),
			)
		);

		$alignment_options = array(
			'flex-start'   => array(
				'shortcut' => __( 'Start', 'jet-form-builder' ),
				'icon'     => 'dashicons-editor-align' . ( is_rtl() ? 'right' : 'left' ),
			),
			'center' => array(
				'shortcut' => __( 'Center', 'jet-form-builder' ),
				'icon'     => 'dashicons-editor-aligncenter',
			),
			'flex-end'  => array(
				'shortcut' => __( 'End', 'jet-form-builder' ),
				'icon'     => 'dashicons-editor-align' . ( is_rtl() ? 'left' : 'right' ),
			),
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_alignment',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => $alignment_options,
				'css_selector' => array(
					$wrapper_selector => 'align-items: {{VALUE}};',
				),
				'condition' => array(
					'filters_position' => 'column',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_alignment_row',
				'type'         => 'choose',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
				'separator'    => 'after',
				'options'      => $alignment_options,
				'css_selector' => array(
					$wrapper_selector => 'justify-content: {{VALUE}};',
				),
				'condition' => array(
					'filters_position' => 'row',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'items_space_between',
				'type'         => 'range',
				'label'        => __( 'Space Between', 'jet-form-builder' ),
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 50,
						),
					),
				),
				'css_selector' => array(
					$wrapper_selector => 'gap: {{VALUE}}{{UNIT}};',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 10,
					),
				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'item_style',
				'title' => __( 'Item', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['front-label']  => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['option-label'] => 'color: {{VALUE}}',
					'{{WRAPPER}} ' . $this->css_scheme['front-label']  => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'    => 'item_normal_background_color',
				'type'  => 'color-picker',
				'label' => __( 'Background', 'jet-form-builder' ),

				'css_selector' => array(
					// editor
					'{{WRAPPER}} ' . $this->css_scheme['option-label']            => 'background-color: {{VALUE}}',
					// front
					'{{WRAPPER}} ' . $this->css_scheme['front-label'] . ' > span' => 'background-color: {{VALUE}}',

				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'radio_style',
				'title' => __( 'Radio', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'show_decorator',
				'type'         => 'toggle',
				'separator'    => 'after',
				'label'        => __( 'Show Radio', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => true,
					),
				),
				'unit'         => 'px',
				'return_value' => array(
					'true'  => 'inline-block',
					'false' => 'none',
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['radio']          => 'display: {{VALUE}};',
					'{{WRAPPER}} ' . $this->css_scheme['item'] . ' span' => 'display: {{VALUE}};',

					'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ' span::before' => 'display: {{VALUE}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_size_decorator',
				'type'         => 'range',
				'label'        => __( 'Size Radio', 'jet-form-builder' ),
				'separator'    => 'after',
				'units'        => array(
					array(
						'value'     => 'px',
						'intervals' => array(
							'step' => 1,
							'min'  => 0,
							'max'  => 50,
						),
					),
				),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['front-wrap'] . ' span::before' => 'font-size: {{VALUE}}{{UNIT}};',
					'{{WRAPPER}} ' . $this->css_scheme['item'] . ' input'              => 'height: {{VALUE}}{{UNIT}}; width: {{VALUE}}{{UNIT}}; min-width: {{VALUE}}{{UNIT}};',
				),
			)
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			array(
				'id' => 'radio_style_tabs',
			)
		);

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'radio_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'radio_normal_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['radio']                           => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['front-label'] . '.jet-form-builder__field-label > span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'radio_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					// editor
					'{{WRAPPER}} ' . $this->css_scheme['radio']                           => 'background-color: {{VALUE}}',
					// front
					'{{WRAPPER}} ' . $this->css_scheme['front-label'] . '.jet-form-builder__field-label > span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'item_checked_styles',
				'title' => __( 'Checked', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'radio_checked_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['radio'] . ':checked'                       => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} ' . $this->css_scheme['front-label'] . '.jet-form-builder__field-label :checked + span::before' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'radio_checked_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#398ffc',
					),
				),
				'css_selector' => array(
					// editor
					'{{WRAPPER}} ' . $this->css_scheme['radio'] . ':checked'                       => 'background-color: {{VALUE}}',
					// front
					'{{WRAPPER}} ' . $this->css_scheme['front-label'] . '.jet-form-builder__field-label :checked + span::before' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var \JFB_Modules\Option_Field\Module $module */
		$module = jet_form_builder()->module( 'option-field' );

		return $module->get_dir( 'shared/blocks/radio' );
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		wp_enqueue_script( self::HANDLE );

		if ( ! empty( $this->block_attrs['custom_option'] ) ) {
			wp_enqueue_script( Checkbox\Block_Type::HANDLE_CUSTOM );
		}

		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * Used by old versions of the Select Autocomplete addon
	 *
	 * @return array
	 * @deprecated 3.3.1
	 */
	public function get_field_options() {
		try {
			return iterator_to_array( $this->get_query()->fetch() );
		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}

}

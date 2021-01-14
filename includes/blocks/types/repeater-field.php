<?php

namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Blocks\Render\Repeater_Field_Render;
use Jet_Form_Builder\Presets\Form_Base_Preset;
use Jet_Form_Builder\Presets\Preset_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Repeater_Field extends Base {

	use General_Style;

	public $manage_items;
	public $items_field;
	public $repeater_calc_type;
	public $new_item_label;
	public $settings;
	public $default_value;

	public $calc_data = array();
	public $calc_dataset = '';

	public function __construct() {
		$this->unregister_attribute( 'placeholder' );

		parent::__construct();
	}

	/**
	 * Returns block title
	 *
	 * @return string [type] [description]
	 */
	public function get_title() {
		return 'Repeater Field';
	}

	/**
	 * Returns block name
	 *
	 * @return string [type] [description]
	 */
	public function get_name() {
		return 'repeater-field';
	}

	public function get_css_scheme() {
		return array(
			'repeater-row-editor' => '.block-editor-inner-blocks',
			'repeater-row'        => '.jet-form-builder-repeater__row',
			'remove-button'       => 'button.jet-form-builder-repeater__remove',
			'new-button'          => 'button.jet-form-builder-repeater__new',
			'actions'             => '.jet-form-builder-repeater__actions'
		);
	}

	public function add_style_manager_options() {

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'field_style',
				'title' => __( 'Repeater Row', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'repeater_row_padding',
			'type'         => 'dimensions',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['repeater-row']        => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				'{{WRAPPER}} ' . $this->css_scheme['repeater-row-editor'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
			),
		] );


		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'new_button_style',
				'title' => __( 'New Item Button', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'new_button_alignment',
			'type'         => 'choose',
			'separator'    => 'after',
			'label'        => __( 'Alignment', 'jet-form-builder' ),
			'options'      => [
				'flex-start' => [
					'shortcut' => __( 'Left', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignleft',
				],
				'center'     => [
					'shortcut' => __( 'Center', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-aligncenter',
				],
				'flex-end'   => [
					'shortcut' => __( 'Right', 'jet-form-builder' ),
					'icon'     => 'dashicons-editor-alignright',
				],
			],
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['actions'] => 'justify-content: {{VALUE}};',
			],
			'attributes'   => [
				'default' => array(
					'value' => 'left'
				),
			]
		] );

		$this->controls_manager->add_control( [
			'id'           => 'new_button_typography',
			'type'         => 'typography',
			'separator'    => 'after',
			'css_selector' => [
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'new_button_padding',
			'type'         => 'dimensions',
			'separator'    => 'after',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'new_button_border',
			'type'         => 'border',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'new_button_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'new_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'new_button_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'new_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'new_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'new_button_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'new_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['new-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			[
				'id'    => 'remove_button_style',
				'title' => __( 'Remove Item Button', 'jet-form-builder' )
			]
		);

		$this->controls_manager->add_control( [
			'id'                 => 'remove_button_typography',
			'type'               => 'typography',
			'disable_decoration' => true,
			'separator'          => 'after',
			'css_selector'       => [
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
			],
		] );

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_padding',
			'type'         => 'dimensions',
			'separator'    => 'after',
			'label'        => __( 'Padding', 'jet-form-builder' ),
			'units'        => array( 'px', '%' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_border',
			'type'         => 'border',
			'separator'    => 'after',
			'label'        => __( 'Border', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
			),
		] );

		$this->controls_manager->start_tabs(
			'style_controls',
			[
				'id' => 'remove_button_style_tabs',
			]
		);

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'remove_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			[
				'id'    => 'remove_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			]
		);

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_hover_typography_color',
			'type'         => 'color-picker',
			'label'        => __( 'Text Color', 'jet-form-builder' ),
			'separator'    => 'after',
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
			),
		] );

		$this->controls_manager->add_control( [
			'id'           => 'remove_button_hover_background_color',
			'type'         => 'color-picker',
			'label'        => __( 'Background Color', 'jet-form-builder' ),
			'css_selector' => array(
				'{{WRAPPER}} ' . $this->css_scheme['remove-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
			),
		] );

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();
	}

	public function get_style_attributes() {
		return array(
			'repeater_row_padding'           => array(
				'type' => 'object',
			),
			'new_button_typography'          => array(
				'type' => 'object',
			),
			'new_button_typography_color'    => array(
				'type' => 'object',
			),
			'new_button_background_color'    => array(
				'type' => 'object',
			),
			'new_button_border'              => array(
				'type' => 'object',
			),
			'new_button_alignment'           => array(
				'type' => 'object',
			),
			'remove_button_typography'       => array(
				'type' => 'object',
			),
			'remove_button_typography_color' => array(
				'type' => 'object',
			),
			'remove_button_background_color' => array(
				'type' => 'object',
			),
			'remove_button_border'           => array(
				'type' => 'object',
			),
		);
	}

	/**
	 * Returns current block render
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$this->set_manage_items();
		$this->set_items_field();
		$this->set_repeater_calc_type();
		$this->set_new_repeater_label();
		$this->set_settings();
		$this->set_default_value();
		$this->set_calc_data();
		$this->set_calc_dataset();

		return ( new Repeater_Field_Render( $this ) )->render( $wp_block );
	}

	public function set_manage_items() {
		$this->manage_items = ! empty( $this->block_attrs['manage_items_count'] ) ? $this->block_attrs['manage_items_count'] : 'manually';
	}

	public function set_items_field() {
		$this->items_field = ! empty( $this->block_attrs['manage_items_count_field'] ) ? $this->block_attrs['manage_items_count_field'] : false;
	}

	public function set_repeater_calc_type() {
		$this->repeater_calc_type = ! empty( $this->block_attrs['repeater_calc_type'] ) ? $this->block_attrs['repeater_calc_type'] : 'default';
	}

	public function set_new_repeater_label() {
		$this->new_item_label = ! empty( $this->block_attrs['new_item_label'] ) ? $this->block_attrs['new_item_label'] : __( 'Add new', 'jet-engine' );
	}

	public function set_settings() {
		$this->settings = htmlspecialchars( json_encode( array(
			'manageItems' => $this->manage_items,
			'itemsField'  => $this->items_field,
			'calcType'    => $this->repeater_calc_type,
		) ) );
	}

	public function set_default_value() {
		$preset_value = Preset_Manager::instance()->get_field_value( $this->block_attrs );

		if ( $preset_value['rewrite'] ) {
			$args['default'] = $preset_value['value'];
		} else {
			$args['default'] = Preset_Manager::instance()->maybe_adjust_value( $this->block_attrs );
		}

		$this->default_value = array_merge( $this->block_attrs, $args );
	}

	public function set_calc_data() {
		if ( 'custom' === $this->repeater_calc_type ) {
			$this->calc_data = $this->get_calculated_data();
		}
	}

	public function set_calc_dataset() {
		if ( ! $this->calc_data ) {
			return;
		}

		foreach ( $this->calc_data as $data_key => $data_value ) {

			if ( is_array( $data_value ) ) {
				$data_value = json_encode( $data_value );
			}
			$this->calc_dataset .= sprintf( ' data-%1$s="%2$s"', $data_key, htmlspecialchars( $data_value ) );
		}
	}

	/**
	 * Get calulation formula for calculated field
	 *
	 * @return [type] [description]
	 */
	public function get_calculated_data() {

		if ( empty( $this->block_attrs['calc_formula'] ) ) {
			return '';
		}

		$listen_fields = array();

		$formula = preg_replace_callback(
			'/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/',
			function ( $matches ) use ( &$listen_fields ) {

				switch ( strtolower( $matches[1] ) ) {
					case 'field':

						$listen_fields[] = $matches[2];

						return '%' . $matches[2] . '%';

					case 'meta':

						return get_post_meta( $this->post->ID, $matches[2], true );

					default:
						$macros_name = $matches[1];
						$field_key   = isset( $matches[2] ) ? $matches[2] : '';

						if ( $field_key ) {
							$listen_fields[] = $field_key;
						}

						return apply_filters( "jet-form-builder/calculated-data/$macros_name", $matches[0], $matches );
				}

			},
			$this->block_attrs['calc_formula']
		);

		return array(
			'formula'       => $formula,
			'listen_fields' => $listen_fields,
			'listen_to'     => $listen_fields,
		);
	}


	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetRepeaterFieldData', array(
			'manage_items_count' => array(
				array(
					'value' => 'manually',
					'label' => __( 'Manually', 'jet-form-builder' )
				),
				array(
					'value' => 'dynamically',
					'label' => __( 'Dynamically (get count from form field)', 'jet-form-builder' )
				),
			),
			'repeater_calc_type' => array(
				array(
					'value' => 'default',
					'label' => __( 'Default (returns rows count)', 'jet-form-builder' )
				),
				array(
					'value' => 'custom',
					'label' => __( 'Custom (calculate custom value for each row)', 'jet-form-builder' )
				),
			),
			'help_messages'      => array(
				'calc_hidden' => __(
					'Check this to hide calculated field',
					'jet-form-builder'
				),
			),
		) );
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'calc_formula'             => array(
				'type'    => 'string',
				'default' => ''
			),
			'manage_items_count'       => array(
				'type'    => 'string',
				'default' => 'manually'
			),
			'new_item_label'           => array(
				'type'    => 'string',
				'default' => ''
			),
			'manage_items_count_field' => array(
				'type'    => 'string',
				'default' => ''
			),
			'repeater_calc_type'       => array(
				'type'    => 'string',
				'default' => 'default'
			),
		);
	}

}

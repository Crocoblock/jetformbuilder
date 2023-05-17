<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Native_Block_Wrapper_Attributes;
use Jet_Form_Builder\Blocks\Render\Select_Field_Render;
use JFB_Modules\Switch_Page_On_Change;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Select_Field extends Base implements Native_Block_Wrapper_Attributes {

	use Base_Select_Radio_Check;


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'select-field';
	}

	public function get_css_scheme() {
		return array(
			'select'         => '.jet-form-builder__field-wrap select',
			'list-wrapper'   => '.jet-form-builder__fields-group',
			'select-wrapper' => '.jet-form-builder__field-wrap',
		);
	}

	public function jsm_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'select_style',
				'title' => __( 'Select', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'select_width',
				'type'         => 'range',
				'separator'    => 'after',
				'label'        => __( 'Select Width', 'jet-form-builder' ),
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
					'{{WRAPPER}} ' . $this->css_scheme['select-wrapper'] => 'width: {{VALUE}}%; max-width: {{VALUE}}%',
				),
				'attributes'   => array(
					'default' => array(
						'value' => 50,
					),
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_padding',
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['select']                                                                                                             => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
					'{{WRAPPER}} .jet-form-builder__field-wrap div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop' => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'                  => 'item_typography',
				'type'                => 'typography',
				'separator'           => 'after',
				'disable_line_height' => true,
				'css_selector'        => array(
					'{{WRAPPER}} ' . $this->css_scheme['select']         => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
					// for editor
					'{{WRAPPER}} .components-base-control__field select' => 'min-height: 2em;',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['select']                                                                                                             => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
					'{{WRAPPER}} .jet-form-builder__field-wrap div.components-input-control__backdrop.components-input-control__backdrop.components-input-control__backdrop' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
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
					'{{WRAPPER}} ' . $this->css_scheme['select'] => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['select'] => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		if ( $this->is_multiple() ) {
			$this->set_attribute( Switch_Page_On_Change\Module::ATTRIBUTE_NAME, false );
		}
	}

	public function get_field_name( $name = '' ) {
		return $this->is_multiple()
			? ( parent::get_field_name( $name ) . '[]' )
			: parent::get_field_name( $name );
	}

	public function is_multiple(): bool {
		return $this->block_attrs['multiple'] ?? false;
	}

	public function get_multiple_size(): int {
		return $this->block_attrs['multiple_size'] ?? 0;
	}

	public function expected_preset_type(): array {
		if ( ! $this->is_multiple() ) {
			return parent::expected_preset_type();
		}

		return array( self::PRESET_ARRAY );
	}

	public function prepare_option( array $option ): array {
		return $this->is_multiple()
			? $this->prepare_option_from_array( $option )
			: $this->prepare_option_from_single( $option );
	}

	private function prepare_option_from_array( array $option ): array {
		$value = $this->block_attrs['default'];

		if ( ! is_array( $value ) ) {
			return $option;
		}

		if ( in_array( (string) $option['value'], $value, true ) ) {
			$option['selected'] = true;
		}

		return $option;
	}

	private function prepare_option_from_single( array $option ): array {
		if ( (string) $option['value'] === (string) $this->block_attrs['default'] ) {
			$option['selected'] = true;
		}

		return $option;
	}

	/**
	 * Returns current block render
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Select_Field_Render( $this ) )->render();
	}

	/**
	 * Register blocks specific JS variables
	 *
	 * @param  [type] $editor [description]
	 * @param  [type] $handle [description]
	 *
	 * @return [type]         [description]
	 */
	public function block_data( $editor, $handle ) {

		wp_localize_script(
			$handle,
			'JetFormSelectFieldData',
			$this->get_local_data_check_radio_select()
		);
	}

}

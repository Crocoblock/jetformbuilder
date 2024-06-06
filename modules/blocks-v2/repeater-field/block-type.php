<?php

namespace JFB_Modules\Blocks_V2\Repeater_Field;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Blocks_V2\Interfaces\Block_Type_With_Assets_Interface;
use JFB_Modules\Blocks_V2\Module;
use JFB_Modules\Blocks_V2\Traits\Block_Type_With_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	const HANDLE               = Block_Asset::HANDLE;
	const CONTEXT_NAME         = 'jet-forms/repeater-field--name';
	const CONTEXT_MANAGE_ITEMS = 'jet-forms/repeater-field--manage-items';

	public $manage_items;
	public $items_field = '';
	public $calc_type;
	public $new_item_label;
	public $default_value;

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
			'actions'             => '.jet-form-builder-repeater__actions',
		);
	}

	public function jsm_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'field_style',
				'title' => __( 'Repeater Row', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'repeater_row_padding',
				'type'         => 'dimensions',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['repeater-row']        => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
					'{{WRAPPER}} ' . $this->css_scheme['repeater-row-editor'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};',
				),
			)
		);

		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'new_button_style',
				'title' => __( 'New Item Button', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_alignment',
				'type'         => 'choose',
				'separator'    => 'after',
				'label'        => __( 'Alignment', 'jet-form-builder' ),
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
					'{{WRAPPER}} ' . $this->css_scheme['actions'] => 'justify-content: {{VALUE}};',
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
				'id'           => 'new_button_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_padding',
				'type'         => 'dimensions',
				'separator'    => 'after',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_border',
				'type'         => 'border',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			array(
				'id' => 'new_button_style_tabs',
			)
		);

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'new_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'new_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'new_button_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['new-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'remove_button_style',
				'title' => __( 'Remove Item Button', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'                 => 'remove_button_typography',
				'type'               => 'typography',
				'disable_decoration' => true,
				'separator'          => 'after',
				'css_selector'       => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_padding',
				'type'         => 'dimensions',
				'separator'    => 'after',
				'label'        => __( 'Padding', 'jet-form-builder' ),
				'units'        => array( 'px', '%' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}}; height: unset;',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->start_tabs(
			'style_controls',
			array(
				'id' => 'remove_button_style_tabs',
			)
		);

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'remove_button_normal_styles',
				'title' => __( 'Normal', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();

		$this->controls_manager->start_tab(
			'style_controls',
			array(
				'id'    => 'remove_button_hover_styles',
				'title' => __( 'Hover', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_hover_typography_color',
				'type'         => 'color-picker',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'separator'    => 'after',
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] . ':hover:not(:disabled)' => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'remove_button_hover_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					'{{WRAPPER}} ' . $this->css_scheme['remove-button'] . ':hover:not(:disabled)' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_tab();
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();
	}

	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		parent::register_block();
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_EXACTLY );
	}

	protected function iterate_args_metadata_block(): \Generator {
		yield from parent::iterate_args_metadata_block();

		yield 'skip_inner_blocks' => true;
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
		$this->set_calc_type();
		$this->set_new_repeater_label();

		return ( new Block_Render( $this ) )->render( $wp_block );
	}

	public function set_manage_items() {
		$this->manage_items = $this->block_attrs['manage_items_count'] ?? '';

		if ( 'manually' === $this->manage_items ) {
			$this->manage_items = '';
		}
	}

	public function set_items_field() {
		if ( ! $this->manage_items ) {
			return;
		}
		$this->items_field = ! empty( $this->block_attrs['manage_items_count_field'] ) ? $this->block_attrs['manage_items_count_field'] : false;
	}

	public function set_calc_type() {
		$this->calc_type = $this->block_attrs['repeater_calc_type'] ?? '';

		if ( 'default' === $this->calc_type ) {
			$this->calc_type = '';
		}
	}

	public function set_new_repeater_label() {
		$this->new_item_label = ! empty( $this->block_attrs['new_item_label'] ) ? $this->block_attrs['new_item_label'] : __( 'Add new', 'jet-form-builder' );
	}

	/**
	 * Get calulation formula for calculated field
	 *
	 * @return [type] [description]
	 */
	public function get_calculated_formula(): string {

		if ( empty( $this->block_attrs['calc_formula'] ) || ! $this->calc_type ) {
			return '';
		}

		$formula = preg_replace_callback(
			'/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/',
			function ( $matches ) use ( &$listen_fields ) {

				switch ( strtolower( $matches[1] ) ) {
					case 'field':
						return '%' . $matches[2] . '%';

					case 'meta':
						$post = get_post();

						if ( ! isset( $post->ID ) ) {
							return '';
						}

						return get_post_meta( $post->ID, $matches[2], true );

					default:
						$macros_name = $matches[1];

						return apply_filters( "jet-form-builder/calculated-data/$macros_name", $matches[0], $matches );
				}
			},
			$this->block_attrs['calc_formula']
		);

		return (string) $formula;
	}

	/**
	 * @param $path
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_field_template( $path ) {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'repeater-field/block-template.php' );
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'repeater-field' );
	}

}

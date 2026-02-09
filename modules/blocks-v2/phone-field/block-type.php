<?php

namespace JFB_Modules\Blocks_V2\Phone_Field;

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
 * Phone Field Block Type
 */
class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	/**
	 * Returns block name
	 *
	 * @return string
	 */
	public function get_name() {
		return 'phone-field';
	}

	/**
	 * Get CSS scheme for styling
	 *
	 * @return array
	 */
	public function get_css_scheme() {
		return array(
			'field'            => '__field-wrap input[type="tel"].jet-form-builder__field.phone-field-intl.iti__tel-input',
			'button_arrow'     => ' .iti__selected-country .iti__arrow',
			'button_dial_code' => '__field-wrap .iti__selected-country .iti__selected-dial-code'
		);
	}

	public function jsm_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'field_style',
				'title' => __( 'Text Input', 'jet-form-builder' ),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_typography',
				'type'         => 'typography',
				'separator'    => 'after',
				'css_selector' => array(
					$this->selector( 'field' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
					$this->selector( 'button_dial_code' ) => 'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};',
				),
			)
		);

		$this->add_margin_padding(
			$this->selector( 'field' ),
			array(
				'padding' => array(
					'id'        => 'item_padding',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_error_border_color',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Error Border Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( 'field' ) . '.invalid' => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_text_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#000000',
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'color: {{VALUE}}',
					$this->selector( 'field' ) . '::placeholder' => 'color: {{VALUE}}',
					$this->selector( 'button_dial_code' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#FFFFFF',
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_arrow_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Arrow Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#555',
					),
				),
				'css_selector' => array(
					$this->selector( 'button_arrow' ) => 'border-top-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
	}

	/**
	 * Register block with assets
	 */
	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		parent::register_block();
	}

	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * Get path to block template
	 *
	 * @param string $path
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_field_template( $path ) {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'phone-field/block-template.php' );
	}

	/**
	 * Get path to block metadata
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'phone-field' );
	}
}

<?php

namespace JFB_Modules\Blocks_V2\Text_Field;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Modules\Blocks_V2\Interfaces\Block_Type_With_Assets_Interface;
use JFB_Modules\Blocks_V2\Module;
use JFB_Modules\Blocks_V2\Traits\Block_Type_With_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	public $enable_mask = false;

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'text-field';
	}

	public function get_css_scheme() {
		return array(
			'field'   => '__field-wrap input',
			'wrapper' => '__field-wrap',
		);
	}

	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		parent::register_block();
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

				),
			)
		);

		$this->add_margin_padding(
			$this->selector( 'field' ),
			array(
				'padding' => array(
					'id'        => 'item_field_padding',
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
				'id'           => 'item_normal_color',
				'type'         => 'color-picker',
				'separator'    => 'after',
				'label'        => __( 'Text Color', 'jet-form-builder' ),
				'attributes'   => array(
					'default' => array(
						'value' => '#000000',
					),
				),
				'css_selector' => array(
					$this->selector( 'field' ) => 'color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'item_normal_background_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
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

		$this->controls_manager->end_section();
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$this->enable_mask = ! empty( $this->block_attrs['enable_input_mask'] ) && ! empty( $this->block_attrs['input_mask'] );

		if ( $this->enable_mask ) {
			wp_enqueue_script( Base_Module_Handle_It::PREFIX . 'blocks-v2-text-field-mask' );
		}

		return ( new Block_Render( $this ) )->render();
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

		return $blocks_v2->get_dir( 'text-field/block-template.php' );
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'text-field' );
	}


}

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
			'container'    => '.jfb-multi-gateway',
			'title'        => '.jfb-multi-gateway__title',
			'desc'         => '.jfb-multi-gateway__desc',
			'empty'        => '.jfb-multi-gateway__empty',
			'list'         => '.jfb-multi-gateway__list',
			'item'         => '.jfb-multi-gateway__item',
			'item_input'   => '.jfb-multi-gateway__item .jet-form-builder__field',
			'item_content' => '.jfb-multi-gateway__content',
			'item_title'   => '.jfb-multi-gateway__label',
			'item_desc'    => '.jfb-multi-gateway__description',
		);
	}

	public function general_style_unregister() {
		return array( 'wrap', 'input', 'label', 'required', 'description' );
	}

	public function jsm_controls() {

		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'mg_wrapper',
				'title' => __( 'Wrapper', 'jet-form-builder' ),
			)
		);

		$this->add_margin_padding(
			$this->css_scheme['container'],
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
					$this->css_scheme['container'] => 'background-color: {{VALUE}};',
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
					$this->css_scheme['container'] => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
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
	}
}

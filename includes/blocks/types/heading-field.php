<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Heading_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Heading_Field extends Base {

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Heading Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'heading-field';
	}

	public function general_style_unregister() {
		return array( 'required', 'input' );
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Heading_Field_Render( $this ) )->render();
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array();
	}

	/**
	 * Returns global attributes list
	 * P.S. removed `default`, `placeholder`, `required`
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'label'      => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Label', 'jet-form-builder' )
				),
			),
			'name'       => array(
				'type'    => 'string',
				'default' => 'heading_name',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Name', 'jet-form-builder' ),
					'show'  => false,
				),
			),
			'desc'       => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Description', 'jet-form-builder' )
				),
			),
			'add_prev'   => array(
				'type'     => 'boolean',
				'default'  => false,
				'advanced' => array(
					'type'  => 'toggle',
					'label' => __( 'Add Prev Page Button', 'jet-form-builder' )
				),
			),
			'prev_label' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'      => 'text',
					'label'     => __( 'Prev Page Button Label', 'jet-form-builder' ),
					'condition' => 'add_prev'
				),
			),
			'visibility' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'    => 'select',
					'label'   => __( 'Field Visibility', 'jet-form-builder' ),
					'options' => array(
						array(
							'value' => 'all',
							'label' => __( 'For all', 'jet-form-builder' ),
						),
						array(
							'value' => 'logged_id',
							'label' => __( 'Only for logged in users', 'jet-form-builder' ),
						),
						array(
							'value' => 'not_logged_in',
							'label' => __( 'Only for NOT-logged in users', 'jet-form-builder' ),
						),
					),
				),
			),
		);
	}


}

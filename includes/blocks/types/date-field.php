<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Date_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Date_Field extends Base {

	public function __construct() {
		$this->unregister_attributes(
			array(
				'placeholder',
			)
		);

		parent::__construct();
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Date Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'date-field';
	}

	public function general_style_unregister() {
		return array();
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Date_Field_Render( $this ) )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormDateFieldData', array(
			'help_messages' => array(
				'is_timestamp' => __(
					'Check this if you want to send value of this field as timestamp instead of plain date',
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
			'is_timestamp' => array(
				'type'    => 'boolean',
				'default' => false
			)
		);
	}

	/**
	 * Returns global attributes list
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'label'       => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Label', 'jet-form-builder' )
				),
			),
			'name'        => array(
				'type'    => 'string',
				'default' => 'field_name',
				'general' => $this->general_field_name_params(),
			),
			'desc'        => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Field Description', 'jet-form-builder' )
				),
			),
			'default'     => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'dynamic_text',
					'label' => __( 'Default Value', 'jet-form-builder' ),
					'help'  => __( 'Plain date should be in yyyy-mm-dd format' ),
				),
			),
			'placeholder' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'Placeholder', 'jet-form-builder' )
				),
			),
			'required'    => array(
				'type'    => 'boolean',
				'default' => false,
				'toolbar' => array(
					'type'  => 'toggle',
					'label' => __( 'Is Required', 'jet-form-builder' )
				),
			),
			'add_prev'    => array(
				'type'     => 'boolean',
				'default'  => false,
				'advanced' => array(
					'type'  => 'toggle',
					'label' => __( 'Add Prev Page Button', 'jet-form-builder' )
				),
			),
			'prev_label'  => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'      => 'text',
					'label'     => __( 'Prev Page Button Label', 'jet-form-builder' ),
					'condition' => 'add_prev'
				),
			),
			'visibility'  => array(
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
			'class_name'  => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'CSS Class Name', 'jet-form-builder' )
				),
			),
		);
	}


}

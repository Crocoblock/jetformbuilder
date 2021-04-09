<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Form_Break_Field_Render;
use Jet_Form_Builder\Live_Form;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form_Break_Field extends Base {

	public function block_params() {
		return array(
			'attributes'      => $this->block_attributes(),
			'render_callback' => array( $this, 'render_field__form_break' )
		);
	}

	public function render_field__form_break( array $attrs, $content = null ) {
		$result = array();
		$this->set_block_data( $attrs, $content );

		$result[] = $this->get_block_renderer();
		$result[] = Live_Form::instance()->maybe_end_page( false, $this->block_attrs );
		$result[] = Live_Form::instance()->maybe_start_page();

		return implode( "\n", $result );
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Form Break Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-break-field';
	}

	public function general_style_attributes() {
		return array();
	}

	public function general_style_manager_options() {
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Form_Break_Field_Render( $this ) )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormBreakFieldData', array(
			'help_messages' => array(
				'page_break_disabled' => __(
					'Text to show if next page button is disabled. For example - "Fill required fields" etc.',
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
			'page_break_disabled' => array(
				'type'    => 'string',
				'default' => ''
			),
			'label_progress' => array(
				'type' => 'string',
				'default' => ''
			)
		);
	}

	/**
	 * Returns global attributes list
	 *
	 * @return array[]
	 */
	public function get_global_attributes() {
		return array(
			'label' => array(
				'type'    => 'string',
				'default' => 'Next',
				'general' => array(
					'type'  => 'text',
					'label' => __( 'Label', 'jet-form-builder' )
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

			'class_name' => array(
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

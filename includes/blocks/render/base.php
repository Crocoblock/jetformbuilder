<?php

namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Form_Preset;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

	use Attributes_Trait;
	use Get_Template_Trait;

	public $form_id;
	public $block_type;
	public $content;
	public $live_form;
	public $preset;


	public function __construct( $block_type ) {
		$this->form_id = Live_Form::instance()->form_id;

		$this->set_live_form();
		$this->set_block_type( $block_type );
		$this->set_form_preset();
	}

	abstract public function get_name();

	public function set_live_form() {
		$this->live_form = Live_Form::instance();
	}

	public function set_form_preset() {
		$this->preset = Form_Preset::instance();
	}

	public function set_block_type( $block_type ) {
		$this->block_type = $block_type;
	}

	private function is_field( $needle ) {
		return Plugin::instance()->form->is_field( $this->block_type->block_attrs['blockName'], $needle );
	}


	/**
	 * Returns field label
	 *
	 * @return [type] [description]
	 */
	public function get_field_label() {

		ob_start();
		if ( ! empty( $this->block_type->block_attrs['label'] ) && $this->label_allowed() ) {
			$args = $this->block_type->block_attrs;
			include $this->block_type->get_common_template( 'field-label.php' );
		}

		return ob_get_clean();

	}

	/**
	 * Returns field description
	 *
	 * @return [type] [description]
	 */
	public function get_field_desc() {

		ob_start();
		if ( ! empty( $this->block_type->block_attrs['desc'] ) && $this->label_allowed() ) {
			$args = $this->block_type->block_attrs;
			include $this->block_type->get_common_template( 'field-description.php' );
		}

		return ob_get_clean();

	}

	/**
	 * Defines if this form control supports label
	 *
	 * @return [type] [description]
	 */
	public function label_allowed() {
		return true;
	}

	public function render( $wp_block = null, $template = null ) {

		if ( ! $this->live_form->form_id ) {
			return;
		}

		$defaults = array(
			'default'     => '',
			'name'        => '',
			'placeholder' => '',
			'required'    => false,
		);

		$sanitized_args = array();

		foreach ( $this->block_type->block_attrs as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}
		$args = wp_parse_args( $sanitized_args, $defaults );

		$template_name = $this->get_name();

		if ( is_null( $template ) ) {
			$template = $this->block_type->get_field_template( $template_name . '.php' );
		}

		$label  = $this->get_field_label();
		$desc   = $this->get_field_desc();
		$layout = $this->live_form ? $this->live_form->spec_data->fields_layout : 'column';

		$args['default'] = $this->get_default_from_preset( $args );

		if ( 'column' === $layout ) {
			ob_start();
			include $this->block_type->get_common_template( 'field-column.php' );
			$result_field = ob_get_clean();
		} else {
			ob_start();
			include $this->block_type->get_common_template( 'field-row.php' );
			$result_field = ob_get_clean();
		}

		return $result_field;
	}

	private function get_default_from_preset( $args ) {
		if ( ! $this->preset ) {
			return $args['default'];
		}

		$preset_value = $this->preset->get_field_value( $args['name'], $args );
		$result_value = '';

		if ( ! $this->live_form->current_repeater ) {

			if ( $preset_value['rewrite'] ) {
				$result_value = $preset_value['value'];
			} elseif ( ! $this->is_field( 'hidden' ) ) {
				$result_value = $this->preset->maybe_adjust_value( $args );
			}

		} elseif ( ! empty( $this->live_form->current_repeater['values'] )
		           && isset( $this->live_form->current_repeater['values'][ $args['name'] ] ) ) {
			$result_value = $this->live_form->current_repeater['values'][ $args['name'] ];
		}


		if ( $result_value ) {
			return $result_value;
		} elseif ( $preset_value['rewrite'] ) { // if default was set by dynamic preset (json format)
			return '';
		} else {
			return $args['default'];
		}
	}

}

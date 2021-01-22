<?php

namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Preset_Manager;

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

	const FIELD_ERROR_CLASS = 'field-has-error';


	public function __construct( $block_type ) {
		$this->form_id = Live_Form::instance()->form_id;

		$this->set_live_form();
		$this->set_block_type( $block_type );
	}

	abstract public function get_name();

	public function set_live_form() {
		$this->live_form = Live_Form::instance();
	}

	public function set_block_type( $block_type ) {
		$this->block_type = $block_type;
	}

	private function is_field( $needle ) {
		return Plugin::instance()->form->is_field( $this->block_type->block_attrs['blockName'], $needle );
	}

	public function maybe_add_error_class( $args ) {
		if ( $this->has_error( $args ) ) {
			$this->add_attribute( 'class', self::FIELD_ERROR_CLASS );
		}
	}

	public function maybe_render_error( $args ) {
		if ( $this->has_error( $args ) ) {
			return "<div class='error-message'>". Error_Handler::instance()->error_by_name( $args['name'] ) ."</div>";
		}
		return '';
	}

	public function maybe_get_error_class( $args ) {
		if ( $this->has_error( $args ) ) {
			return self::FIELD_ERROR_CLASS;
		}
		return '';
	}

	private function has_error( $args ) {
		return Error_Handler::instance()->has_error_by_name( $args['name'] );
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

		$this->maybe_add_error_class( $args );

		if ( is_null( $template ) ) {
			$template = $this->block_type->get_field_template( $template_name . '.php' );
		}

		$label  = $this->get_field_label();
		$desc   = $this->get_field_desc();
		$layout = $this->live_form ? $this->live_form->spec_data->fields_layout : 'column';

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

	public function render_disabled_message_form_break( $args ) {
		$format = '<div class="jet-form-builder__next-page-msg" %2$s>%1$s</div>';

		if ( ! empty( $args['page_break_disabled'] ) && ! Tools::is_editor() ) {
			return sprintf( $format, $args['page_break_disabled'], '' );

		} elseif ( Tools::is_editor() ) {

			$message = ! empty( $args['page_break_disabled'] ) ? $args['page_break_disabled'] : 'Disabled message';

			return sprintf( $format, $message, $this->get_style_attrs( array( 'display:block' ) ) );
		}

		return '';
	}

	public function get_style_attrs( $style ) {
		return 'style=' . implode( ';', $style );
	}

}

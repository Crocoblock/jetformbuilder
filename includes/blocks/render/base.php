<?php

namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Blocks\Button_Types\Button_Next;
use Jet_Form_Builder\Blocks\Dynamic_Value;
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Classes\Regexp_Tools;

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

	/**
	 * @var \Jet_Form_Builder\Blocks\Types\Base
	 */
	public $block_type;
	public $content;

	/**
	 * @var Live_Form
	 */
	public $live_form;

	/**
	 * @var array
	 */
	public $args;

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

	/**
	 * Returns field label
	 *
	 * @return [type] [description]
	 */
	public function get_field_label() {
		if ( empty( $this->block_type->block_attrs['label'] ) || ! $this->label_allowed() ) {
			return '';
		}

		$args = $this->block_type->block_attrs;

		$label_wrapper = new class() {
			use Attributes_Trait;
		};
		$label_text    = clone $label_wrapper;

		if ( isset( $args['type'] ) && 'heading-field' === $args['type'] ) {
			$label_wrapper->add_attribute( 'class', 'jet-form-builder__heading' );
			$label_wrapper->add_attribute( 'class', $args['class_name'] );
		} else {
			$label_wrapper->add_attribute( 'class', 'jet-form-builder__label' );
		}

		$label_text->add_attribute( 'class', 'jet-form-builder__label-text' );
		$label_text_tag = esc_attr( jet_fb_live_args()->fields_label_tag );

		if ( 'label' === $label_text_tag ) {
			$label_text->add_attribute( 'for', $this->block_type->get_field_id( $args, 'label' ) );
		}

		ob_start();

		include $this->block_type->get_common_template( 'field-label.php' );

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

	public function render_without_layout( $template = null, $args = array() ) {
		$template_name = $this->get_name();

		if ( empty( $args ) ) {
			$args = $this->get_default_args_with_filter();
		}

		$this->args = $args;
		$this->before_render( $args );

		if ( is_null( $template ) ) {
			$template = $this->block_type->get_field_template( $template_name . '.php' );
		}

		if ( $template && Tools::is_readable( $template ) ) {
			ob_start();
			include $template;
			$template = ob_get_clean();
		}

		return $template;
	}

	public function get_default_args() {
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

		return wp_parse_args( $sanitized_args, $defaults );
	}

	public function get_default_args_with_filter() {
		$args = $this->get_default_args();

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		return apply_filters( "jet-form-builder/render/{$args['type']}", $args, $this );
	}

	public function before_render( $args ) {
	}

	/**
	 * @param null $wp_block
	 * @param null $template
	 *
	 * @return false|string
	 */
	public function render( $wp_block = null, $template = null ) {
		$args     = $this->get_default_args_with_filter();
		$template = $this->render_without_layout( $template, $args );

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
			$attrs = array(
				sprintf(
					'data-jfb-conditional="%s"',
					Tools::esc_attr(
						array(
							array(
								'page_state' => 'active',
							),
						)
					)
				),
				sprintf(
					'data-jfb-func="%s"',
					Tools::esc_attr(
						array(
							'show' => array( 'dom' => true ),
						)
					)
				),
			);

			return sprintf( $format, $args['page_break_disabled'], implode( ' ', $attrs ) );

		} elseif ( Tools::is_editor() ) {

			$message = ! empty( $args['page_break_disabled'] ) ? $args['page_break_disabled'] : 'Disabled message';

			return sprintf( $format, $message, $this->get_style_attrs( array( 'display:block' ) ) );
		}

		return '';
	}

	public function get_style_attrs( $style ) {
		return 'style=' . implode( ';', $style );
	}

	/**
	 * Render custom form item template
	 *
	 * @param int|string $object_id Object ID.
	 * @param array $args Field arguments.
	 * @param bool|string $checked
	 *
	 * @return string
	 */
	public function get_custom_template( $object_id, $args, $checked = false ) {
		return ( new Builder_Helper() )->get_custom_template( $object_id, $args, $checked );
	}

	protected function set_value() {
		if ( ! jet_form_builder()->regexp->has_macro( $this->args['default'] ) ) {
			$this->add_attribute( 'value', $this->args['default'] );

			return;
		}
		wp_enqueue_script( Dynamic_Value::HANDLE );

		$this->add_attribute( 'data-value', $this->args['default'] );
	}

}

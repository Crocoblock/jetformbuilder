<?php


namespace Jet_Form_Builder\Classes\Arguments;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Form_Arguments implements Arrayable {

	const SETTER_PREFIX = 'set_';

	public $form_id          = '';
	public $submit_type      = '';
	public $required_mark    = '';
	public $fields_layout    = '';
	public $enable_progress  = null;
	public $fields_label_tag = '';
	public $load_nonce       = '';

	public function __construct( $form_id = 0 ) {
		$this->form_id = (int) $form_id;
	}

	/**
	 * It turns out the inheritance of such an image
	 * Incoming Form Attributes (from block/widget/shortcode)
	 * (if not) -> Individual Form Arguments
	 * (if not) -> Default PHP Values
	 *
	 * @param array $block_attributes
	 *
	 * @return $this
	 */
	public function load( array $block_attributes = array() ): Form_Arguments {
		$jf_args = Plugin::instance()->post_type->get_args( $this->form_id );

		$attributes_from_post_type = array_diff( $jf_args, $this->to_array() );
		$form_block_or_widget      = array_diff( $block_attributes, $this->to_array() );

		$render_attributes = array_merge(
			...apply_filters(
				'jet-form-builder/form-render/attributes',
				array(
					Default_Form_Arguments::arguments(),
					$attributes_from_post_type,
					$form_block_or_widget,
				)
			)
		);

		$this->set_from_array( $render_attributes );

		return $this;
	}

	/**
	 * @param mixed $enable_progress
	 */
	public function set_enable_progress( $enable_progress ) {
		$this->enable_progress = (bool) $enable_progress;
	}

	/**
	 * @param mixed $fields_label_tag
	 */
	public function set_fields_label_tag( $fields_label_tag ) {
		$fields_label_tag = strtolower( $fields_label_tag );

		if ( ! in_array( $fields_label_tag, array( 'label', 'div' ), true ) ) {
			return;
		}

		$this->fields_label_tag = $fields_label_tag;
	}

	/**
	 * @param mixed $fields_layout
	 */
	public function set_fields_layout( $fields_layout ) {
		$fields_layout = strtolower( $fields_layout );

		if ( ! in_array( $fields_layout, array( 'column', 'row' ), true ) ) {
			return;
		}

		$this->fields_layout = $fields_layout;
	}

	/**
	 * @param mixed $load_nonce
	 */
	public function set_load_nonce( $load_nonce ) {
		$load_nonce = strtolower( $load_nonce );

		if ( ! in_array( $load_nonce, array( 'render', 'hide', 'csrf' ), true ) ) {
			return;
		}

		$this->load_nonce = $load_nonce;
	}

	/**
	 * @param mixed $required_mark
	 */
	public function set_required_mark( $required_mark ) {
		$this->required_mark = $required_mark;
	}

	/**
	 * @param mixed $submit_type
	 */
	public function set_submit_type( $submit_type ) {
		$submit_type = strtolower( $submit_type );

		if ( ! in_array( $submit_type, array( 'reload', 'ajax' ), true ) ) {
			return;
		}

		$this->submit_type = $submit_type;
	}

	public function to_array(): array {
		return array(
			'form_id'          => $this->form_id,
			'submit_type'      => $this->submit_type,
			'required_mark'    => $this->required_mark,
			'fields_layout'    => $this->fields_layout,
			'enable_progress'  => $this->enable_progress,
			'fields_label_tag' => $this->fields_label_tag,
			'load_nonce'       => $this->load_nonce,
		);
	}

	public function set_from_array( array $attributes ) {
		foreach ( $attributes as $attr => $value ) {
			if ( ! property_exists( $this, $attr ) ) {
				continue;
			}
			$setter = array( $this, self::SETTER_PREFIX . $attr );

			if ( is_callable( $setter ) ) {
				call_user_func( $setter, $value );

				continue;
			}

			$this->$attr = $value;
		}
	}

	/**
	 * @param $property
	 * @param false $default
	 *
	 * @return mixed
	 */
	public function argument( $property, $default = '' ) {
		if ( ! property_exists( $this, $property ) ) {
			return $default;
		}
		$value = $this->{$property};

		return ( is_null( $value ) || '' === $value ) ? $default : $value;
	}

	public function is_use_nonce(): bool {
		return 'render' === $this->load_nonce;
	}

	public function is_use_csrf(): bool {
		return 'csrf' === $this->load_nonce;
	}

	public static function arguments(): array {
		return ( new static() )->to_array();
	}

	public static function get_options( $for_elementor = false ): array {
		$submit_type   = array(
			''       => __( 'Default', 'jet-form-builder' ),
			'reload' => __( 'Page Reload', 'jet-form-builder' ),
			'ajax'   => __( 'AJAX', 'jet-form-builder' ),
		);
		$fields_layout = array(
			''       => __( 'Default', 'jet-form-builder' ),
			'column' => __( 'Column', 'jet-form-builder' ),
			'row'    => __( 'Row', 'jet-form-builder' ),
		);

		$label_tag = array(
			''      => 'Default',
			'div'   => __( 'DIV', 'jet-form-builder' ),
			'label' => __( 'LABEL', 'jet-form-builder' ),
		);

		$load_nonce = array(
			'hide'   => __( 'Disable', 'jet-form-builder' ),
			'render' => __( 'WordPress Nonce', 'jet-form-builder' ),
			'csrf'   => __( 'JetFormBuilder Token', 'jet-form-builder' ),
		);

		if ( ! $for_elementor ) {
			$submit_type   = Tools::prepare_list_for_js( $submit_type );
			$fields_layout = Tools::prepare_list_for_js( $fields_layout );
			$label_tag     = Tools::prepare_list_for_js( $label_tag );
			$load_nonce    = Tools::prepare_list_for_js( $load_nonce );
		}

		return array(
			'submit_type'      => $submit_type,
			'fields_layout'    => $fields_layout,
			'fields_label_tag' => $label_tag,
			'load_nonce'       => $load_nonce,
		);
	}

}

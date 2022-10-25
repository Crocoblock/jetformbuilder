<?php


namespace Jet_Form_Builder\Classes\Arguments;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

/**
 * @property int form_id
 * @property string submit_type
 * @property string required_mark
 * @property string fields_layout
 * @property bool enable_progress
 * @property string fields_label_tag
 * @property string load_nonce
 * @property bool use_csrf
 * @property string validation_type
 * @property string clear
 *
 * Class Form_Arguments
 * @package Jet_Form_Builder\Classes\Arguments
 */
class Form_Arguments implements Arrayable {

	const SETTER_PREFIX = 'set_';

	public $props = array(
		'form_id'          => '',
		'submit_type'      => '',
		'required_mark'    => '',
		'fields_layout'    => '',
		'enable_progress'  => null,
		'fields_label_tag' => '',
		'load_nonce'       => '',
		'use_csrf'         => '',
		'validation_type'  => '',
		'clear'            => '',
	);

	public function __construct( $form_id = 0 ) {
		$this->set_form_id( (int) $form_id );
	}

	/**
	 * @param int|string $form_id
	 *
	 * @return Form_Arguments
	 */
	public function set_form_id( $form_id ): Form_Arguments {
		$this->form_id = $form_id;

		return $this;
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
	 * @param null $clear
	 */
	public function set_clear( $clear ) {
		$this->clear = $clear;
	}

	/**
	 * @param null $use_csrf
	 */
	public function set_use_csrf( $use_csrf ) {
		$this->use_csrf = (bool) $use_csrf;
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

		if ( ! in_array( $load_nonce, array( 'render', 'hide' ), true ) ) {
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
			'use_csrf'         => $this->use_csrf,
		);
	}

	public function set_from_array( array $attributes ) {
		foreach ( $attributes as $attr => $value ) {
			if ( ! array_key_exists( $attr, $this->props ) ) {
				continue;
			}
			$setter = array( $this, self::SETTER_PREFIX . $attr );

			if ( is_callable( $setter ) ) {
				call_user_func( $setter, $value );

				continue;
			}

			$this->props[ $attr ] = $value;
		}
	}

	/**
	 * @param $property
	 * @param false $default
	 *
	 * @return mixed
	 */
	public function argument( $property, $default = '' ) {
		if ( ! array_key_exists( $property, $this->props ) ) {
			return $default;
		}
		$value = $this->props[ $property ];

		return ( is_null( $value ) || '' === $value ) ? $default : $value;
	}

	public function is_use_nonce(): bool {
		return 'render' === $this->load_nonce;
	}

	public function is_use_csrf() {
		return $this->use_csrf;
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

	/**
	 * @return string
	 */
	public function get_submit_type(): string {
		return $this->submit_type ?: 'reload';
	}

	public function __get( $name ) {
		if ( ! array_key_exists( $name, $this->props ) ) {
			return null;
		}

		return $this->props[ $name ];
	}

	public function __set( $name, $value ) {
		if ( ! array_key_exists( $name, $this->props ) ) {
			return;
		}

		$this->props[ $name ] = $value;
	}

}

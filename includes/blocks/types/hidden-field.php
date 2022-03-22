<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Render\Base as RenderBase;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Hidden_Field extends Base {

	public $use_style_manager = false;
	private $rendering        = true;

	private function current_post() {
		return Live_Form::instance()->post;
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'hidden-field';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new class( $this ) extends RenderBase {
			public function get_name() {
				return 'hidden-field';
			}
		} )->render_without_layout();
	}

	/**
	 * @param $attributes
	 * @param null $content
	 * @param null $wp_block
	 *
	 * @throws Render_Empty_Field
	 */
	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		if ( $this->is_rendering() && ! ( $attributes['render'] ?? true ) ) {
			throw new Render_Empty_Field( 'hidden_field' );
		}
		parent::set_block_data( $attributes, $content, $wp_block );
	}

	/**
	 * @return bool
	 */
	public function is_rendering(): bool {
		return $this->rendering;
	}

	/**
	 * @param bool $rendering
	 */
	public function set_rendering( bool $rendering ) {
		$this->rendering = $rendering;
	}

	public function set_preset() {
		parent::set_preset();

		$this->block_attrs['field_value'] = $this->get_hidden_field_value();
	}

	public function get_hidden_field_value() {
		$call_field_value = $this->block_attrs['field_value'] ?? false;
		$static_value     = $this->block_attrs['_static_value'] ?? false;

		if ( $static_value ) {
			return $call_field_value;
		}

		$custom_cb = apply_filters( 'jet-form-builder/fields/hidden-field/value-cb', false, $call_field_value, $this );
		$value     = '';

		if ( is_callable( array( $this, $call_field_value ) ) ) {
			$value = call_user_func( array( $this, $call_field_value ) );
		} elseif ( is_callable( $custom_cb ) ) {
			$value = call_user_func( $custom_cb );
		}

		return ( ! $this->is_empty( $value ) )
			? $value
			: $this->block_attrs['default'];
	}

	private function manual_input() {
		return $this->block_attrs['hidden_value'];
	}

	/**
	 * @param array $params
	 *
	 * @return int|null
	 */
	private function post_id( $params = array() ) {
		if ( ! $this->current_post() ) {
			return null;
		} else {
			return $this->current_post()->ID;
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function post_title( $params = array() ) {
		if ( ! $this->current_post() ) {
			return null;
		} else {
			return get_the_title( $this->current_post()->ID );
		}
	}

	/**
	 * @param array $params
	 *
	 * @return false|string|\WP_Error|null
	 */
	private function post_url( $params = array() ) {
		if ( ! $this->current_post() ) {
			return null;
		} else {
			return get_permalink( $this->current_post()->ID );
		}
	}

	/**
	 * @param array $params
	 *
	 * @return mixed|null
	 */
	private function post_meta( $params = array() ) {
		if ( ! $this->current_post() ) {
			return null;
		}

		$key = ! empty( $this->block_attrs['hidden_value_field'] ) ? $this->block_attrs['hidden_value_field'] : '';

		if ( ! $key ) {
			return null;
		} else {
			return get_post_meta( $this->current_post()->ID, $key, true );
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|void|null
	 */
	private function query_var( $params = array() ) {
		$key = ! empty( $this->block_attrs['query_var_key'] ) ? $this->block_attrs['query_var_key'] : '';

		if ( ! $key ) {
			return null;
		} else {
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return isset( $_GET[ $key ] ) ? sanitize_text_field( $_GET[ $key ] ) : null;
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function user_id( $params = array() ) {
		if ( ! is_user_logged_in() ) {
			return null;
		} else {
			$user = wp_get_current_user();

			return $user->ID;
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function user_email( $params = array() ) {
		if ( ! is_user_logged_in() ) {
			return null;
		} else {
			$user = wp_get_current_user();

			return $user->user_email;
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function user_name( $params = array() ) {
		if ( ! is_user_logged_in() ) {
			return null;
		} else {
			$user = wp_get_current_user();

			return $user->display_name;
		}
	}

	/**
	 * @param array $params
	 *
	 * @return mixed|null
	 */
	private function user_meta( $params = array() ) {
		$key = ! empty( $this->block_attrs['hidden_value_field'] ) ? $this->block_attrs['hidden_value_field'] : '';

		if ( ! $key ) {
			return null;
		}

		if ( ! is_user_logged_in() ) {
			return null;
		} else {
			return get_user_meta( get_current_user_id(), $key, true );
		}
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function author_id( $params = array() ) {
		return $this->get_author_meta( 'ID' );
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function author_email( $params = array() ) {
		return $this->get_author_meta( 'user_email' );
	}

	/**
	 * @param array $params
	 *
	 * @return string|null
	 */
	private function author_name( $params = array() ) {
		return $this->get_author_meta( 'display_name' );
	}

	/**
	 * @param array $params
	 *
	 * @return string
	 */
	private function current_date( $params = array() ) {
		$format = ! empty( $this->block_attrs['date_format'] ) ? $this->block_attrs['date_format'] : get_option( 'date_format' );

		return date_i18n( $format );
	}


	public function get_author_meta( $key ) {

		global $authordata;

		if ( $authordata ) {
			return get_the_author_meta( $key );
		}

		if ( ! $this->current_post() ) {
			return null;
		}

		return get_the_author_meta( $key, $this->current_post()->post_author );

	}

	private function get_default_field_value() {
		$field = $this->attrs['field_value'];

		return isset( $field['default'] ) ? $field['default'] : '';
	}

	protected function referer_url() {
		return wp_get_raw_referer();
	}

	private function is_empty( $value ) {
		return ( '' === $value || is_null( $value ) || false === $value );
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'JetFormHiddenField',
			apply_filters(
				'jet-form-builder/editor/hidden-field/config',
				array(
					'sources' => Tools::with_placeholder(
						array(
							array(
								'value' => 'post_id',
								'label' => __( 'Current Post ID', 'jet-form-builder' ),
							),
							array(
								'value' => 'post_title',
								'label' => __( 'Current Post Title', 'jet-form-builder' ),
							),

							array(
								'value' => 'post_url',
								'label' => __( 'Current Post/Page URL', 'jet-form-builder' ),
							),
							array(
								'value' => 'post_meta',
								'label' => __( 'Current Post Meta', 'jet-form-builder' ),
							),
							array(
								'value' => 'user_id',
								'label' => __( 'Current User ID', 'jet-form-builder' ),
							),
							array(
								'value' => 'user_email',
								'label' => __( 'Current User Email', 'jet-form-builder' ),
							),
							array(
								'value' => 'user_name',
								'label' => __( 'Current User Name', 'jet-form-builder' ),
							),
							array(
								'value' => 'user_meta',
								'label' => __( 'Current User Meta', 'jet-form-builder' ),
							),
							array(
								'value' => 'author_id',
								'label' => __( 'Current Post Author ID', 'jet-form-builder' ),
							),
							array(
								'value' => 'author_email',
								'label' => __( 'Current Post Author Email', 'jet-form-builder' ),
							),
							array(
								'value' => 'author_name',
								'label' => __( 'Current Post Author Name', 'jet-form-builder' ),
							),
							array(
								'value' => 'query_var',
								'label' => __( 'URL Query Variable', 'jet-form-builder' ),
							),
							array(
								'value' => 'referer_url',
								'label' => __( 'Referer URL', 'jet-form-builder' ),
							),
							array(
								'value' => 'current_date',
								'label' => __( 'Current Date', 'jet-form-builder' ),
							),
							array(
								'value' => 'manual_input',
								'label' => __( 'Manual Input', 'jet-form-builder' ),
							),
						)
					),
				)
			)
		);
	}

}

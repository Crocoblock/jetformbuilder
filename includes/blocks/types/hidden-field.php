<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Render\Hidden_Field_Render;
use Jet_Form_Builder\Live_Form;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Hidden_Field extends Base {

	private function current_post() {
		if ( ! Live_Form::instance()->post ) {
			Live_Form::instance()->post = get_post();
		}

		return Live_Form::instance()->post;
	}

	public function general_style_attributes() {
		return array();
	}

	public function general_style_manager_options() {
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Hidden Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'hidden-field';
	}

	public function parse_exported_data( $field_data ) {
		$field_data = parent::parse_exported_data( $field_data );

		[
			$field_data['attrs']['field_value'],
			$field_data['attrs']['hidden_value']
		] = [
			$field_data['attrs']['hidden_value'],
			$field_data['attrs']['default']
		];

		return $field_data;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Hidden_Field_Render( $this ) )->render();
	}

	public function get_field_value( $value, $params = array() ) {

		if ( is_callable( array( $this, $value ) ) ) {
			return $this->$value( $params );
		} elseif ( ! empty( $params['default'] ) ) {
			return $params['default'];
		}

		return $value;
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
			return isset( $_GET[ $key ] ) ? esc_attr( $_GET[ $key ] ) : null;
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
		$field = $this->get_attributes()['field_value'];

		return isset( $field['default'] ) ? $field['default'] : '';
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'field_value'        => array(
				'type'    => 'string',
				'default' => 'post_id',
			),
			'hidden_value_field' => array(
				'type'    => 'string',
				'default' => '',
			),
			'query_var_key'      => array(
				'type'    => 'string',
				'default' => '',
			),
			'date_format'        => array(
				'type'    => 'string',
				'default' => get_option( 'date_format' ),
			),
			'hidden_value'       => array(
				'type'    => 'string',
				'default' => '',
			),
		);
	}

	/**
	 * Returns global attributes list
	 *
	 * @return [type] [description]
	 */
	public function get_global_attributes() {
		return array(
			'name'       => array(
				'type'    => 'string',
				'default' => 'hidden_field_name',
				'general' => $this->general_field_name_params(),
			),
			'class_name' => array(
				'type'     => 'string',
				'default'  => '',
				'advanced' => array(
					'type'  => 'text',
					'label' => __( 'CSS Class Name', 'jet-form-builder' )
				),
			),
			'default'     => array(
				'type'    => 'string',
				'default' => '',
				'general' => array(
					'type'  => 'dynamic_text',
					'label' => __( 'Default Value', 'jet-form-builder' ),
					'show'  => false,
				),
			),
		);
	}

}

<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

class Request_Handler {
	public $request;
	public $errors;

	public $repeaters = array();

	public $_fields = array();
	public $_request_values;
	public $_response_data;

	const REPEATERS_SETTINGS = '__repeaters_settings';
	const WP_NONCE_KEY       = '_wpnonce';

	public function set_request( $request ) {
		$this->request = $request;

		Parser_Manager::instance();
	}

	public function get_request() {
		return $this->_request_values;
	}

	private function merge_with_base_request( $data ) {
		foreach ( $this->request as $name => $field ) {
			$data[ '__' . $name ] = $field;
		}
		$data[ self::REPEATERS_SETTINGS ] = $this->repeaters;

		return $data;
	}


	/**
	 * Get form values from request
	 *
	 * @return [type] [description]
	 */
	public function get_values_from_request() {

		if ( $this->request['is_ajax'] ) {

			$prepared = array();
			// phpcs:disable WordPress.Security.NonceVerification.Missing
			// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			$raw = ! empty( $_POST['values'] ) ? Tools::sanitize_recursive( wp_unslash( $_POST['values'] ) ) : array();
			// phpcs:enable WordPress.Security.NonceVerification.Missing

			if ( empty( $raw ) ) {
				return $prepared;
			}

			foreach ( $raw as $data ) {

				$name  = $data['name'];
				$value = $data['value'];

				if ( preg_match( '/\[\d\]\[/', $name ) ) {

					$name_parts = explode( '[', $name );

					$name  = $name_parts[0];
					$index = absint( rtrim( $name_parts[1], ']' ) );
					$key   = rtrim( $name_parts[2], ']' );

					if ( empty( $prepared[ $name ] ) ) {
						$prepared[ $name ] = array();
					}

					if ( empty( $prepared[ $name ][ $index ] ) ) {
						$prepared[ $name ][ $index ] = array();
					}

					if ( isset( $name_parts[3] ) ) {

						if ( empty( $prepared[ $name ][ $index ][ $key ] ) ) {
							$prepared[ $name ][ $index ][ $key ] = array();
						}

						$prepared[ $name ][ $index ][ $key ][] = $value;

					} else {
						$prepared[ $name ][ $index ][ $key ] = $value;
					}
				} elseif ( false !== strpos( $name, '[]' ) ) {

					$name = str_replace( '[]', '', $name );

					if ( empty( $prepared[ $name ] ) ) {
						$prepared[ $name ] = array();
					}

					$prepared[ $name ][] = $value;

				} else {
					$prepared[ $name ] = $value;
				}
			}

			return $prepared;

		} else {
			// phpcs:ignore WordPress.Security.NonceVerification.Missing
			return $_POST;
		}

	}

	/**
	 * @throws Request_Exception
	 */
	public function init_form_data() {
		$this->_fields         = Plugin::instance()->form->get_form_blocks( $this->request['form_id'] );
		$this->_request_values = $this->get_values_from_request();

		$nonce = isset( $this->_request_values[ self::WP_NONCE_KEY ] )
			? $this->_request_values[ self::WP_NONCE_KEY ]
			: '';

		Live_Form::instance()->set_form_id( $this->request['form_id'] );

		if ( ! wp_verify_nonce( $nonce, Live_Form::instance()->get_nonce_id() ) ) {
			throw ( new Request_Exception( 'Invalid nonce.' ) )->dynamic_error();
		}

	}


	/**
	 * Get submitted form data
	 *
	 * @return array [type] [description]
	 * @throws Request_Exception
	 */
	public function get_form_data() {

		$this->init_form_data();

		$this->_response_data = Parser_Manager::instance()->get_values_fields( $this->_fields, $this->_request_values );

		if ( ! Error_Handler::instance()->empty_errors() ) {
			throw new Request_Exception(
				'validation_failed',
				Error_Handler::instance()->errors(),
				$this->_response_data
			);
		}

		if ( ! Plugin::instance()->captcha->verify( $this->request['form_id'], $this->request['is_ajax'] ) ) {
			throw new Request_Exception( 'captcha_failed' );
		}

		$data = apply_filters( 'jet-form-builder/form-handler/form-data', $this->_response_data, $this );

		return $this->merge_with_base_request( $data );
	}

	public function save_repeater( $name, $value ) {
		$this->repeaters[ $name ] = $value;
	}

	public function get_field_attrs_by_name( $field_name, $attr_name = '', $default_val = '' ) {
		return $this->_get_field_attrs_by_name( $this->_fields, $field_name, $attr_name, $default_val );
	}

	public function _get_field_attrs_by_name( $source, $field_name, $attr_name = '', $default_val = '' ) {
		foreach ( $source as $field ) {
			if ( empty( $field['attrs'] )
				 || ! isset( $field['attrs']['name'] )
				 || $field_name !== $field['attrs']['name']
			) {
				if ( ! empty( $field['innerBlocks'] ) ) {
					return $this->_get_field_attrs_by_name(
						$field['innerBlocks'],
						$field_name,
						$attr_name,
						$default_val
					);
				}
				continue;
			}
			$attrs = $field['attrs'];

			if ( ! $attr_name ) {
				return $attrs;
			}
			if ( ! isset( $attrs[ $attr_name ] ) ) {
				return $default_val;
			}

			return $attrs[ $attr_name ];
		}

		return $default_val;
	}


}

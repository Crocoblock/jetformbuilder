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

	public function __construct( $request ) {
		$this->request = $request;

		Parser_Manager::instance();
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
			$raw      = ! empty( $_REQUEST['values'] ) ? Tools::maybe_recursive_sanitize( $_REQUEST['values'] ) : array();

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
			return $_REQUEST;
		}

	}

	/**
	 * @throws Request_Exception
	 */
	public function init_form_data() {
		$this->_fields = Plugin::instance()->form->get_only_form_fields(
			$this->request['form_id'],
			array( 'submit-field', 'form-break-field', 'heading-field', 'group-break-field' ),
			false
		);

		$this->_request_values = $this->get_values_from_request();
		$nonce                 = isset( $this->_request_values['_wpnonce'] ) ? $this->_request_values['_wpnonce'] : '';

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

		$this->_response_data = Parser_Manager::instance()->get_values_fields( $this );

		if ( ! Error_Handler::instance()->empty_errors() ) {
			throw new Request_Exception( 'validation_failed',
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
		foreach ( $this->_fields as $field ) {
			if ( empty( $field['attrs'] )
			     || ! isset( $field['attrs']['name'] )
			     || $field_name !== $field['attrs']['name']
			) {
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
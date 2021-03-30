<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Factory;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Fields\Date_Field_Parser;
use Jet_Form_Builder\Request\Fields\Repeater_Field_Parser;

class Request_Handler {
	public $request;
	public $errors;

	private $repeaters = array();

	private $_fields = array();
	private $_request_values;
	private $_response_data;

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

	public function init_form_data() {
		$this->_fields = Plugin::instance()->form->get_only_form_fields(
			$this->request['form_id'],
			array( 'submit-field', 'form-break-field', 'heading-field', 'group-break-field' )
		);

		$this->_request_values = $this->get_values_from_request();

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

}
<?php


namespace Jet_Form_Builder;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Request_Exception;

class Request_Handler {
	public $request;
	public $errors;

	private $repeaters = array();

	const REPEATERS_SETTINGS = '__repeaters_settings';

	public function __construct( $request ) {
		$this->request = $request;
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
			$raw      = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

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
	 * Get submitted form data
	 *
	 * @return array [type] [description]
	 * @throws Request_Exception
	 */
	public function get_form_data() {

		$fields        = Plugin::instance()->form->get_only_form_fields( $this->request['form_id'] );
		$data          = array();
		$errors        = array();
		$invalid_email = true;
		$request       = $this->get_values_from_request();

		$skip_fields = array( 'submit-field', 'form-break-field', 'heading-field', 'group-break-field' );

		foreach ( $fields as $field ) {
			$settings = $field['attrs'];
			$required = ! empty( $settings['required'] ) ? $settings['required'] : '';
			$name     = isset( $settings['name'] ) ? $settings['name'] : 'field_name';
			$value    = isset( $request[ $name ] ) ? $request[ $name ] : '';

			$type = Plugin::instance()->form->field_name( $field['blockName'] );


			if ( in_array( $type, $skip_fields ) ) {
				continue;
			}

			if ( ! $this->is_field_visible( $settings ) ) {
				continue;
			}

			$is_repeater = false;

			if ( in_array( $type, array( 'date-field', 'datetime-field' ) ) && ! empty( $settings['is_timestamp'] ) ) {
				$value = strtotime( $value );
			}


			if ( 'repeater-field' === $type ) {
				$is_repeater                          = true;
				$in_repeater                          = true;
				$current_repeater                     = $name;
				$this->repeaters[ $settings['name'] ] = $settings;
			} else {
				$in_repeater      = false;
				$current_repeater = null;
			}

			if ( ! $is_repeater && $in_repeater ) {
				if ( 'media' === $settings['type'] && ! empty( $data[ $current_repeater ] ) ) {
					foreach ( $data[ $current_repeater ] as $index => $row ) {
						if ( ! empty( $row[ $name ] ) ) {

							$value = json_decode( wp_unslash( $row[ $name ] ), true );

							if ( ! empty( $settings['insert_attachment'] ) && ! empty( $settings['value_format'] ) && 'id' === $settings['value_format'] ) {
								if ( ! is_array( $value ) ) {
									$value = ! empty( $value ) ? absint( $value ) : null;
								} else {
									$value = implode( ',', $value );
								}
							}

							$row[ $name ]                        = $value;
							$data[ $current_repeater ][ $index ] = $row;
						}
					}
				}
				continue;
			}

			if ( 'media-field' === $type ) {

				$value = json_decode( wp_unslash( $value ), true );

				if ( ! empty( $settings['insert_attachment'] ) && ! empty( $settings['value_format'] ) && 'id' === $settings['value_format'] ) {
					if ( ! is_array( $value ) ) {
						$value = absint( $value );
					} else {
						$value = implode( ',', $value );
					}
				}

			}

			if ( 'wysiwyg-field' === $type ) {
				$required = false;
				$value    = Tools::sanitize_wysiwyg( $value );
			}

			if ( isset( $settings['field_type'] ) && 'text-field' === $type && 'email' === $settings['field_type'] && ! is_email( $value ) ) {
				throw new Request_Exception( 'invalid_email' );
			}

			/*if ( is_array( $value ) && ! $is_repeater ) {
				$value = implode( ', ', $value );
			}*/

			if ( $required && empty( $value ) ) {
				throw new Request_Exception( 'empty_field' );
			}

			$data[ $name ] = $value;

		}

		if ( ! Plugin::instance()->captcha->verify( $this->request['form_id'], $this->request['is_ajax'] ) ) {
			throw new Request_Exception( 'captcha_failed' );
		}

		$data = apply_filters( 'jet-form-builder/form-handler/form-data', $data, $this->request['form_id'], $fields );

		return $this->merge_with_base_request( $data );
	}


	/**
	 * Returns true if field is visible
	 *
	 * @param array $field [description]
	 *
	 * @return boolean        [description]
	 */
	public function is_field_visible( $field = array() ) {

		// For backward compatibility and hidden fields
		if ( empty( $field['visibility'] ) ) {
			return true;
		}

		// If is visible for all - show field
		if ( 'all' === $field['visibility'] ) {
			return true;
		}

		// If is visible for logged in users and user is logged in - show field
		if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
			return true;
		}

		// If is visible for not logged in users and user is not logged in - show field
		if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
			return true;
		}

		return false;

	}
}
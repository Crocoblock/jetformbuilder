<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Security\Wp_Nonce_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

class Request_Handler {

	public $_fields        = array();
	private $request_types = array();
	private $request_attrs = array();
	private $raw_request   = array();

	public function set_request_type( array $types ): Request_Handler {
		$this->request_types = array_merge( $this->request_types, $types );

		return $this;
	}

	public function set_request_attrs( array $attrs ): Request_Handler {
		$this->request_attrs = array_merge( $this->request_attrs, $attrs );

		return $this;
	}

	public function get_types(): array {
		return $this->request_types;
	}

	public function get_attrs(): array {
		return $this->request_attrs;
	}

	/**
	 * @param string $name
	 * @param string $field_type
	 *
	 * @return bool
	 */
	public function is_type( string $name, string $field_type ): bool {
		return ( ( $this->request_types[ $name ] ?? false ) === $field_type );
	}

	/**
	 * @param string $name
	 *
	 * @return array
	 */
	public function get_attrs_by_name( string $name ): array {
		return $this->request_attrs[ $name ] ?? array();
	}

	/**
	 * Get form values from request
	 *
	 * @return [type] [description]
	 */
	public function get_values_from_request() {
		// phpcs:disable WordPress.Security

		if ( ! jet_fb_handler()->is_ajax() ) {
			return $_POST;
		}

		$prepared = array();
		$raw      = ! empty( $_POST['values'] ) ? Tools::sanitize_recursive( wp_unslash( $_POST['values'] ) ) : array();

		// phpcs:enable WordPress.Security

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
	}

	private function get_raw_request(): array {
		$this->_fields = Block_Helper::get_blocks_by_post(
			jet_fb_handler()->get_form_id()
		);

		$values = $this->get_values_from_request();

		Live_Form::instance()
				->set_form_id( jet_fb_handler()->get_form_id() )
				->set_specific_data_for_render();

		return apply_filters( 'jet-form-builder/request-handler/request', $values );
	}

	/**
	 * Get submitted form data
	 *
	 * @return array [type] [description]
	 * @throws Request_Exception
	 */
	public function get_form_data(): array {
		$this->raw_request = $this->get_raw_request();
		$request           = Parser_Manager::instance()->get_values_fields( $this->_fields, $this->raw_request );

		if ( ! Error_Handler::instance()->empty_errors() ) {
			throw new Request_Exception(
				'validation_failed',
				Error_Handler::instance()->errors(),
				$request
			);
		}

		return apply_filters( 'jet-form-builder/form-handler/form-data', $request, $this );
	}

	/**
	 * @return array
	 */
	public function get_request(): array {
		return $this->raw_request;
	}

	/**
	 * @param $field_name
	 * @param $attr_name
	 * @param false $if_not_exist
	 *
	 * @return mixed
	 */
	public function get_attr( $field_name, $attr_name, $if_not_exist = false ) {
		$attrs = $this->get_attrs_by_name( $field_name );

		return $attrs[ $attr_name ] ?? $if_not_exist;
	}


	/**
	 * @deprecated since 2.0.0
	 * Use jfb_request_handler()->get_single_attr instead
	 *
	 * @param $field_name
	 * @param string $attr_name
	 *
	 * @return array
	 */
	public function get_field_attrs_by_name( $field_name, $attr_name = '', $if_empty = false ) {
		return $this->get_attr( $field_name, $attr_name, $if_empty );
	}

}

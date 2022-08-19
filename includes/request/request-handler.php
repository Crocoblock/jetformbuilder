<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Security\Wp_Nonce_Tools;
use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Resources\Sanitize_File_Exception;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

class Request_Handler {

	public $_fields = array();
	private $request_types = array();
	private $request_attrs = array();
	private $raw_request = array();
	private $files = array();

	const FILE_PROPERTIES = array( 'name', 'size', 'error', 'type', 'tmp_name' );

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

	private function get_raw_files(): array {
		$response = array();

		foreach ( $_FILES as $fields_name => $files ) {
			$is_repeater = isset( $files['name'][0] ) && is_array( $files['name'][0] );

			if ( $is_repeater ) {
				$response[ $fields_name ] = $this->get_repeating_raw_files( $files );

				continue;
			}

			$is_collection = is_array( $files['name'] );

			if ( ! $is_collection ) {
				try {
					$file = new File( $files );
				} catch ( Sanitize_File_Exception $exception ) {
					continue;
				}
				$response[ $fields_name ] = $file;

				continue;
			}

			$count_collection = count( $files['name'] );
			$collection       = array();

			for ( $index = 0; $index < $count_collection; $index ++ ) {
				$file = array();

				foreach ( self::FILE_PROPERTIES as $property ) {
					$file[ $property ] = $files[ $property ][ $index ];
				}

				$collection[ $index ] = $file;
			}

			$response[ $fields_name ] = ( new File_Collection() )->push_files( $collection );
		}

		return $response;
	}

	/**
	 *
	 */
	private function get_repeating_raw_files( array $files ): array {
		$rows     = count( $files['name'] );
		$repeater = array();

		for ( $current = 0; $current < $rows; $current ++ ) {
			$row = array();

			foreach ( self::FILE_PROPERTIES as $property ) {
				foreach ( $files[ $property ][ $current ] as $field_name => $values ) {
					if ( ! isset( $row[ $field_name ] ) ) {
						$row[ $field_name ] = array();
					}

					if ( is_array( $values ) ) {
						$count_values = count( $values );

						for ( $index_value = 0; $index_value < $count_values; $index_value ++ ) {
							if ( ! isset( $row[ $field_name ][ $index_value ] ) ) {
								$row[ $field_name ][ $index_value ] = array();
							}
							$row[ $field_name ][ $index_value ][ $property ] = $values[ $index_value ];
						}
					} else {
						$row[ $field_name ][ $property ] = $values;
					}
				}
			}
			unset( $field_name, $values );

			foreach ( $row as $field_name => $values ) {
				if ( isset( $values[0] ) ) {
					$row[ $field_name ] = ( new File_Collection() )->push_files( $values );
				} else {
					try {
						$file = new File( $values );
					} catch ( Sanitize_File_Exception $exception ) {
						unset( $row[ $field_name ] );
						continue;
					}
					$row[ $field_name ] = $file;
				}
			}

			$repeater[ $current ] = $row;
		}

		return $repeater;
	}

	private function get_raw_request(): array {
		$this->_fields = Block_Helper::get_blocks_by_post(
			jet_fb_handler()->get_form_id()
		);

		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$values = Tools::sanitize_recursive( wp_unslash( $_POST ) );

		Live_Form::instance()
				->set_form_id( jet_fb_handler()->get_form_id() )
				->set_specific_data_for_render();

		return apply_filters( 'jet-form-builder/request-handler/request', $values );
	}

	/**
	 * Get submitted form data
	 *
	 * @throws Action_Exception|Request_Exception
	 */
	public function set_form_data() {
		$this->raw_request = $this->get_raw_request();
		$this->files       = $this->get_raw_files();

		$context = ( new Parser_Context() )
			->set_files_context( $this->files )
			->set_request_context( $this->raw_request );

		$request = apply_filters(
			'jet-form-builder/form-handler/form-data',
			Parser_Manager::instance()->get_values_fields( $this->_fields, $context ),
			$this
		);

		jet_fb_action_handler()->add_request( $request );

		if ( Error_Handler::instance()->empty_errors() ) {
			return;
		}

		jet_fb_events()->execute( Bad_Request_Event::class );

		throw new Request_Exception(
			'validation_failed',
			Error_Handler::instance()->errors(),
			$request
		);
	}

	/**
	 * @return array
	 */
	public function get_request(): array {
		return $this->raw_request;
	}

	/**
	 * @return File[]|File_Collection[]|array[]
	 */
	public function get_files(): array {
		return $this->files;
	}

	public function update_file( string $name, $file ): Request_Handler {
		$this->files[ $name ] = $file;

		return $this;
	}

	/**
	 * @param $field_name
	 * @param $attr_name
	 * @param false $if_not_exist
	 *
	 * @return mixed
	 */
	public function get_attr(
		$field_name, $attr_name, $if_not_exist = false
	) {
		$attrs = $this->get_attrs_by_name( $field_name );

		return $attrs[ $attr_name ] ?? $if_not_exist;
	}


	/**
	 * @param $field_name
	 * @param string $attr_name
	 *
	 * @return array
	 * @deprecated since 2.0.0
	 * Use jfb_request_handler()->get_attr instead
	 */
	public function get_field_attrs_by_name(
		$field_name, $attr_name = '', $if_empty = false
	) {
		return $this->get_attr( $field_name, $attr_name, $if_empty );
	}

}

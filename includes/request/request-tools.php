<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Tools;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Resources\Sanitize_File_Exception;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Resources\Uploaded_Collection;
use Jet_Form_Builder\Classes\Resources\Uploaded_File;
use Jet_Form_Builder\Classes\Tools;

class Request_Tools {

	const FILE_PROPERTIES = array( 'name', 'size', 'error', 'type', 'tmp_name' );

	public static function get_files( array $initial ): array {
		$response = array();

		foreach ( $initial as $fields_name => $files ) {
			$is_repeater = isset( $files['name'][0] ) && is_array( $files['name'][0] );

			if ( $is_repeater ) {
				$response[ $fields_name ] = static::get_repeater_files( $files );

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

			for ( $index = 0; $index < $count_collection; $index++ ) {
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

	public static function get_repeater_files( array $files ): array {
		$rows     = count( $files['name'] );
		$repeater = array();

		for ( $current = 0; $current < $rows; $current++ ) {
			$row = array();

			foreach ( self::FILE_PROPERTIES as $property ) {
				foreach ( $files[ $property ][ $current ] as $field_name => $values ) {
					if ( ! isset( $row[ $field_name ] ) ) {
						$row[ $field_name ] = array();
					}

					if ( is_array( $values ) ) {
						$count_values = count( $values );

						for ( $index_value = 0; $index_value < $count_values; $index_value++ ) {
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


	/**
	 * @param string $field_name
	 *
	 * @return false|Media_Block_Value
	 */
	public static function get_file( string $field_name ) {
		$file = jet_fb_request_handler()->get_file( $field_name );

		if ( false !== $file ) {
			return $file;
		}

		$file_data = jet_fb_action_handler()->request_data[ $field_name ] ?? false;

		// parse value in json format (both)
		if ( is_string( $file_data ) && ! is_numeric( $file_data ) ) {
			$decoded = Tools::decode_json( $file_data );

			if ( ! is_null( $decoded ) ) {
				$file_data = $decoded;
			}
		}

		if ( is_string( $file_data ) ) {
			$file_data = explode( ',', $file_data );
		}

		if ( ! is_array( $file_data ) ) {
			return false;
		}

		if ( empty( $file_data[0] ) ) {
			return File_Tools::create_uploaded_file( $file_data );
		}

		$collection = array();

		foreach ( $file_data as $item ) {
			$collection[] = File_Tools::create_uploaded_file( $item );
		}

		return new Uploaded_Collection( $collection );
	}

}

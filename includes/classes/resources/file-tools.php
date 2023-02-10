<?php


namespace Jet_Form_Builder\Classes\Resources;


class File_Tools {

	public static function get_uploaded( File $file, $preset ) {
		if ( $preset instanceof Uploaded_File && self::is_same_file( $file, $preset ) ) {
			return $preset;
		}

		if ( ! is_array( $preset ) ) {
			return false;
		}

		/** @var Uploaded_File $uploaded */
		foreach ( $preset as $uploaded ) {
			if ( self::is_same_file( $file, $uploaded ) ) {
				return $uploaded;
			}
		}

		return false;
	}

	protected static function is_same_file( File $file, Uploaded_File $uploaded_file ): bool {
		$info = pathinfo( $uploaded_file->get_url() );

		return $file->get_name() === ( $info['basename'] ?? '' );
	}

	public static function is_same_ext( string $file_name, string $need_ext ): bool {
		$ext = self::get_file_ext( $file_name );

		if ( 0 === strpos( $need_ext, '.' ) ) {
			$need_ext = substr( $need_ext, 1, strlen( $need_ext ) - 1 );
		}

		return $ext === $need_ext;
	}

	public static function get_file_ext( string $file_name ): string {
		$file_parts = explode( '.', $file_name );

		return end( $file_parts );
	}

	/**
	 * @param string|int $file_data
	 *
	 * @return Uploaded_File|false
	 */
	public static function create_uploaded_file( $file_data ) {
		if ( is_numeric( $file_data ) ) {
			$uploaded = new Uploaded_File();

			return $uploaded->set_attachment_id( $file_data );
		}

		if ( ! empty( $file_data['id'] ) && is_numeric( $file_data['id'] ) ) {
			return self::create_uploaded_file( $file_data['id'] );
		}

		if ( ! is_string( $file_data ) || false === parse_url( $file_data ) ) {
			return false;
		}

		$attachment_id = attachment_url_to_postid( $file_data );

		return $attachment_id ? self::create_uploaded_file( $attachment_id ) : false;
	}

}
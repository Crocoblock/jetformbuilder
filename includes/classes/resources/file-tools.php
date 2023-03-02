<?php


namespace Jet_Form_Builder\Classes\Resources;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

}
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

}
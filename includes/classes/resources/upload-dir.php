<?php


namespace Jet_Form_Builder\Classes\Resources;


class Upload_Dir {

	/**
	 * Change upload directory for JetEngine uploads
	 *
	 * @param  [type] $pathdata [description]
	 *
	 * @return [type]           [description]
	 */
	public static function apply_upload_dir( $pathdata ) {

		$dir = static::get_upload_dir();

		if ( empty( $pathdata['subdir'] ) ) {
			$pathdata['path']   = $pathdata['path'] . '/' . $dir;
			$pathdata['url']    = $pathdata['url'] . '/' . $dir;
			$pathdata['subdir'] = '/' . $dir;
		} else {
			$new_subdir         = '/' . $dir . $pathdata['subdir'];
			$pathdata['path']   = str_replace( $pathdata['subdir'], $new_subdir, $pathdata['path'] );
			$pathdata['url']    = str_replace( $pathdata['subdir'], $new_subdir, $pathdata['url'] );
			$pathdata['subdir'] = $new_subdir;
		}

		return $pathdata;
	}

	/**
	 * Returns upload subdirectory
	 *
	 * @return [type] [description]
	 */
	public static function get_upload_dir() {

		$user_id       = get_current_user_id();
		$user_dir_name = $user_id ? $user_id : 'guest';
		$user_dir_name = apply_filters( 'jet-form-builder/file-upload/user-dir-name', $user_dir_name );

		return static::upload_base() . '/' . $user_dir_name;
	}

	/**
	 * Returns upload base directory
	 *
	 * @return [type] [description]
	 */
	public static function upload_base() {
		return apply_filters( 'jet-form-builder/file-upload/dir', 'jet-form-builder' );
	}

}
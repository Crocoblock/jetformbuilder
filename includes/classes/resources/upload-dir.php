<?php


namespace Jet_Form_Builder\Classes\Resources;

use Jet_Form_Builder\Live_Form;

class Upload_Dir {

	/**
	 * Change upload directory for JetEngine uploads
	 *
	 * @param  [type] $pathdata [description]
	 *
	 * @return [type]           [description]
	 */
	public static function apply_upload_dir( $pathdata ) {
		// jet-form-builder
		$base = static::upload_base();

		// user-based dynamic dirname
		$dir = static::get_upload_dir();

		if ( empty( $pathdata['subdir'] ) ) {
			$path = $pathdata['path'] . '/' . $base;

			$pathdata['subdir'] = '/' . $base . '/' . $dir;
			$pathdata['path']   = $pathdata['path'] . $pathdata['subdir'];
			$pathdata['url']    = $pathdata['url'] . $pathdata['subdir'];
		} else {
			$path = $pathdata['basedir'] . '/' . $base;

			$pathdata['subdir'] = '/' . $base . '/' . $dir . $pathdata['subdir'];
			$pathdata['path']   = $pathdata['basedir'] . $pathdata['subdir'];
			$pathdata['url']    = $pathdata['baseurl'] . $pathdata['subdir'];
		}
		self::create_index( $path );
		self::create_index( $pathdata['path'] );

		self::create_htaccess( $path );

		return $pathdata;
	}

	public static function apply_temp_dir( $pathdata ) {
		// jet-form-builder
		$base = static::upload_base();

		$pathdata['subdir'] = '/' . $base . '/temp';
		$pathdata['path']   = $pathdata['path'] . $pathdata['subdir'];
		$pathdata['url']    = $pathdata['url'] . $pathdata['subdir'];

		return $pathdata;
	}

	/**
	 * Returns upload subdirectory
	 *
	 * @return [type] [description]
	 */
	public static function get_upload_dir() {
		$user_id       = get_current_user_id();
		$user_dir_name = md5( $user_id . Live_Form::instance()->form_id );

		return apply_filters( 'jet-form-builder/file-upload/user-dir-name', $user_dir_name );
	}

	/**
	 * Returns upload base directory
	 *
	 * @return [type] [description]
	 */
	public static function upload_base() {
		return apply_filters( 'jet-form-builder/file-upload/dir', 'jet-form-builder' );
	}

	public static function create_index( $path ) {
		if ( ! is_dir( $path ) ) {
			return false;
		}

		$path  = trailingslashit( $path ) . 'index.html';
		$index = wp_normalize_path( $path );

		if ( file_exists( $index ) ) {
			return false;
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions
		return file_put_contents( $index, '' );
	}

	public static function create_htaccess( $path ) {
		if ( ! is_dir( $path ) ) {
			return false;
		}


		$path  = trailingslashit( $path ) . '.htaccess';
		$index = wp_normalize_path( $path );

		if ( file_exists( $index ) ) {
			return false;
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions
		return file_put_contents( $index, static::htaccess_content() );
	}

	protected static function htaccess_content(): string {
		return '
# Disable directory browsing 
Options -Indexes

# Hide the contents of directories
IndexIgnore *
';
	}

}

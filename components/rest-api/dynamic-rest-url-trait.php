<?php


namespace JFB_Components\Rest_Api;

use Jet_Form_Builder\Classes\Http\Http_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Dynamic_Rest_Url_Trait {

	public static function get_dynamic_base( array $path_args ): string {
		return Http_Tools::replace_path_args( static::get_rest_base(), $path_args );
	}

	public static function dynamic_rest_url( array $path ): string {
		return rest_url( self::dynamic_base( $path ) );
	}

	public static function dynamic_base( array $path_args ): string {
		return ( '/' . static::get_namespace() . '/' . static::get_dynamic_base( $path_args ) );
	}

	public static function dynamic_rest_base( array $path_args ): string {
		return ( '/' . rest_get_url_prefix() . self::dynamic_base( $path_args ) );
	}

}

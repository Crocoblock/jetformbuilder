<?php


namespace Jet_Form_Builder\Rest_Api;


trait Dynamic_Rest_Url_Trait {

	abstract public static function get_rest_static_base(): string;

	abstract public static function get_rest_dynamic_base(): string;

	public static function get_rest_base() {
		return static::get_rest_static_base() . static::get_rest_dynamic_base();
	}

	public static function get_dynamic_base( $path = '' ): string {
		return static::get_rest_static_base() . $path;
	}

	public static function dynamic_rest_url( $path = '' ): string {
		return rest_url( self::dynamic_base( $path ) );
	}

	public static function dynamic_base( $path = '' ): string {
		return ( '/' . static::get_namespace() . '/' . static::get_dynamic_base( $path ) );
	}

	public static function dynamic_rest_base( $path = '' ): string {
		return ( '/' . rest_get_url_prefix() . self::dynamic_base( $path ) );
	}

}
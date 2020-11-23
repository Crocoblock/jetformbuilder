<?php


namespace Jet_Form_Builder\Compatibility;


abstract class Base_Compatibility {
	public static $is_activated = null;

	public static function is_activated() {
		if ( is_null( static::$is_activated ) ) {
			static::$is_activated = static::check();
		}

		return static::$is_activated;
	}

	abstract public static function check();

}


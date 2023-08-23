<?php


namespace JFB_Modules\Sanitize_Value\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Value_Sanitizer_Settings_It {

	public function set_settings( array $settings );

	public function get_settings(): array;

	public function get_setting( string $name );

	public function set_setting( string $name, $value );

}

<?php


namespace JFB_Modules\Sanitize_Value\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Value_Sanitizer_Settings_Trait {

	private $settings = array();

	public function set_settings( array $settings ) {
		$this->settings = $settings;
	}

	public function get_settings(): array {
		return $this->settings;
	}

	public function get_setting( string $name ) {
		return $this->settings[ $name ] ?? '';
	}

	public function set_setting( string $name, $value ) {
		$this->settings[ $name ] = $value;
	}

}

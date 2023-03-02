<?php


namespace Jet_Form_Builder\Migrations;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Migration_Exception extends \Exception {

	protected $version = '';

	public function set_version( string $version ): Migration_Exception {
		$this->version = $version;

		return $this;
	}

	public function get_version(): string {
		return $this->version;
	}

}
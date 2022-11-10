<?php


namespace Jet_Form_Builder\Migrations;


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
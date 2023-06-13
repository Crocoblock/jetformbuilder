<?php


namespace JFB_Components\Export\Traits;

use JFB_Components\Export\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Export_Controller_Trait {

	protected $exporter;

	public function set_exporter( Interfaces\Base_Export_It $exporter ) {
		$this->exporter = $exporter;
	}

	public function get_exporter(): Interfaces\Base_Export_It {
		return $this->exporter;
	}

}
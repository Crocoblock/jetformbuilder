<?php


namespace Jet_Form_Builder\Dev_Mode;


use Jet_Form_Builder\Classes\Instance_Trait;

/**
 * @method static Manager instance()
 *
 * Class Manager
 * @package Jet_Form_Builder\Dev_Mode
 */
class Manager {

	use Instance_Trait;

	private $is_active = false;

	private function __construct() {
		$this->setup_mode();
	}

	public function active() {
		return $this->is_active;
	}

	private function setup_mode() {
		$this->is_active = apply_filters( 'jet-form-builder/dev-mode/activate', false );
	}


}
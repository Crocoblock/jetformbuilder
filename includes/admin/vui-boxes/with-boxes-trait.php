<?php


namespace Jet_Form_Builder\Admin\Vui_Boxes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait With_Boxes_Trait {

	private $boxes;

	public function boxes(): Boxes_Repository {
		if ( ! $this->boxes ) {
			$this->boxes = new Boxes_Repository();
		}

		return $this->boxes;
	}

}

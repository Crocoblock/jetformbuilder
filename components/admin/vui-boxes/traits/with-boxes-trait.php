<?php


namespace JFB_Components\Admin\Vui_Boxes\Traits;

use JFB_Components\Admin\Vui_Boxes\Boxes_Repository;

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

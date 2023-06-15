<?php


namespace JFB_Components\Admin\Notices\Traits;

use JFB_Components\Admin\Notices\Notices_Repository;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait With_Notices_Trait {

	private $notices;

	public function notices(): Notices_Repository {
		if ( ! $this->notices ) {
			$this->notices = new Notices_Repository();
		}

		return $this->notices;
	}

}

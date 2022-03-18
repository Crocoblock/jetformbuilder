<?php


namespace Jet_Form_Builder\Admin\Notices;


trait With_Notices_Trait {

	private $notices;

	public function notices(): Notices_Repository {
		if ( ! $this->notices ) {
			$this->notices = new Notices_Repository();
		}

		return $this->notices;
	}

}
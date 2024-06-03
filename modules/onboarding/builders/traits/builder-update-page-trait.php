<?php

namespace JFB_Modules\Onboarding\Builders\Traits;

trait Builder_Update_Page_Trait {

	protected $page_id = 0;

	public function set_page_id( int $page_id ) {
		$this->page_id = $page_id;
	}

	public function get_page_id(): int {
		return $this->page_id;
	}

}

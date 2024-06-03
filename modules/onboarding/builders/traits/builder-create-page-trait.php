<?php

namespace JFB_Modules\Onboarding\Builders\Traits;

trait Builder_Create_Page_Trait {

	protected $title = '';

	public function set_title( string $title ) {
		$this->title = $title;
	}

	public function get_title(): string {
		return $this->title;
	}

}

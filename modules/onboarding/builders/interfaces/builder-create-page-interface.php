<?php

namespace JFB_Modules\Onboarding\Builders\Interfaces;

interface Builder_Create_Page_Interface extends Builder_Interface {

	public function set_title( string $title );

	public function get_title(): string;

}

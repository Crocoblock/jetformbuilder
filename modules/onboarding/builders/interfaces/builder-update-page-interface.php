<?php

namespace JFB_Modules\Onboarding\Builders\Interfaces;

use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;

interface Builder_Update_Page_Interface extends Builder_Interface {

	public function set_page_id( int $page_id );

	public function get_page_id(): int;

}

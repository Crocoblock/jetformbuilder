<?php


namespace JFB_Components\Admin\Print_Page;

use JFB_Components\Admin\Print_Page\Interfaces\Page_Assets_It;
use JFB_Components\Admin\Print_Page\Interfaces\Page_Output_It;
use JFB_Components\Admin\Print_Page\Traits\Page_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Footer implements Page_Assets_It, Page_Output_It {

	use Page_Assets_Trait;

	public function output() {
		echo '</div></div>';
		$this->do_styles();
		$this->do_scripts();
		echo '</body></html>';
	}

}
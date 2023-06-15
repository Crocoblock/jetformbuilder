<?php


namespace JFB_Components\Admin\Notices\Interfaces;

use JFB_Components\Admin\Notices\Base_Notice;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Admin_Notices_It {

	public function get_notices(): array;

	public function register_notice( Base_Notice $notice ): Admin_Notices_It;

}

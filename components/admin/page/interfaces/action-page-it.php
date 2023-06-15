<?php


namespace JFB_Components\Admin\Page\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Action_Page_It extends Admin_Page_It {

	public function check_permission(): bool;

}
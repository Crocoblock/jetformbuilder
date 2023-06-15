<?php


namespace JFB_Components\Admin\Print_Page\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Page_Output_It {

	public function output();

}
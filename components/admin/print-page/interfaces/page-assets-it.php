<?php


namespace JFB_Components\Admin\Print_Page\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Page_Assets_It {

	public function add_script( string $handle );

	public function add_scripts( array $handles );

	public function add_style( string $handle );

	public function add_styles( array $handles );

	public function do_scripts();

	public function do_styles();

}

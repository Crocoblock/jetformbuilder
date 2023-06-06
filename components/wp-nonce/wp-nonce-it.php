<?php


namespace JFB_Components\Wp_Nonce;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


interface Wp_Nonce_It {

	public function get_wp_nonce(): Wp_Nonce;

	public function set_wp_nonce( Wp_Nonce $nonce );

}

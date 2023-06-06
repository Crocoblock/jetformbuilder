<?php


namespace JFB_Components\Wp_Nonce;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Wp_Nonce_Trait {

	/**
	 * @var Wp_Nonce
	 */
	protected $wp_nonce;

	public function get_wp_nonce(): Wp_Nonce {
		return $this->wp_nonce;
	}

	public function set_wp_nonce( Wp_Nonce $nonce ) {
		$this->wp_nonce = $nonce;
	}

}
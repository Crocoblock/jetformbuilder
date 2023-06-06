<?php


namespace JFB_Modules\Gateways\Export;

// If this file is called directly, abort.
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Export_Controller implements Wp_Nonce_It {

	use Wp_Nonce_Trait;

}
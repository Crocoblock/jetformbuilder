<?php


namespace JFB_Modules\Gateways\Paypal\Api_Actions;

use JFB_Modules\Gateways\Base_Gateway_Action;
use JFB_Modules\Gateways\Gateway_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Action extends Base_Gateway_Action {

	public function base_url(): string {
		return Gateway_Manager::instance()->is_sandbox
			? 'https://api-m.sandbox.paypal.com/'
			: 'https://api-m.paypal.com/';
	}

	public function get_request_args(): array {
		$args = parent::get_request_args();

		$args['user-agent'] = sprintf(
			'JetFormBuilder/%s; %s',
			jet_form_builder()->get_version(),
			get_bloginfo( 'name' )
		);

		return $args;
	}

}

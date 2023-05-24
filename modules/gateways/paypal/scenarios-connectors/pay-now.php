<?php


namespace JFB_Modules\Gateways\Paypal\Scenarios_Connectors;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Pay_Now {

	public static function scenario_id() {
		return 'PAY_NOW';
	}

}

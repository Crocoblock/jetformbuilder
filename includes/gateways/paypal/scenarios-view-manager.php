<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenarios_View_Repository;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Scenarios_View_Manager
 *
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_View_Manager extends Scenarios_View_Repository {

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/scenarios-view',
			array(
				new Scenarios_Views\Pay_Now(),
			)
		);
	}

}

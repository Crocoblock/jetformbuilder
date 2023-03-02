<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface With_Resource_It {

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function create_resource();

	/**
	 * @param $resource
	 *
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function save_resource( $resource );

}

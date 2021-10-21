<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

interface Scenario_With_Resource_It {

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
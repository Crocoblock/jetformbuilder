<?php


namespace Jet_Form_Builder\Gateways\Paypal;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Gateways\Scenarios_Abstract\Scenarios_Manager_Abstract;

/**
 * @method static Scenarios_Manager instance()
 *
 * Class Scenarios_Manager
 * @package Jet_Form_Builder\Gateways\Paypal
 */
class Scenarios_Manager extends Scenarios_Manager_Abstract {

	use Instance_Trait;

	public function __construct() {
		$this->set_logic_manager( new Scenarios_Logic_Manager() );
		$this->set_view_manager( new Scenarios_View_Manager() );

		parent::__construct();
	}

}
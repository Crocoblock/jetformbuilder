<?php


namespace JFB_Modules\Gateways\Paypal;

use Jet_Form_Builder\Classes\Instance_Trait;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenarios_Manager_Abstract;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Scenarios_Manager instance()
 *
 * Class Scenarios_Manager
 * @package JFB_Modules\Gateways\Paypal
 */
class Scenarios_Manager extends Scenarios_Manager_Abstract {

	use Instance_Trait;

	public function __construct() {
		$this->set_logic_manager( new Scenarios_Logic_Manager() );
		$this->set_view_manager( new Scenarios_View_Manager() );

		parent::__construct();
	}

}

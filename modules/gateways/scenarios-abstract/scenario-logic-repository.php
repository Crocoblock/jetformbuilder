<?php


namespace JFB_Modules\Gateways\Scenarios_Abstract;

use JFB_Components\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Scenario_Logic_Repository {

	use Repository_Pattern_Trait;

}

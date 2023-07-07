<?php


namespace JFB_Compatibility;

use JFB_Components\Module\Module_Controller_Trait;
use JFB_Components\Module\Module_Controller_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Compatibility_Controller implements Module_Controller_It {

	use Module_Controller_Trait;

	public function rep_instances(): array {
		return array(
			new Litespeed\Litespeed(),
			new Woocommerce\Woocommerce(),
			new Elementor\Elementor(),
			new Jet_Engine\Jet_Engine(),
			new Jet_Appointment\Jet_Appointment(),
			new Jet_Booking\Jet_Booking(),
		);
	}

}

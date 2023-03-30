<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine\Preset_Sources;

use Jet_Form_Builder\Presets\Sources\Preset_Source_User;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_User extends Preset_Source_User {

	protected function get_queried_user() {
		return jet_engine()->listings->data->get_queried_user_object();
	}

}

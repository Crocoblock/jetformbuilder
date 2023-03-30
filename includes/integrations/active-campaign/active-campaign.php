<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Integrations\Active_Campaign\Actions\Active_Campaign_Action;
use Jet_Form_Builder\Integrations\Active_Campaign\Rest_Api\Rest_Controller;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Active_Campaign {

	public function __construct() {
		( new Rest_Controller() )->rest_api_init();

		add_action( 'jet-form-builder/actions/register', array( $this, 'add_action' ) );
	}

	public function add_action( Manager $manager ) {
		$manager->register_action_type( new Active_Campaign_Action() );
	}

	public static function register() {
		new static();
	}

}

<?php

namespace JFB_Modules\Active_Campaign\Actions;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use JFB_Modules\Active_Campaign\Methods\Contact_Modifier;
use JFB_Modules\Active_Campaign\Rest_Api\Editor_Fetch_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Active_Campaign_Action extends Base {

	public $option_name = 'active-campaign-tab';

	public function get_name() {
		return __( 'ActiveCampaign', 'jet-form-builder' );
	}

	public function get_id() {
		return 'active_campaign';
	}

	/**
	 * Run a hook notification
	 *
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$settings = $this->global_settings(
			array(
				'api_url' => '',
				'api_key' => '',
			)
		);

		$list_id    = $this->settings['list_id'] ?? 0;
		$tags       = $this->settings['tags'] ?? '';
		$fields_map = $this->settings['fields_map'] ?? array();

		( new Contact_Modifier() )
			->set_request( $request )
			->set_fields_map( $fields_map, true )
			->set_api_key( $settings['api_key'] )
			->set_api_url( $settings['api_url'] )
			->set( '#list', $list_id )
			->set( '#tags', $tags )
			->run();
	}

}

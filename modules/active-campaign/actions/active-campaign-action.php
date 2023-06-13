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

	public function action_attributes() {
		return array(
			'api_key'    => array(
				'default' => '',
				'path'    => 'activecampaign/api_key',
			),
			'api_url'    => array(
				'default' => '',
				'path'    => 'activecampaign/api_url',
			),
			'lists'      => array(
				'default' => '',
				'path'    => 'activecampaign/lists',
			),
			'fields_map' => array(
				'default' => '',
				'path'    => 'activecampaign/fields_map',
			),
			'isValidAPI' => array(
				'default' => '',
				'path'    => 'activecampaign/isValidAPI',
			),
			'list_id'    => array(
				'default' => '',
				'path'    => 'activecampaign/list_id',
			),
			'tags'       => array(
				'default' => '',
				'path'    => 'activecampaign/tags',
			),
		);
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


	public function editor_labels() {
		return array(
			'api_data'         => __( 'API Data', 'jet-form-builder' ),
			'api_key'          => __( 'API Key', 'jet-form-builder' ),
			'api_url'          => __( 'API URL', 'jet-form-builder' ),
			'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
			'retry_request'    => __( 'Retry request', 'jet-form-builder' ),
			'list_id'          => __( 'List Id:', 'jet-form-builder' ),
			'update_list_ids'  => __( 'Update List', 'jet-form-builder' ),
			'tags'             => __( 'Tags:', 'jet-form-builder' ),
			'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			'use_global'       => __( 'Use Global Settings', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'api_key_link_prefix' => __( 'How to obtain your ActiveCampaign API URL and Key? More info', 'jet-form-builder' ),
			'api_key_link_suffix' => __( 'here', 'jet-form-builder' ),
			'api_key_link'        => 'https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API',
			'tags'                => __( 'Add as many tags as you want, comma separated.', 'jet-form-builder' ),
		);
	}

	/**
	 * Register custom action data for the editor
	 *
	 * @return array [description]
	 */
	public function action_data() {
		return array(
			'fetch' => array(
				'url'    => Editor_Fetch_Endpoint::rest_url(),
				'method' => Editor_Fetch_Endpoint::get_methods(),
			),
		);
	}

	/**
	 * Returns ActiveCampaign fields
	 *
	 * @return array
	 */
	private function get_fields() {
		return apply_filters(
			'jet-form-builder/action/activecampaign/fields',
			array(
				'email'              => __( 'Email', 'jet-form-builder' ),
				'first_name'         => __( 'First Name', 'jet-form-builder' ),
				'last_name'          => __( 'Last Name', 'jet-form-builder' ),
				'phone'              => __( 'Phone', 'jet-form-builder' ),
				'customer_acct_name' => __( 'Organization', 'jet-form-builder' ),
			)
		);
	}


}



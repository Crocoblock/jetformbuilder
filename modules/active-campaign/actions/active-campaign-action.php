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
			'list_id'          => __( 'List Id:', 'jet-form-builder' ),
			'update_list_ids'  => __( 'Update List', 'jet-form-builder' ),
			'tags'             => __( 'Tags:', 'jet-form-builder' ),
			'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			'use_global'       => __( 'Use Global Settings', 'jet-form-builder' ),
		);
	}


}

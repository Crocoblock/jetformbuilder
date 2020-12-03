<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Integrations\Active_Campaign_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Active_Campaign extends Integration_Base_Action {
	protected $action = 'jet_form_builder_get_activecampaign_data';

	public function get_name() {
		return __( 'ActiveCampaign', 'jet-form-builder' );
	}

	public function get_id() {
		return 'active_campaign';
	}

	public function api_handler( $settings ) {
		return new Active_Campaign_Handler( $settings );
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
		if ( empty( $this->settings['api_url'] ) || empty( $this->settings['api_key'] ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$body_args = array();

		$fields_map = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $request[ $field ] ) ) {
				continue;
			}

			$body_args[ $param ] = $request[ $field ];
		}

		$list_id = ! empty( $this->settings['list_id'] ) ? $this->settings['list_id'] : false;

		if ( $list_id ) {
			$body_args[ 'p[' . $list_id . ']' ] = $list_id;
		}

		if ( ! empty( $this->settings['tags'] ) ) {
			$body_args['tags'] = $this->settings['tags'];
		}

		if ( empty( $body_args['email'] ) ) {
			throw new Action_Exception( 'empty_field' );
		}

		$this->api_handler( $this->settings )->request( false, $body_args );
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormActiveCampaignData', array(
			'activecampaign_fields' => $this->get_fields(),
			'labels'                => array(
				'api_data'         => __( 'API Data', 'jet-form-builder' ),
				'api_key'          => __( 'API Key', 'jet-form-builder' ),
				'api_url'          => __( 'API URL', 'jet-form-builder' ),
				'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
				'list_id'          => __( 'List Id:', 'jet-form-builder' ),
				'update_list_ids'  => __( 'Update List', 'jet-form-builder' ),
				'tags'             => __( 'Tags:', 'jet-form-builder' ),
				'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			),
			'help'                  => array(
				'api_key_link_prefix' => __( 'How to obtain your ActiveCampaign API URL and Key? More info', 'jet-form-builder' ),
				'api_key_link_suffix' => __( 'here', 'jet-form-builder' ),
				'api_key_link'        => 'https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API',
				'tags'                => __( 'Add as many tags as you want, comma separated.', 'jet-form-builder' )
			),
		) );
	}

	/**
	 * Returns ActiveCampaign fields
	 *
	 * @return array
	 */
	private function get_fields() {
		return apply_filters( 'jet-form-builder/action/activecampaign/fields', array(
			'email'              => __( 'Email', 'jet-form-builder' ),
			'first_name'         => __( 'First Name', 'jet-form-builder' ),
			'last_name'          => __( 'Last Name', 'jet-form-builder' ),
			'phone'              => __( 'Phone', 'jet-form-builder' ),
			'customer_acct_name' => __( 'Organization', 'jet-form-builder' ),
		) );
	}


}



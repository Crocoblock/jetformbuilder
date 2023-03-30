<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 2.1.4
 * @link https://developers.activecampaign.com/reference/sync-a-contacts-data
 *
 * Class Sync_Contact_Action
 * @package Jet_Form_Builder\Integrations\Active_Campaign\Api
 */
class Sync_Contact_Action extends Base_Action {

	protected $contact = array();

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function action_endpoint() {
		return 'contact/sync';
	}

	public function action_body() {
		return array(
			'contact' => $this->contact,
		);
	}

	public function set_contact( array $contact ): self {
		$this->contact = $contact;

		return $this;
	}

}

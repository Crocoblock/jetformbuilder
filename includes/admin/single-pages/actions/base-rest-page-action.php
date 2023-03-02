<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Actions;

use Jet_Form_Builder\Admin\Pages\Actions\Base_Page_Action;
use Jet_Form_Builder\Rest_Api\Rest_Endpoint;
use Jet_Form_Builder\Rest_Api\Traits\Rest_Fetch_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Rest_Page_Action extends Base_Page_Action implements Rest_Fetch_Endpoint {

	public function get_payload(): array {
		return array();
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'endpoint' => ( new Rest_Endpoint( $this ) )->to_array(),
			'payload'  => $this->get_payload(),
		);
	}

}

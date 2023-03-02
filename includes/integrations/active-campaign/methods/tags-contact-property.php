<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\Add_Tag_To_Contact;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\Create_Tag_Action;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\List_All_Tags;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Tags_Contact_Property extends Base_Object_Property {

	// It can be empty
	// in action we use dynamic fetching properties
	public function get_label(): string {
		return '';
	}

	public function get_id(): string {
		return '#tags';
	}

	/**
	 * @param Abstract_Modifier|Contact_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( empty( $this->value ) ) {
			return;
		}

		/** @var Sync_Contact_Action $action */
		$action = $modifier->get_action();

		/** @var List_All_Tags $api_tags */
		$api_tags = ( new List_All_Tags() )
			->set_token( $modifier->token )
			->set_base( $modifier->url )
			->request();

		try {
			$api_tags->check_response_code()->response_body_as_array();
		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception( 'internal_error', $api_tags->get_request_args() );
		}

		$existed = $api_tags->to_array();

		$tags = array_map( 'trim', explode( ',', $this->value ) );

		foreach ( $tags as $index => $tag ) {
			// save tag id
			if ( isset( $existed[ $tag ] ) ) {
				$tags[ $index ] = $existed[ $tag ];

				continue;
			}
			$tags[ $index ] = $this->create_tag( $modifier, $tag );
		}

		foreach ( $tags as $current ) {
			$this->attach_tag( $modifier, $current, $action->contact_id );
		}
	}

	/**
	 * @param Contact_Modifier $modifier
	 * @param string $tag
	 *
	 * @return int
	 * @throws Action_Exception
	 */
	protected function create_tag( Contact_Modifier $modifier, string $tag ): int {
		/** @var Create_Tag_Action $api */
		$api = ( new Create_Tag_Action() )
			->set_token( $modifier->token )
			->set_base( $modifier->url );

		$api->set_tag( $tag );

		try {
			$response = $api->send_request();
		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception( 'internal_error', $api->get_request_args() );
		}

		return (int) ( $response['tag']['id'] ?? 0 );
	}

	/**
	 * @throws Action_Exception
	 */
	protected function attach_tag( Contact_Modifier $modifier, int $tag, int $contact ) {
		/** @var Add_Tag_To_Contact $api */
		$api = ( new Add_Tag_To_Contact() )
			->set_token( $modifier->token )
			->set_base( $modifier->url );

		$api->set_contact( $contact );
		$api->set_tag( $tag );

		try {
			$api->request()->check_response_code();
		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception( 'internal_error', $api->get_request_args() );
		}
	}

	public function get_value( Abstract_Modifier $modifier ) {
		throw new Silence_Exception();
	}
}
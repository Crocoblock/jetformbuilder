<?php


namespace JFB_Modules\Active_Campaign\Methods;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use JFB_Modules\Active_Campaign\Api\Update_List_Status;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class List_Contact_Property extends Base_Object_Property {

	// It can be empty
	// in action we use dynamic fetching properties
	public function get_label(): string {
		return '';
	}

	public function get_id(): string {
		return '#list';
	}

	/**
	 * @param Abstract_Modifier|Contact_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( ! is_numeric( $this->value ) ) {
			return;
		}
		/** @var Sync_Contact_Action $action */
		$action = $modifier->get_action();

		/** @var Update_List_Status $api */
		$api = ( new Update_List_Status() )
			->set_token( $modifier->token )
			->set_base( $modifier->url );

		$api->set_list( (int) $this->value )
			->set_contact( $action->contact_id );

		try {
			$api->send_request();
		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception( 'internal_error', $api->get_request_args() );
		}
	}

	public function get_value( Abstract_Modifier $modifier ) {
		throw new Silence_Exception();
	}
}

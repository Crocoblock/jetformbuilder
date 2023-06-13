<?php


namespace JFB_Modules\Active_Campaign\Methods;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Active_Campaign\Api\Sync_Contact_Action as Sync_Contact_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Contact_Modifier $modifier
 *
 * Class Sync_Contact_Action
 * @package JFB_Modules\Active_Campaign\Methods
 */
class Sync_Contact_Action extends Base_Modifier_Action {

	public $contact_id;

	public function get_id(): string {
		return 'sync';
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		/** @var Sync_Contact_Api $api */
		$api = ( new Sync_Contact_Api() )
			->set_token( $this->modifier->token )
			->set_base( $this->modifier->url );

		$api->set_contact( $this->modifier->source_arr );

		try {
			$response = $api->send_request();
		} catch ( Gateway_Exception $exception ) {
			throw new Action_Exception( 'internal_error' );
		}

		$this->contact_id = (int) ( $response['contact']['id'] ?? 0 );
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}
}

<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Update_Action extends Base_Modifier_Action {

	public function get_id(): string {
		return 'update';
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		$response = wp_update_user( $this->modifier->source_arr );

		if ( is_wp_error( $response ) ) {
			throw new Action_Exception(
				$response->get_error_message(),
				$response->get_error_data()
			);
		}
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return 'update_user' === jet_fb_action_handler()->get_current_action()->get_id();
	}
}
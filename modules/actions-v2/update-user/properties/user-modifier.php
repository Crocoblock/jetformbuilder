<?php

namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Modifier extends Abstract_Modifier {

	protected function get_properties(): Object_Properties_Collection {
		return new Object_Properties_Collection(
			array(
				new User_Id_Property(),
				new User_Role_Property(),
				new User_Email_Property(),
				new User_Password_Property(),
				new User_Confirm_Password_Property(),
				new First_Name_Property(),
				new Last_Name_Property(),
				new User_Url_Property(),
				new User_Meta_Property(),
				new Display_Name_Property(),
				new Description_Property(),
				new Nick_Name_Property(),
				new User_Nicename_Property(),
			)
		);
	}

	public function get_actions(): Collection {
		return apply_filters(
			'jet-form-builder/user-modifier/object-actions',
			new Collection(
				array(
					new Update_Action(),
				)
			)
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function run() {
		if ( ! is_user_logged_in() && ! Tools::is_webhook() ) {
			// Only logged in users can edit other users
			throw new Action_Exception( 'internal_error' );
		}

		parent::run();
	}
}

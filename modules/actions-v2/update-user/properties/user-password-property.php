<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Password_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'password';
	}

	public function get_attach_id(): string {
		return 'user_pass';
	}

	public function get_label(): string {
		return __( 'Password', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$this->value = wp_check_invalid_utf8( $value, true );
		$confirm     = $modifier->get( 'confirm_password' );

		if ( is_null( $confirm->value ) ) {
			return;
		}

		$confirm = wp_check_invalid_utf8( $confirm->value, true );

		if ( $confirm !== $this->value ) {
			throw new Action_Exception( 'password_mismatch' );
		}
	}

	public function get_related(): array {
		return array( 'confirm_password' );
	}

}

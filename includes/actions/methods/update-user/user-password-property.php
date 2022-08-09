<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Password_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'password';
	}

	public function get_label(): string {
		return __( 'Password', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$modifier->throw_if_empty();
		$modifier->current_prop = 'user_pass';

		$modifier->current_value = wp_check_invalid_utf8( $modifier->current_value, true );
		$confirm                 = $modifier->get_value_by_prop( 'confirm_password' );

		if ( false === $confirm ) {
			return;
		}

		$confirm = wp_check_invalid_utf8( $confirm, true );

		if ( $confirm !== $modifier->current_value ) {
			throw new Action_Exception( 'password_mismatch' );
		}
	}

}
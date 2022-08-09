<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Email_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'email';
	}

	public function get_label(): string {
		return __( 'Email', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$modifier->throw_if_empty();
		$modifier->current_prop = 'user_email';

		$email = sanitize_email( $modifier->current_value );

		if ( $email !== $modifier->current_value ) {
			throw new Action_Exception( 'empty_email' );
		}

		$email_exists = email_exists( $email );
		$id           = (int) $modifier->get_value_by_prop( 'ID' );

		if ( $email_exists && $id !== $email_exists ) {
			throw new Action_Exception( 'email_exists' );
		}
	}

}
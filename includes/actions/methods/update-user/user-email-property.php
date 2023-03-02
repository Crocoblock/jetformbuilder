<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Email_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'email';
	}

	public function get_attach_id(): string {
		return 'user_email';
	}

	public function get_label(): string {
		return __( 'Email', 'jet-form-builder' );
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		if ( empty( $value ) ) {
			return;
		}

		$email = sanitize_email( $value );

		if ( $email !== $value ) {
			throw new Action_Exception( 'empty_email' );
		}

		$email_exists = email_exists( $email );
		$id           = $modifier->get( 'ID' );

		if ( $email_exists && $id->value !== $email_exists ) {
			throw new Action_Exception( 'email_exists' );
		}

		parent::do_before( $key, $value, $modifier );
	}

	public function get_related(): array {
		return array( 'ID' );
	}

}
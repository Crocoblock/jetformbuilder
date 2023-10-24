<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Modifier;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Id_Property extends Base_Object_Property {

	/** @var \WP_User */
	public $user;

	public function get_id(): string {
		return 'ID';
	}

	public function get_label(): string {
		return __( 'User ID (will update this user)', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$this->value = absint( $value );

		if ( empty( $this->value ) ) {
			throw new Action_Exception( 'sanitize_user' );
		}

		if (
			get_current_user_id() !== $this->value &&
			! current_user_can( 'edit_users' ) &&
			! Tools::is_webhook()
		) {
			// Only users with appropriate capabilities can edit other users, also user can edit himself
			throw new Action_Exception( 'internal_error' );
		}

		$this->user = get_user_by( 'ID', $this->value );

		if ( ! is_a( $this->user, \WP_User::class ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( 'internal_error', $this->user, $this->value );
		}
	}
}

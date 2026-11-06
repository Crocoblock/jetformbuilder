<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use JFB_Modules\Actions_V2\Update_User\Properties\User_Modifier;
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

		/*
		 * A user can edit himself. Editing another user needs the right to edit
		 * THAT user (meta capability "edit_user"), not just the general
		 * "edit_users": core and plugins limit the targets through
		 * map_meta_cap (multisite super admins, WooCommerce lets a shop manager
		 * edit customers only).
		 */
		if (
			get_current_user_id() !== $this->value &&
			! current_user_can( 'edit_user', $this->value ) &&
			! Tools::is_webhook()
		) {
			throw new Action_Exception( 'internal_error' );
		}

		$this->user = get_user_by( 'ID', $this->value );

		if ( ! is_a( $this->user, \WP_User::class ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( 'internal_error', $this->user, $this->value );
		}
	}
}

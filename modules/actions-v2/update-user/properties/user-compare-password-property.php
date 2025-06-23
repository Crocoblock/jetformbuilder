<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Compare_Password_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'compare_password';
	}

	public function get_label(): string {
		return __( 'Compare with Current Password', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$id      = $modifier->get_value( 'ID' );
		$user_id = $modifier->get_value( 'user_id' );

		if ( false === $id && false === $user_id ) {
			throw new Action_Exception( 'internal_error' );
		}

		$user_id = $id ?: $user_id;
		$user    = get_user_by( 'ID', $user_id );

		if ( ! is_a( $user, \WP_User::class ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( 'internal_error', $user, $value );
		}

		if ( ! wp_check_password( $value, $user->user_pass, $user->ID ) ) {
			throw new Action_Exception( 'incorrect_old_password' );
		}
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}

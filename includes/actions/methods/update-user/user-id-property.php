<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Id_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'ID';
	}

	public function get_label(): string {
		return __( 'User ID (will update this user)', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|User_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {

		$modifier->current_value = absint( $modifier->current_value );

		if ( empty( $modifier->current_value ) ) {
			throw new Action_Exception( 'sanitize_user' );
		}

		if ( get_current_user_id() !== $modifier->current_value && ! current_user_can( 'edit_users' ) ) {
			// Only users with appropriate capabilities can edit other users, also user can edit himself
			throw new Action_Exception( 'internal_error' );
		}

		$modifier->updated_user = get_user_by( 'ID', $modifier->current_value );

		if ( ! is_a( $modifier->updated_user, \WP_User::class ) ) {
			throw new Action_Exception( 'internal_error', $modifier->updated_user, $modifier->current_value );
		}
	}
}
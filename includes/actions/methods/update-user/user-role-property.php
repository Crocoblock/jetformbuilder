<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Role_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'role';
	}

	public function can_attach( string $key, $value ): bool {
		if ( empty( $value ) || 'administrator' === $value ) {
			return false;
		}

		return parent::can_attach( $key, $value );
	}


	public function do_after( Abstract_Modifier $modifier ) {
		/** @var User_Id_Property $id */
		$id = $modifier->get( 'ID' );

		if ( ! empty( $this->value ) ) {
			$id->user->set_role( $value );
		}
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}

	public function get_value() {
		throw new Silence_Exception();
	}
}
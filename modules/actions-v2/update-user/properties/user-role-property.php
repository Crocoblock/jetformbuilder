<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

		if ( empty( $this->value ) ) {
			return;
		}

		if ( ! is_array( $this->value ) ) {
			$this->value = array( $this->value );
		}

		$main_role = array_shift( $this->value );

		if ( $main_role !== 'administrator' ) {
			$id->user->set_role($main_role);
		}

		foreach ( $this->value as $role ) {
			if ( $role !== 'administrator' ) {
				$id->user->add_role( $role );
			}
		}
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}

	public function get_value( Abstract_Modifier $modifier ) {
		throw new Silence_Exception();
	}
}

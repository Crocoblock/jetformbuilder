<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Confirm_Password_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'confirm_password';
	}

	public function get_label(): string {
		return __( 'Confirm Password', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Modifier_Exclude_Property
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		throw new Modifier_Exclude_Property( "Excluding: {$modifier->current_prop}" );
	}

}
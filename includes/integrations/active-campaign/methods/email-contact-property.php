<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Required_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;

class Email_Contact_Property extends Base_Object_Property implements Object_Required_Property {

	// It can be empty
	// in action we use dynamic fetching properties
	public function get_label(): string {
		return '';
	}

	public function get_id(): string {
		return 'email';
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_if_required( Abstract_Modifier $modifier ) {
		if ( ! empty( $this->value ) ) {
			return;
		}

		throw new Action_Exception( 'empty_field', 'Email' );
	}
}
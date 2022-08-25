<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Email_Contact_Property extends Base_Object_Property {

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
	 * @return void|null
	 * @throws Action_Exception|Silence_Exception
	 */
	public function get_value( Abstract_Modifier $modifier ) {
		if ( ! empty( $this->value ) ) {
			return parent::get_value( $modifier );
		}

		throw new Action_Exception( 'empty_field', 'Email' );
	}
}
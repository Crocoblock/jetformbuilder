<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Address_Line_1_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Address_Line_2_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\City_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Country_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Postal_Code_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Ship_Full_Name_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\State_Column;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;

class Payer_Shipping_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Payment Shipping', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'name'     => new Ship_Full_Name_Column(),
			'country'  => new Country_Column(),
			'state'    => new State_Column(),
			'city'     => new City_Column(),
			'street_1' => new Address_Line_1_Column(),
			'street_2' => new Address_Line_2_Column(),
			'postal'   => new Postal_Code_Column(),

		);
	}

	/**
	 * @return array
	 * @throws Empty_Box_Exception
	 */
	public function get_list(): array {
		try {
			$payment = Payment_View::findById( $this->get_id() );

			return $payment['ship'] ?? array();
		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}

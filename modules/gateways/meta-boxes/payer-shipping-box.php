<?php


namespace JFB_Modules\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Address_Line_1_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Address_Line_2_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\City_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Country_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Postal_Code_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Ship_Full_Name_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\State_Column;
use JFB_Modules\Gateways\Query_Views\Payment_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
			throw new Empty_Box_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				...$exception->get_additional()
			);
		}
	}
}

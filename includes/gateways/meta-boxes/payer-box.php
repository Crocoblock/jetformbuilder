<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payer_Email_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payer_First_Name_Column;
use Jet_Form_Builder\Gateways\Meta_Boxes\Columns\Payer_Last_Name_Column;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payer_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Payer Info', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'first_name' => new Payer_First_Name_Column(),
			'last_name'  => new Payer_Last_Name_Column(),
			'email'      => new Payer_Email_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Empty_Box_Exception
	 */
	public function get_list(): array {
		try {
			$payment = Payment_View::findById( $this->get_id() );

			return $payment['payer'] ?? array();
		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}
}

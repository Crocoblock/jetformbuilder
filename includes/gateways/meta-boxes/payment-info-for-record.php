<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Query_Views\Payment_By_Record;

class Payment_Info_For_Record extends Payment_Details_Box {

	/**
	 * @return int
	 * @throws Not_Found_Page_Exception|Empty_Box_Exception
	 */
	public function get_id(): int {
		$record_id = parent::get_id();

		try {
			list ( $payment_id ) = Payment_By_Record::find(
				array(
					'record_id' => $record_id,
				)
			)->query()->query_col();
		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		return $payment_id;
	}
}

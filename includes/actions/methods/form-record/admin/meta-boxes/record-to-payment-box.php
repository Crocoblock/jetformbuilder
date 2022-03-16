<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;


use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_By_Payment;

class Record_To_Payment_Box extends Form_Record_Values_Box {

	/**
	 * @return int
	 * @throws Empty_Box_Exception
	 */
	public function get_id(): int {
		$payment_id = parent::get_id();

		try {
			list ( $record_id ) = Record_By_Payment::find(
				array(
					'payment_id' => $payment_id,
				)
			)->query()->query_col();

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		return $record_id;
	}

}
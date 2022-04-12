<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;


use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_By_Payment;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Record_To_Payment_Box extends Form_Record_Values_Box {

	public function get_title(): string {
		return __( 'Related Form Record', 'jet-form-builder' );
	}

	/**
	 * @return array
	 * @throws Empty_Box_Exception
	 * @throws Not_Found_Page_Exception
	 */
	public function get_single(): array {
		$single = ( new Single_Form_Record_Page() )->set_id( $this->get_id() );

		return array(
			'href'  => $single->get_url(),
			'title' => __( 'View related form record', 'jet-form-builder' ),
		);
	}

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
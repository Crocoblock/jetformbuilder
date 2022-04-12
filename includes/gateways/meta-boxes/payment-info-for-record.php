<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;
use Jet_Form_Builder\Gateways\Query_Views\Payment_By_Record;

class Payment_Info_For_Record extends Payment_Details_Box {

	public function get_title(): string {
		return __( 'Related Payment', 'jet-form-builder' );
	}

	/**
	 * @return array
	 * @throws Empty_Box_Exception
	 * @throws Not_Found_Page_Exception
	 */
	public function get_single(): array {
		$single = ( new Single_Payment_Page() )->set_id( $this->get_id() );

		return array(
			'href'  => $single->get_url(),
			'title' => __( 'View related payment', 'jet-form-builder' ),
		);
	}

	/**
	 * @return int
	 * @throws Empty_Box_Exception
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

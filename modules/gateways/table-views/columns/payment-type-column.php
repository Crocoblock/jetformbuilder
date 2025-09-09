<?php


namespace JFB_Modules\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use JFB_Modules\Gateways\Pages\Single_Payment_Page;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payment_Type_Column extends Column_Advanced_Base {

	protected $type = 'link';

	public function get_label(): string {
		return __( 'Payment Type', 'jet-form-builder' );
	}

	public function get_type_name( array $record ): string {
		if ($record['initial_transaction_id']) {
			return __( 'Renewal payment', 'jet-form-builder' );
		}
		return __( 'Initial payment', 'jet-form-builder' );
	}

	/**
	 * @param array $record
	 *
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_value( array $record = array() ) {
		$single = ( new Single_Payment_Page() )->set_id( $record['id'] ?? 0 );

		return array(
			'text' => $this->get_type_name( $record ),
			'href' => $single->get_url(),
		);
	}

}

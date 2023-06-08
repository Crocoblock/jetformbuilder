<?php


namespace JFB_Modules\Gateways\Export;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Export\Export_Tools;
use JFB_Components\Export\Table_Entries_Export_It;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;
use JFB_Modules\Gateways\Query_Views\Payment_For_Export_View;
use JFB_Modules\Gateways\Query_Views\Payment_View;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Multiple_Controller extends Base_Export_Controller {

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->get_wp_nonce()->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		$exporter = Export_Tools::get_exporter_by_format();

		$exporter->set_file_name( 'jfb-payments' );
		$exporter->headers();

		// headings
		$exporter->add_row(
			$this->prepare_row(
				$this->columns,
				$this->payers_columns,
				$this->shipping_columns
			)
		);

		$this->add_rows( $exporter );
		$exporter->close();
		die;
	}

	protected function add_rows( Table_Entries_Export_It $export ) {
		try {
			$payments = ( new Payment_For_Export_View() )->query()->generate_all();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		$view = new Payment_View();
		$view->set_select( $this->get_select_row_columns() );
		$view->set_limit( array( 1 ) );

		$empty_ship  = array_fill_keys(
			array_keys( $this->shipping_columns ),
			''
		);
		$empty_payer = array_fill_keys(
			array_keys( $this->payers_columns ),
			''
		);

		foreach ( $payments as $payment ) {
			$view->set_conditions(
				$view::prepare_columns(
					array(
						'payment_id' => $payment->id,
					)
				)
			);

			try {
				$shipping = $view->query()->query_one();
				$payer    = $shipping['payer'];
				unset( $shipping['payer'] );

			} catch ( Query_Builder_Exception $exception ) {
				$shipping = $empty_ship;
				$payer    = $empty_payer;
			}

			$export->add_row(
				$this->prepare_row(
					$payment,
					$payer,
					$shipping
				)
			);
		}
	}
}

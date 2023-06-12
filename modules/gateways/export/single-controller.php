<?php


namespace JFB_Modules\Gateways\Export;

use JFB_Components\Export\Export_Tools;
use JFB_Modules\Gateways\Query_Views\Payment_For_Export_View;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Single_Controller extends Base_Export_Controller {

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->get_wp_nonce()->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		$payment_id   = $this->get_payment_id();
		$payment_view = Payment_For_Export_View::find( array( 'id' => $payment_id ) );
		$payment_view->set_select( array_keys( $this->columns ) );

		$payment  = $payment_view->set_limit( array( 1 ) )->query()->query_one();
		$exporter = Export_Tools::get_exporter_by_format();

		$exporter->set_file_name( 'jfb-payment-' . $payment_id );
		$exporter->headers();

		// headings
		$exporter->add_row(
			$this->prepare_row(
				$this->columns,
				$this->record_columns,
				$this->payers_columns,
				$this->shipping_columns
			)
		);

		$this->add_row( $exporter, $payment );
		$exporter->close();
		die;
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_payment_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$payment_id = absint( $_GET['id'] ?? '' );

		if ( ! $payment_id ) {
			throw new \Exception(
				__( 'Payment ID is empty', 'jet-form-builder' )
			);
		}

		return $payment_id;
	}
}

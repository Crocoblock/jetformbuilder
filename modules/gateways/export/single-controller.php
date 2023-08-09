<?php


namespace JFB_Modules\Gateways\Export;

use JFB_Modules\Gateways\Query_Views\Payment_For_Export_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Single_Controller extends Base_Export_Controller {

	/**
	 * @throws \Exception
	 */
	public function do_export() {
		$payment_id   = $this->get_payment_id();
		$payment_view = Payment_For_Export_View::find( array( 'id' => $payment_id ) );
		$payment_view->set_select( array_keys( $this->columns ) );

		$payment = $payment_view->set_limit( array( 1 ) )->query()->query_one();

		$this->get_exporter()->set_title(
		/* translators: %d - record ID */
			sprintf( __( 'JFB Payment %d', 'jet-form-builder' ), $payment_id )
		);
		$this->get_exporter()->open();

		// headings
		$this->get_exporter()->add_row(
			$this->prepare_row(
				$this->columns,
				$this->record_columns,
				$this->payers_columns,
				$this->shipping_columns
			)
		);

		$this->add_row( $payment );
		$this->get_exporter()->close();
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
				esc_html__( 'Payment ID is empty', 'jet-form-builder' )
			);
		}

		return $payment_id;
	}
}

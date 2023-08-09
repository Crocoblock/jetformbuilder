<?php


namespace JFB_Modules\Gateways\Export;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Gateways\Query_Views\Payment_For_Export_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Multiple_Controller extends Base_Export_Controller {

	/**
	 * @throws \Exception
	 */
	public function do_export() {
		$this->modify_columns();
		$this->modify_record_columns();
		$this->modify_payer_columns();
		$this->modify_shipping_columns();

		if ( ! $this->columns &&
			! $this->payers_columns &&
			! $this->shipping_columns &&
			! $this->record_columns
		) {
			throw new \Exception(
				esc_html__( 'General or additional columns must be specified', 'jet-form-builder' )
			);
		}

		$this->get_exporter()->set_title( __( 'JFB Payments', 'jet-form-builder' ) );
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

		$this->add_rows();
		$this->get_exporter()->close();
		die;
	}

	protected function add_rows() {
		try {
			$payments = $this->generate_payments();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		if ( ! $this->payers_columns && ! $this->shipping_columns && ! $this->record_columns ) {
			foreach ( $payments as $payment ) {
				/**
				 * @see https://github.com/Crocoblock/issues-tracker/issues/3112
				 */
				if ( empty( $this->columns['id'] ) ) {
					unset( $payment->id );
				}
				$this->get_exporter()->add_row(
					$this->prepare_row(
						$payment,
						array(),
						array(),
						array()
					)
				);
			}

			return;
		}

		foreach ( $payments as $payment ) {
			$this->add_row( $payment );
		}
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	protected function generate_payments(): \Generator {
		$view = ( new Payment_For_Export_View() )->set_filters(
		// phpcs:ignore WordPress.Security
			(array) ( $_GET['filters'] ?? array() )
		);

		$columns = $this->columns;

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/3112
		 */
		if ( empty( $columns['id'] ) ) {
			$columns['id'] = true;
		}

		$view->set_select( array_keys( $columns ) );

		return $view->query()->generate_all();
	}

	protected function modify_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$columns = array_map( 'sanitize_key', (array) ( $_GET['columns'] ?? array() ) );

		foreach ( $this->columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $columns, true ) ) {
				unset( $this->columns[ $column_name ] );
			}
		}
	}

	protected function modify_record_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$columns = array_map( 'sanitize_key', (array) ( $_GET['columns'] ?? array() ) );

		foreach ( $this->record_columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $columns, true ) ) {
				unset( $this->record_columns[ $column_name ] );
			}
		}

		$this->update_record_empty_columns();
	}

	protected function modify_payer_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$columns = array_map( 'sanitize_key', (array) ( $_GET['payerColumns'] ?? array() ) );

		foreach ( $this->payers_columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $columns, true ) ) {
				unset( $this->payers_columns[ $column_name ] );
			}
		}

		$this->update_payer_empty_columns();
	}

	protected function modify_shipping_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$columns = array_map( 'sanitize_key', (array) ( $_GET['shippingColumns'] ?? array() ) );

		foreach ( $this->shipping_columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $columns, true ) ) {
				unset( $this->shipping_columns[ $column_name ] );
			}
		}

		$this->update_shipping_empty_columns();
	}
}

<?php


namespace JFB_Modules\Gateways\Export;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Export\Base_Export_It;
use JFB_Components\Export\Table_Entries_Export_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_To_Record;
use JFB_Modules\Gateways\Module;
use JFB_Modules\Gateways\Query_Views\Payment_View;

if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Export_Controller implements Wp_Nonce_It {

	use Wp_Nonce_Trait;

	protected $columns = array();

	protected $record_columns       = array();
	protected $record_columns_empty = array();

	protected $payers_columns       = array();
	protected $payers_columns_empty = array();

	protected $shipping_columns       = array();
	protected $shipping_columns_empty = array();

	/**
	 * @var Payment_View
	 */
	protected $view;

	abstract protected function do_export();

	public function run() {
		$this->columns = array(
			'id'             => __( 'ID (primary)', 'jet-form-builder' ),
			'amount_value'   => __( 'Amount Value', 'jet-form-builder' ),
			'amount_code'    => __( 'Amount Code', 'jet-form-builder' ),
			'gateway_id'     => __( 'Gateway Slug', 'jet-form-builder' ),
			'scenario'       => __( 'Scenario', 'jet-form-builder' ),
			'type'           => __( 'Type', 'jet-form-builder' ),
			'status'         => __( 'Status', 'jet-form-builder' ),
			'transaction_id' => __( 'Transaction ID', 'jet-form-builder' ),
			'form_id'        => __( 'Form ID', 'jet-form-builder' ),
			'user_id'        => __( 'User ID', 'jet-form-builder' ),
			'created_at'     => __( 'Created', 'jet-form-builder' ),
			'updated_at'     => __( 'Updated', 'jet-form-builder' ),
		);

		$this->record_columns = array(
			'record_id' => __( 'Record ID', 'jet-form-builder' ),
		);

		foreach ( $this->record_columns as $name => $label ) {
			$this->record_columns[ $name ] = sprintf(
			/* translators: %s - column title */
				__( '[Record] %s', 'jet-form-builder' ),
				$label
			);
		}

		$this->update_record_empty_columns();

		$this->payers_columns = array(
			'payer_id'   => __( 'Payer ID', 'jet-form-builder' ),
			'first_name' => __( 'First Name', 'jet-form-builder' ),
			'last_name'  => __( 'Last Name', 'jet-form-builder' ),
			'email'      => __( 'Email', 'jet-form-builder' ),
		);

		foreach ( $this->payers_columns as $payer_name => $payer_value ) {
			$this->payers_columns[ $payer_name ] = sprintf(
			/* translators: %s - column title */
				__( '[Payer] %s', 'jet-form-builder' ),
				$payer_value
			);
		}

		$this->update_payer_empty_columns();

		$this->shipping_columns = array(
			'full_name'      => __( 'Full Name', 'jet-form-builder' ),
			'address_line_1' => __( 'Address Line 1', 'jet-form-builder' ),
			'address_line_2' => __( 'Address Line 2', 'jet-form-builder' ),
			'admin_area_1'   => __( 'Admin Area 1', 'jet-form-builder' ),
			'admin_area_2'   => __( 'Admin Area 2', 'jet-form-builder' ),
			'postal_code'    => __( 'Postal Code', 'jet-form-builder' ),
			'country_code'   => __( 'Country Code', 'jet-form-builder' ),
		);

		foreach ( $this->shipping_columns as $ship_name => $ship_value ) {
			$this->shipping_columns[ $ship_name ] = sprintf(
			/* translators: %s - column title */
				__( '[Shipping] %s', 'jet-form-builder' ),
				$ship_value
			);
		}

		$this->update_shipping_empty_columns();

		try {
			$this->do_export();
		} catch ( \Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die(
				$exception->getMessage(),
				__( 'Error', 'jet-form-builder' )
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	/**
	 * @param Base_Export_It|Table_Entries_Export_It $export
	 * @param $payment
	 *
	 * @return void
	 */
	public function add_row( Base_Export_It $export, $payment ) {
		if ( ! $this->view ) {
			$this->view = $this->get_payment_view();
		}

		$payment_id = is_array( $payment ) ? $payment['id'] : $payment->id;

		$this->view->set_payment_id( $payment_id );

		try {
			$shipping = $this->view->query()->query_one();
			$payer    = $shipping['payer'] ?? array();
			$record   = $shipping['record'] ?? array();
			$shipping = $shipping['shipping'] ?? array();

		} catch ( Query_Builder_Exception $exception ) {
			$shipping = $this->shipping_columns_empty;
			$payer    = $this->payers_columns_empty;
			$record   = $this->record_columns_empty;
		}

		$export->add_row(
			$this->prepare_row(
				$payment,
				$record,
				$payer,
				$shipping
			)
		);
	}

	public function get_url(): string {
		return add_query_arg(
			array(
				'action'                          => Module::EXPORT_ACTION,
				$this->get_wp_nonce()->get_name() => $this->get_wp_nonce()->create(),
			),
			admin_url( 'admin.php' )
		);
	}

	protected function prepare_row( $payment_values, array $record, array $payer_values, array $payer_shipping ): array {
		foreach ( $record as $property => $record_value ) {
			$record[ sprintf( 'record|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $record[ $property ] );
		}

		foreach ( $payer_values as $property => $record_value ) {
			$payer_values[ sprintf( 'payer|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $payer_values[ $property ] );
		}

		foreach ( $payer_shipping as $property => $record_value ) {
			$payer_shipping[ sprintf( 'shipping|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $payer_shipping[ $property ] );
		}

		return array_merge(
			is_array( $payment_values ) ? $payment_values : get_object_vars( $payment_values ),
			$record,
			$payer_values,
			$payer_shipping
		);
	}

	protected function get_select_row_columns(): array {
		$columns            = array();
		$shipping_generator = Payer_Shipping_Model::generate_scoped_columns( 'shipping' );
		$generator          = Payer_Model::generate_scoped_columns( 'payer' );
		$record_generator   = Payment_To_Record::generate_scoped_columns( 'record' );

		foreach ( $generator as $column ) {
			$generator->next();

			if ( array_key_exists( $column, $this->payers_columns ) ) {
				$columns[] = $generator->current();
			}
		}

		foreach ( $shipping_generator as $column ) {
			$shipping_generator->next();

			if ( array_key_exists( $column, $this->shipping_columns ) ) {
				$columns[] = $shipping_generator->current();
			}
		}

		foreach ( $record_generator as $column ) {
			$record_generator->next();

			if ( array_key_exists( $column, $this->record_columns ) ) {
				$columns[] = $record_generator->current();
			}
		}

		return $columns;
	}

	protected function get_payment_view(): Payment_View {
		$view = new Payment_View();
		$view->set_select( $this->get_select_row_columns() );
		$view->set_limit( array( 1 ) );

		if ( ! empty( $this->record_columns ) ) {
			$view->set_with_record( true );
		}

		return $view;
	}

	protected function update_payer_empty_columns() {
		$this->payers_columns_empty = array_fill_keys(
			array_keys( $this->payers_columns ),
			''
		);
	}

	protected function update_shipping_empty_columns() {
		$this->shipping_columns_empty = array_fill_keys(
			array_keys( $this->shipping_columns ),
			''
		);
	}

	protected function update_record_empty_columns() {
		$this->record_columns_empty = array_fill_keys(
			array_keys( $this->record_columns ),
			''
		);
	}

}

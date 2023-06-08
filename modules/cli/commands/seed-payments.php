<?php


namespace JFB_Modules\Cli\Commands;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Gateways\Base_Gateway;
use JFB_Modules\Gateways\Db_Models\Payer_Model;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_Model;
use JFB_Modules\Gateways\Db_Models\Payment_To_Payer_Shipping_Model;
use JFB_Modules\Gateways\Db_Models\Payment_To_Record;
use JFB_Modules\Cli\Cli_Tools;

class Seed_Payments implements Base_Command_It {

	public function rep_item_id() {
		return 'seed-payments';
	}

	public function condition(): bool {
		return true;
	}

	/**
	 * @param $args
	 * @param $assoc_args
	 *
	 * @throws \WP_CLI\ExitException
	 */
	public function do_command( $args, $assoc_args ) {
		$form  = Cli_Tools::resolve_form( $assoc_args );
		$limit = absint( $assoc_args['limit'] ?? 1000000 );

		if ( 0 >= $limit ) {
			$limit = 1;
		}

		/** @var \WP_User $user */
		list( $user ) = get_users(
			array(
				'number' => 1,
			)
		);

		$record_id = 0;
		try {
			$record_id = $this->get_record_id();
		} catch ( \Exception $exception ) {
			\WP_CLI::error( $exception->getMessage() );
		}

		$current = 0;

		foreach ( range( 0, $limit ) as $current ) {
			$payment_id = ( new Payment_Model() )->insert_soft(
				array(
					'transaction_id' => wp_unique_id( 'cli-' ),
					'form_id'        => $form->ID,
					'user_id'        => $user->ID,
					'gateway_id'     => 'paypal',
					'scenario'       => 'PAY_NOW',
					'amount_value'   => random_int( 1, 500 ),
					'amount_code'    => 'USD',
					'type'           => Base_Gateway::PAYMENT_TYPE_INITIAL,
					'status'         => 'COMPLETED',
				)
			);

			( new Payment_To_Record() )->insert_soft(
				array(
					'payment_id' => $payment_id,
					'record_id'  => $record_id,
				)
			);

			$payer_id = ( new Payer_Model() )->insert_soft(
				array(
					'user_id'    => $user->ID,
					'payer_id'   => wp_unique_id( 'payer-' ),
					'first_name' => 'John',
					'last_name'  => 'Doe',
					'email'      => 'somerandomemail@business.example.com',
				)
			);

			$shipping_id = ( new Payer_Shipping_Model() )->insert_soft(
				array(
					'payer_id'       => $payer_id,
					'full_name'      => 'John Doe',
					'address_line_1' => '1 Main St',
					'admin_area_2'   => 'San Jose',
					'admin_area_1'   => 'CA',
					'postal_code'    => 95131,
					'country_code'   => 'US',
				)
			);

			( new Payment_To_Payer_Shipping_Model() )->insert_soft(
				array(
					'payment_id'        => $payment_id,
					'payer_shipping_id' => $shipping_id,
				)
			);

			if ( 0 === $current % 5000 ) {
				\WP_CLI::log( 'Reached: ' . $current );
			}
		}

		\WP_CLI::success( "Executed successfully ($current)" );
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_record_id(): int {
		global $wpdb;

		// phpcs:disable WordPress.DB
		$record = $wpdb->get_row(
			$wpdb->prepare( 'SELECT MAX(id) as max, MIN(id) as min FROM %i;', Record_Model::table() )
		);
		// phpcs:enable WordPress.DB

		if ( empty( $record ) ) {
			throw new \Exception( 'empty_records_table' );
		}

		return random_int( $record->min, $record->max );
	}

}

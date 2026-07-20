<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Gateways\Db_Models\Payment_Model;
use JFB_Modules\Gateways\Paypal\Scenarios_Logic\Pay_Now;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenario_Logic_Base;
use JFB_Modules\Gateways\Table_Views\Columns\Payment_Status_Column;

class PaypalPayNowTransactionTest extends \Codeception\TestCase\WPTestCase {

	private $previous_execution_builder;

	public function setUp(): void {
		parent::setUp();

		$this->previous_execution_builder = Execution_Builder::$instance;
	}

	public function tearDown(): void {
		Execution_Builder::$instance = $this->previous_execution_builder;

		parent::tearDown();
	}

	public function testAmountMismatchRollsBackBeforePersistingStatus(): void {
		$builder = $this->use_execution_builder_spy();
		$scenario = $this->scenario(
			array(
				'id'           => 15,
				'status'       => 'CREATED',
				'amount_value' => '25.00',
				'amount_code'  => 'USD',
			)
		);

		try {
			$this->process_captured_payment( $scenario, $this->payment( '15.00', 'USD' ) );
			$this->fail( 'Expected the captured amount mismatch to fail.' );
		} catch ( Gateway_Exception $exception ) {
			$this->assertSame(
				'Captured payment amount does not match the expected amount.',
				$exception->getMessage()
			);
		}

		$this->assertSame(
			array( 'start', 'rollback', 'update:AMOUNT_MISMATCH' ),
			$builder->operations
		);
		$this->assertSame( 'AMOUNT_MISMATCH', $scenario->get_scenario_row( 'status' ) );
	}

	public function testMissingCapturedAmountRollsBackWithoutMismatchStatus(): void {
		$builder = $this->use_execution_builder_spy();
		$scenario = $this->scenario(
			array(
				'id'           => 16,
				'status'       => 'CREATED',
				'amount_value' => '25.00',
				'amount_code'  => 'USD',
			)
		);

		try {
			$this->process_captured_payment(
				$scenario,
				array(
					'purchase_units' => array(
						array(
							'amount' => array(
								'value'         => '25.00',
								'currency_code' => 'USD',
							),
						),
					),
				)
			);
			$this->fail( 'Expected missing captured amount data to fail.' );
		} catch ( Gateway_Exception $exception ) {
			$this->assertSame( 'Unable to verify captured payment amount.', $exception->getMessage() );
		}

		$this->assertSame( array( 'start', 'rollback' ), $builder->operations );
		$this->assertSame( 'CREATED', $scenario->get_scenario_row( 'status' ) );
	}

	public function testValidCapturedAmountCommitsPaymentStatus(): void {
		$builder = $this->use_execution_builder_spy();
		$scenario = $this->scenario(
			array(
				'id'           => 17,
				'status'       => 'CREATED',
				'amount_value' => '25.00',
				'amount_code'  => 'USD',
			)
		);

		$this->process_captured_payment( $scenario, $this->payment( '25.00', 'USD' ) );

		$this->assertSame(
			array( 'start', 'update:COMPLETED', 'commit' ),
			$builder->operations
		);
	}

	public function testAmountMismatchIsClassifiedAndDisplayedAsFailed(): void {
		$scenario = $this->scenario( array( 'status' => 'AMOUNT_MISMATCH' ) );
		$status   = ( new Payment_Status_Column() )->get_value(
			array( 'status' => 'AMOUNT_MISMATCH' )
		);

		$this->assertSame( 'failed', $scenario->get_status_type( 'AMOUNT_MISMATCH' ) );
		$this->assertSame( 'failed', $status['type'] );
		$this->assertSame( 'Amount mismatch', $status['text'] );
	}

	private function use_execution_builder_spy(): PaypalTransactionExecutionBuilder {
		$builder = new PaypalTransactionExecutionBuilder();

		Execution_Builder::$instance = $builder;

		return $builder;
	}

	private function scenario( array $row ): Pay_Now {
		$scenario = new PaypalTransactionScenario();
		$property = new \ReflectionProperty( Scenario_Logic_Base::class, 'queried_row' );
		$property->setAccessible( true );
		$property->setValue( $scenario, $row );

		return $scenario;
	}

	private function process_captured_payment( Pay_Now $scenario, array $payment ): void {
		$method = new \ReflectionMethod( Pay_Now::class, 'process_captured_payment' );
		$method->setAccessible( true );
		$method->invoke( $scenario, $payment, true );
	}

	private function payment( string $value, string $currency ): array {
		return array(
			'status'         => 'COMPLETED',
			'purchase_units' => array(
				array(
					'payments' => array(
						'captures' => array(
							array(
								'amount' => array(
									'value'         => $value,
									'currency_code' => $currency,
								),
							),
						),
					),
				),
			),
		);
	}
}

class PaypalTransactionScenario extends Pay_Now {

	protected function save_payment( array $payment ) {
		( new Payment_Model() )->update(
			array( 'status' => $payment['status'] ),
			array( 'id' => $this->get_scenario_row( 'id' ) )
		);

		$this->scenario_row( array( 'status' => $payment['status'] ) );
	}
}

class PaypalTransactionExecutionBuilder extends Execution_Builder {

	public $operations = array();

	public function transaction_start() {
		$this->operations[] = 'start';
	}

	public function transaction_commit() {
		$this->operations[] = 'commit';
	}

	public function transaction_rollback() {
		$this->operations[] = 'rollback';
	}

	public function update(
		Base_Db_Model $model,
		$columns,
		$where,
		$format = null,
		$where_format = null
	): int {
		$this->operations[] = 'update:' . ( $columns['status'] ?? '' );

		return 1;
	}
}

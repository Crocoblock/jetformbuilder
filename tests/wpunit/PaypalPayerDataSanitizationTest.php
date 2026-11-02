<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use JFB_Modules\Gateways\Paypal\Scenarios_Logic\Pay_Now;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenario_Logic_Base;

/**
 * Payer and shipping data come from the payer's
 * PayPal account, i.e. from outside the site, and are shown in the admin
 * Payments tables. They are stored as plain text (second layer next to the
 * output escaping in Column_Base). Ordinary names and
 * addresses must be stored exactly as PayPal sends them.
 */
class PaypalPayerDataSanitizationTest extends \Codeception\TestCase\WPTestCase {

	private $previous_builder;

	/**
	 * @var PayerInsertSpyBuilder
	 */
	private $builder;

	public function setUp(): void {
		parent::setUp();

		$this->previous_builder      = Execution_Builder::$instance;
		$this->builder               = new PayerInsertSpyBuilder();
		Execution_Builder::$instance = $this->builder;
	}

	public function tearDown(): void {
		Execution_Builder::$instance = $this->previous_builder;

		parent::tearDown();
	}

	private function save( array $payer, array $shipping ): array {
		$scenario = new Pay_Now();

		$row = new \ReflectionProperty( Scenario_Logic_Base::class, 'queried_row' );
		$row->setAccessible( true );
		$row->setValue( $scenario, array( 'id' => 1, 'user_id' => 0 ) );

		$method = new \ReflectionMethod( Pay_Now::class, 'save_payment' );
		$method->setAccessible( true );
		$method->invoke(
			$scenario,
			array(
				'status'         => 'COMPLETED',
				'payer'          => $payer,
				'purchase_units' => array( array( 'shipping' => $shipping ) ),
			)
		);

		return $this->builder->inserts;
	}

	private function payer( string $first, string $last, string $email ): array {
		return array(
			'payer_id'      => '',
			'name'          => array( 'given_name' => $first, 'surname' => $last ),
			'email_address' => $email,
		);
	}

	private function shipping( string $name, string $line ): array {
		return array(
			'name'    => array( 'full_name' => $name ),
			'address' => array(
				'address_line_1' => $line,
				'address_line_2' => '',
				'admin_area_2'   => 'Kyiv',
				'admin_area_1'   => 'Kyiv',
				'postal_code'    => '01001',
				'country_code'   => 'UA',
			),
		);
	}

	public function testMarkupIsNotStored(): void {
		$markup  = '<img src=x onerror=jfbMarker()>';
		$inserts = $this->save(
			$this->payer( 'John' . $markup, 'Doe' . $markup, 'john@example.com' . $markup ),
			$this->shipping( 'John Doe' . $markup, 'Main street 1' . $markup )
		);

		$this->assertNotEmpty( $inserts, 'nothing was stored' );

		foreach ( $inserts as $columns ) {
			foreach ( $columns as $name => $value ) {
				$this->assertStringNotContainsString( '<', (string) $value, $name );
			}
		}
	}

	/**
	 * Backward compatibility: real-world names and addresses are unchanged.
	 */
	public function testOrdinaryDataIsStoredUnchanged(): void {
		$inserts = $this->save(
			$this->payer( 'Анна-Марія', "O'Brien", 'anna.obrien+shop@example.com' ),
			$this->shipping( 'José Müller & Co', 'Flat 5, 10 Downing St.' )
		);

		$stored = array_merge( ...$inserts );

		$this->assertSame( 'Анна-Марія', $stored['first_name'] );
		$this->assertSame( "O'Brien", $stored['last_name'] );
		$this->assertSame( 'anna.obrien+shop@example.com', $stored['email'] );
		$this->assertSame( 'José Müller & Co', $stored['full_name'] );
		$this->assertSame( 'Flat 5, 10 Downing St.', $stored['address_line_1'] );
		$this->assertSame( 'UA', $stored['country_code'] );
	}
}

class PayerInsertSpyBuilder extends Execution_Builder {

	public $inserts = array();

	public function insert( Base_Db_Model $model, $columns = array(), $format = null ): int {
		$this->inserts[] = $columns;

		return count( $this->inserts );
	}

	public function update( Base_Db_Model $model, $columns, $where, $format = null, $where_format = null ): int {
		return 1;
	}
}

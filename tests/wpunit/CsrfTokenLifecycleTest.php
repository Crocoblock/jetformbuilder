<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Security\Csrf\Csrf_Token_Model;
use JFB_Modules\Security\Csrf\Csrf_Tools;
use JFB_Modules\Security\Csrf\Module;

class CsrfTokenLifecycleTest extends \Codeception\TestCase\WPTestCase {

	protected function setUp(): void {
		parent::setUp();

		( new Csrf_Token_Model() )->create();
		$this->clear_tokens();
	}

	protected function tearDown(): void {
		$this->clear_tokens();

		parent::tearDown();
	}

	public function testTokenCanOnlyBeConsumedOnce(): void {
		$client_id = 'csrf-test-client';
		$token     = Csrf_Tools::add( 'csrf-test-token', $client_id );

		$this->assertTrue( Csrf_Tools::consume( $token, $client_id ) );
		$this->assertFalse( Csrf_Tools::consume( $token, $client_id ) );
		$this->assertFalse( Csrf_Tools::verify( $token, $client_id ) );
	}

	public function testTokenCannotBeConsumedForDifferentClient(): void {
		$token = Csrf_Tools::add( 'csrf-test-token', 'csrf-test-client' );

		$this->assertFalse( Csrf_Tools::consume( $token, 'csrf-other-client' ) );
		$this->assertTrue( Csrf_Tools::consume( $token, 'csrf-test-client' ) );
	}

	public function testConsumedTokenCanBeReplacedForRetry(): void {
		$client_id = 'csrf-test-client';
		$token     = Csrf_Tools::add( 'csrf-test-token', $client_id );

		$this->assertTrue( Csrf_Tools::consume( $token, $client_id ) );

		$retry_token = Csrf_Tools::add( 'csrf-retry-token', $client_id );

		$this->assertSame( 'csrf-retry-token', $retry_token );
		$this->assertFalse( Csrf_Tools::consume( $token, $client_id ) );
		$this->assertTrue( Csrf_Tools::consume( $retry_token, $client_id ) );
	}

	public function testAjaxContinuationReceivesReplacementTokenAfterConsume(): void {
		$client_id = 'csrf-test-client';
		$token     = Csrf_Tools::add( 'csrf-test-token', $client_id );

		$this->assertTrue( Csrf_Tools::consume( $token, $client_id ) );

		$module   = new Module();
		$property = new \ReflectionProperty( $module, 'client_id' );
		$property->setAccessible( true );
		$property->setValue( $module, $client_id );

		$handler = new class() {
			public $response_data = array();

			public function is_ajax(): bool {
				return true;
			}

			public function add_response_data( array $data ) {
				$this->response_data = array_merge( $this->response_data, $data );
			}
		};

		$module->handle_after_send( $handler, true );

		$replacement_token = $handler->response_data[ Csrf_Tools::FIELD ] ?? '';

		$this->assertNotEmpty( $replacement_token );
		$this->assertNotSame( $token, $replacement_token );
		$this->assertFalse( Csrf_Tools::consume( $token, $client_id ) );
		$this->assertTrue( Csrf_Tools::consume( $replacement_token, $client_id ) );
	}

	public function testAjaxValidationFailureReceivesReplacementTokenAfterConsume(): void {
		$client_id = 'csrf-test-client';
		$token     = Csrf_Tools::add( 'csrf-test-token', $client_id );

		$this->assertTrue( Csrf_Tools::consume( $token, $client_id ) );

		$module   = new Module();
		$property = new \ReflectionProperty( $module, 'client_id' );
		$property->setAccessible( true );
		$property->setValue( $module, $client_id );

		$handler = new class() {
			public $response_data = array();

			public function is_ajax(): bool {
				return true;
			}

			public function add_response_data( array $data ) {
				$this->response_data = array_merge( $this->response_data, $data );
			}
		};

		$module->handle_after_send( $handler, false );

		$replacement_token = $handler->response_data[ Csrf_Tools::FIELD ] ?? '';

		$this->assertNotEmpty( $replacement_token );
		$this->assertNotSame( $token, $replacement_token );
		$this->assertFalse( Csrf_Tools::consume( $token, $client_id ) );
		$this->assertTrue( Csrf_Tools::consume( $replacement_token, $client_id ) );
	}

	private function clear_tokens(): void {
		global $wpdb;

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		$wpdb->query( 'DELETE FROM ' . Csrf_Token_Model::table() );
	}
}

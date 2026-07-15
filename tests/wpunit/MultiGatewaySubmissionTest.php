<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Handler;
use JFB_Modules\Gateways\Module as Gateways_Module;
use JFB_Modules\Multi_Gateway\Module;
use JFB_Modules\Post_Type\Meta\Gateways_Meta;

class MultiGatewaySubmissionTest extends \Codeception\TestCase\WPTestCase {

	private $form_id;
	private $module;
	private $gateways_was_installed;
	private $gateway_meta_was_installed;
	private $previous_gateway_options;

	protected function setUp(): void {
		parent::setUp();

		$this->gateways_was_installed   = jet_form_builder()->has_module( 'gateways' );
		$this->previous_gateway_options = get_option( 'jet_form_builder_settings__payments-gateways', false );

		update_option(
			'jet_form_builder_settings__payments-gateways',
			wp_json_encode( array( 'use_gateways' => true ) )
		);

		if ( ! $this->gateways_was_installed ) {
			jet_form_builder()->get_modules()->install( new Gateways_Module() );
		}

		$meta_repository                 = jet_form_builder()->post_type->get_meta();
		$this->gateway_meta_was_installed = $meta_repository->rep_isset_item( Gateways_Meta::class );

		if ( ! $this->gateway_meta_was_installed ) {
			$meta_repository->install( new Gateways_Meta() );
		}

		$this->form_id = wp_insert_post(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
				'post_title'  => 'Gateway form',
			)
		);
		$this->module  = new Module();
	}

	protected function tearDown(): void {
		jet_fb_context()->set_request( array() );
		Gateways_Module::instance()->save_gateways_form_data( array( 'gateway' => 'none' ) );

		if ( ! $this->gateways_was_installed ) {
			jet_form_builder()->get_modules()->rep_remove( 'gateways' );
		}

		if ( ! $this->gateway_meta_was_installed ) {
			jet_form_builder()->post_type->get_meta()->uninstall( Gateways_Meta::class );
		}

		if ( false === $this->previous_gateway_options ) {
			delete_option( 'jet_form_builder_settings__payments-gateways' );
		} else {
			update_option(
				'jet_form_builder_settings__payments-gateways',
				$this->previous_gateway_options
			);
		}

		parent::tearDown();
	}

	public function testManualModeAppliesFrontendVisibleGateway(): void {
		$gateways = array(
			'mode'   => 'manual',
			'gateway' => 'none',
			'paypal' => array(
				'show_on_front' => true,
			),
			'stripe' => array(
				'show_on_front' => false,
			),
		);

		$this->submit_gateway( 'paypal', $gateways );

		$this->assertSame( 'paypal', Gateways_Module::instance()->get_gateway_id() );
	}

	public function testManualModeRejectsHiddenGateway(): void {
		$gateways = array(
			'mode'    => 'manual',
			'gateway' => 'none',
			'paypal'  => array(
				'show_on_front' => true,
			),
			'stripe'  => array(
				'show_on_front' => false,
			),
		);

		$this->submit_gateway( 'stripe', $gateways );

		$this->assertSame( 'none', Gateways_Module::instance()->get_gateway_id() );
	}

	public function testManualModeClearsRetainedHiddenGateway(): void {
		$gateways = array(
			'mode'    => 'manual',
			'gateway' => 'stripe',
			'paypal'  => array(
				'show_on_front' => true,
			),
			'stripe'  => array(
				'show_on_front' => false,
			),
		);

		$this->submit_gateway( 'stripe', $gateways );

		$this->assertSame( 'none', Gateways_Module::instance()->get_gateway_id() );
		$this->assertSame( $this->form_id, Gateways_Module::instance()->get_form_id() );
	}

	public function testSingleModeKeepsConfiguredGateway(): void {
		$gateways = array(
			'mode'    => 'single',
			'gateway' => 'paypal',
			'paypal'  => array(
				'show_on_front' => false,
			),
			'stripe'  => array(
				'show_on_front' => true,
			),
		);

		$this->submit_gateway( 'stripe', $gateways );

		$this->assertSame( 'paypal', Gateways_Module::instance()->get_gateway_id() );
	}

	/**
	 * @dataProvider invalid_gateway_provider
	 *
	 * @param mixed $submitted
	 */
	public function testUnknownOrNonStringGatewayDoesNotMutateRuntimeState( $submitted ): void {
		$gateways = array(
			'mode'    => 'manual',
			'gateway' => 'none',
			'paypal'  => array(
				'show_on_front' => true,
			),
		);

		$this->submit_gateway( $submitted, $gateways );

		$this->assertSame( 'none', Gateways_Module::instance()->get_gateway_id() );
	}

	public function invalid_gateway_provider(): array {
		return array(
			'unknown key' => array( 'missing' ),
			'array value' => array( array( 'paypal' ) ),
			'empty value' => array( '' ),
		);
	}

	private function submit_gateway( $submitted, array $gateways ): void {
		update_post_meta( $this->form_id, '_jf_gateways', wp_json_encode( $gateways ) );
		clean_post_cache( $this->form_id );

		Gateways_Module::instance()->save_gateways_form_data( $gateways );
		jet_fb_context()->set_request( array( 'multi_gateway' => $submitted ) );

		$handler = new Form_Handler();
		$handler->set_form_id( $this->form_id );

		$this->module->set_gateway_from_submitted_multi_gateway( $handler );
	}

	public function testFrontendAllowListMatchesRenderedGatewayRules(): void {
		$allowed = $this->get_allowed_gateways_for_frontend(
			array(
				'mode'   => 'manual',
				'paypal' => array(
					'show_on_front' => true,
				),
				'stripe' => array(
					'show_on_front' => false,
				),
			)
		);

		$this->assertContains( 'paypal', $allowed );
		$this->assertNotContains( 'stripe', $allowed );
	}

	private function get_allowed_gateways_for_frontend( array $gateways ): array {
		$method = new \ReflectionMethod( $this->module, 'get_allowed_gateways_for_frontend' );
		$method->setAccessible( true );

		return $method->invoke( $this->module, $gateways );
	}
}

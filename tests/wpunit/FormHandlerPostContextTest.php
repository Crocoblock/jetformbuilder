<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Handler;
use Jet_Form_Builder\Live_Form;

class FormHandlerPostContextTest extends \Codeception\TestCase\WPTestCase {

	private $handler;
	private $form_id;

	protected function setUp(): void {
		parent::setUp();

		$this->form_id = wp_insert_post(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
				'post_title'  => 'Context form',
			)
		);

		$this->handler = new Form_Handler();
		$this->handler->set_form_id( $this->form_id );

		$this->clear_request_context();
		unset( $_SERVER['HTTP_REFERER'] );
		Live_Form::instance()->set_ajax_post_fallback_allowed( true );

		global $post;
		$post = null;
	}

	protected function tearDown(): void {
		$this->clear_request_context();
		unset( $_SERVER['HTTP_REFERER'] );
		remove_filter( 'wp_doing_ajax', '__return_true' );
		Live_Form::instance()->set_ajax_post_fallback_allowed( true );

		global $post;
		$post = null;

		parent::tearDown();
	}

	public function testTamperedPostContextFailsClosed(): void {
		$referrer_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Referrer page',
			)
		);
		$forged_post_id   = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Forged context post',
			)
		);
		$referrer         = get_permalink( $referrer_post_id );

		$this->handler->set_referrer( $referrer );
		$_POST[ $this->handler->post_id_sig_key ] = $this->handler->get_post_context_signature(
			$referrer_post_id,
			$this->form_id,
			$referrer
		);

		$this->handler->set_current_post_context( (string) $forged_post_id );

		$this->assertNull( get_post() );
	}

	public function testTamperedPostContextDoesNotRehydrateAjaxReferrerPost(): void {
		$referrer_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'AJAX referrer page',
			)
		);
		$forged_post_id   = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'AJAX forged context post',
			)
		);
		$referrer         = get_permalink( $referrer_post_id );

		$this->handler->set_referrer( $referrer );
		$_SERVER['HTTP_REFERER']                  = $referrer;
		$_POST[ $this->handler->post_id_sig_key ] = $this->handler->get_post_context_signature(
			$referrer_post_id,
			$this->form_id,
			$referrer
		);

		add_filter( 'wp_doing_ajax', '__return_true' );

		try {
			$this->handler->set_current_post_context( (string) $forged_post_id );

			$this->assertNull( get_post() );
			$this->assertNull( Live_Form::instance()->post );
		} finally {
			remove_filter( 'wp_doing_ajax', '__return_true' );
		}
	}

	public function testMissingPostIdDoesNotEnableAjaxReferrerFallback(): void {
		$forged_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Forged omitted-field referrer',
			)
		);
		$handler        = new Form_Handler();

		$_POST[ $handler->form_key ]  = (string) $this->form_id;
		$_POST[ $handler->refer_key ] = home_url( '/form-container/' );
		$_SERVER['HTTP_REFERER']      = get_permalink( $forged_post_id );

		add_filter( 'wp_doing_ajax', '__return_true' );

		try {
			$handler->setup_form();

			$this->assertSame( $this->form_id, $handler->get_form_id() );
			$this->assertArrayNotHasKey( $handler->post_id_key, $_POST );
			$this->assertNull( Live_Form::instance()->post );
		} finally {
			remove_filter( 'wp_doing_ajax', '__return_true' );
		}
	}

	public function testSignedLoopContextIsAccepted(): void {
		$referrer_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Container page',
			)
		);
		$loop_post_id     = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Loop item post',
			)
		);
		$referrer         = get_permalink( $referrer_post_id );

		$this->handler->set_referrer( $referrer );
		$_POST[ $this->handler->post_id_sig_key ] = $this->handler->get_post_context_signature(
			$loop_post_id,
			$this->form_id,
			$referrer
		);

		$this->handler->set_current_post_context( (string) $loop_post_id );

		$this->assertSame( $loop_post_id, get_post()->ID );
	}

	public function testUnsignedLegacyPositivePostContextDoesNotRetargetToReferrer(): void {
		$referrer_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Legacy container page',
			)
		);
		$loop_post_id     = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Unsigned loop item post',
			)
		);

		$this->handler->set_referrer( get_permalink( $referrer_post_id ) );

		$this->handler->set_current_post_context( (string) $loop_post_id );

		$this->assertNull( get_post() );
	}

	public function testUnsignedPostContextClearsRouterRegisteredPost(): void {
		$router_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Router registered page',
			)
		);
		$loop_post_id   = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Unsigned loop item post',
			)
		);

		global $post;
		$post = get_post( $router_post_id );

		$this->handler->set_referrer( get_permalink( $router_post_id ) );
		$this->handler->set_current_post_context( (string) $loop_post_id );

		$this->assertNull( $post );
		$this->assertNull( Live_Form::instance()->post );
	}

	public function testUnsignedLegacySamePagePostContextDoesNotTrustSubmittedReferrer(): void {
		$forged_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Forged same-page form',
			)
		);

		$this->handler->set_referrer( get_permalink( $forged_post_id ) );

		$this->handler->set_current_post_context( (string) $forged_post_id );

		$this->assertNull( get_post() );
	}

	public function testNegativeLegacyPostIdDoesNotResolveToPostOne(): void {
		$this->handler->set_referrer( home_url( '/not-a-post-context/' ) );

		$this->handler->set_current_post_context( '-1' );

		$this->assertNull( get_post() );
	}

	public function testUnsignedNonPositivePostIdDoesNotTrustSubmittedReferrer(): void {
		$forged_post_id = wp_insert_post(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
				'post_title'  => 'Forged fallback referrer',
			)
		);

		$this->handler->set_referrer( get_permalink( $forged_post_id ) );

		$this->handler->set_current_post_context( '-1' );

		$this->assertNull( get_post() );
	}

	private function clear_request_context(): void {
		foreach ( $this->handler->core_fields() as $field_name => $options ) {
			unset( $_POST[ $field_name ], $_REQUEST[ $field_name ] );
		}

		unset(
			$_POST[ $this->handler->post_id_sig_key ],
			$_REQUEST[ $this->handler->post_id_sig_key ],
			$_REQUEST['_wp_http_referer']
		);
	}
}

<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Handler;

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

		unset( $_POST[ $this->handler->post_id_sig_key ] );

		global $post;
		$post = null;
	}

	protected function tearDown(): void {
		unset( $_POST[ $this->handler->post_id_sig_key ] );

		global $post;
		$post = null;

		parent::tearDown();
	}

	public function testTamperedPostContextFallsBackToReferrerPost(): void {
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

		$this->assertSame( $referrer_post_id, get_post()->ID );
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

	public function testNegativeLegacyPostIdDoesNotResolveToPostOne(): void {
		$this->handler->set_referrer( home_url( '/not-a-post-context/' ) );

		$this->handler->set_current_post_context( '-1' );

		$this->assertNull( get_post() );
	}
}

<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha;
use JFB_Modules\Captcha\Module;
use JFB_Modules\Captcha\Re_Captcha_V3\Re_Captcha_V3;
use JFB_Modules\Security\Exceptions\Spam_Exception;

class CaptchaRecaptchaThresholdTest extends \Codeception\TestCase\WPTestCase {

	private $http_filter;

	protected function tearDown(): void {
		if ( $this->http_filter ) {
			remove_filter( 'pre_http_request', $this->http_filter );
			$this->http_filter = null;
		}

		jet_fb_live()->set_form_id( false );

		parent::tearDown();
	}

	public function testRecaptchaV3RejectsScoresBelowConfiguredThreshold(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( 0.9 );

		$this->fake_recaptcha_response( 0.8 );

		$this->expectException( Spam_Exception::class );
		$this->expectExceptionMessage( Module::SPAM_EXCEPTION );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'recaptcha-token',
			)
		);
	}

	public function testRecaptchaV3AcceptsScoresAboveConfiguredThreshold(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( 0.9 );

		$this->fake_recaptcha_response( 0.95 );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'recaptcha-token',
			)
		);

		$this->assertTrue( true );
	}

	public function testRecaptchaV3AcceptsScoreEqualToConfiguredThreshold(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( 0.9 );

		$this->fake_recaptcha_response( 0.9 );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'recaptcha-token',
			)
		);

		$this->assertTrue( true );
	}

	public function testRecaptchaV3AcceptsMaximumScoreAtMaximumThreshold(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( 1.0 );

		$this->fake_recaptcha_response( 1.0 );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'recaptcha-token',
			)
		);

		$this->assertTrue( true );
	}

	/**
	 * @dataProvider invalid_threshold_provider
	 *
	 * @param mixed $threshold
	 */
	public function testRecaptchaV3FallsBackToDefaultThresholdForInvalidStoredValues( $threshold ): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( $threshold );

		$this->fake_recaptcha_response( 0.1 );

		$this->expectException( Spam_Exception::class );
		$this->expectExceptionMessage( Module::SPAM_EXCEPTION );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'recaptcha-token',
			)
		);
	}

	public function invalid_threshold_provider(): array {
		return array(
			'missing/null'   => array( null ),
			'empty string'   => array( '' ),
			'malformed text' => array( 'abc' ),
			'below range'    => array( -0.1 ),
			'above range'    => array( 1.1 ),
		);
	}

	private function make_captcha( $threshold ): Re_Captcha_V3 {
		return ( new Re_Captcha_V3() )->sanitize_options(
			array(
				'google' => array(
					'secret'    => 'recaptcha-secret',
					'key'       => 'recaptcha-site-key',
					'threshold' => $threshold,
				),
			)
		);
	}

	private function fake_recaptcha_response( float $score ): void {
		$this->http_filter = function () use ( $score ) {
			return array(
				'headers'  => array(),
				'body'     => wp_json_encode(
					array(
						'success' => true,
						'action'  => Module::PREFIX . jet_fb_live()->form_id,
						'score'   => $score,
					)
				),
				'response' => array(
					'code'    => 200,
					'message' => 'OK',
				),
				'cookies'  => array(),
				'filename' => null,
			);
		};

		add_filter( 'pre_http_request', $this->http_filter );
	}
}

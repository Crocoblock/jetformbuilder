<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha;
use JFB_Modules\Captcha\Hcaptcha\Hcaptcha;
use JFB_Modules\Captcha\Module;
use JFB_Modules\Security\Exceptions\Spam_Exception;

class CaptchaHcaptchaSiteKeyTest extends \Codeception\TestCase\WPTestCase {

	private $http_filter;
	private $options_filter;

	protected function tearDown(): void {
		if ( $this->http_filter ) {
			remove_filter( 'pre_http_request', $this->http_filter );
			$this->http_filter = null;
		}

		if ( $this->options_filter ) {
			remove_filter( 'jet-form-builder/h-captcha/options', $this->options_filter );
			$this->options_filter = null;
		}

		jet_fb_live()->set_form_id( false );

		parent::tearDown();
	}

	public function testHcaptchaBindsVerificationToConfiguredSiteKey(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha();

		$this->fake_hcaptcha_response( true );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'hcaptcha-token',
			)
		);
	}

	public function testHcaptchaRejectsProviderSiteKeyMismatch(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha();

		$this->fake_hcaptcha_response( false );

		$this->expectException( Spam_Exception::class );
		$this->expectExceptionMessage( Module::SPAM_EXCEPTION );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'hcaptcha-token',
			)
		);
	}

	public function testHcaptchaBindsVerificationToFilteredRenderedSiteKey(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha();

		$this->options_filter = function ( array $options ): array {
			$options['sitekey'] = 'filtered-site-key';

			return $options;
		};

		add_filter( 'jet-form-builder/h-captcha/options', $this->options_filter );
		$this->fake_hcaptcha_response( true, 'filtered-site-key' );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'hcaptcha-token',
			)
		);
	}

	public function testHcaptchaRejectsEmptyConfiguredSiteKey(): void {
		jet_fb_live()->set_form_id( 123 );
		$captcha = $this->make_captcha( '' );

		$this->expectException( Spam_Exception::class );
		$this->expectExceptionMessage( Module::SPAM_EXCEPTION );

		$captcha->verify(
			array(
				Base_Captcha::FIELD => 'hcaptcha-token',
			)
		);
	}

	private function make_captcha( string $site_key = 'expected-site-key' ): Hcaptcha {
		return ( new Hcaptcha() )->sanitize_options(
			array(
				'hcaptcha' => array(
					'secret' => 'hcaptcha-secret',
					'key'    => $site_key,
				),
			)
		);
	}

	private function fake_hcaptcha_response( bool $success, string $expected_site_key = 'expected-site-key' ): void {
		$this->http_filter = function ( $preempt, array $args ) use ( $success, $expected_site_key ) {
			$this->assertSame( $expected_site_key, $args['body']['sitekey'] ?? '' );

			return array(
				'headers'  => array(),
				'body'     => wp_json_encode(
					array(
						'success'     => $success,
						'error-codes' => $success ? array() : array( 'sitekey-secret-mismatch' ),
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

		add_filter( 'pre_http_request', $this->http_filter, 10, 2 );
	}
}

<?php


namespace JFB_Modules\Captcha\Hcaptcha;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Captcha\Module;
use JFB_Modules\Captcha\Re_Captcha_V3\Verify_Token_Action as BaseVerify;

class Verify_Token_Action extends BaseVerify {

	private $site_key;

	public function base_url(): string {
		return 'https://hcaptcha.com/';
	}

	public function before_make_request() {
		parent::before_make_request();

		if ( $this->site_key ) {
			return;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION, 'Empty site key. Spammer detected' );
	}

	public function send_request() {
		$this->request();
		$this->response_body_as_array();

		$response = $this->get_response_body();

		if ( ! empty( $response['success'] ) ) {
			return $response;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION );
	}

	public function set_site_key( string $site_key ): Verify_Token_Action {
		$this->site_key = $site_key;

		return $this;
	}

	public function action_body() {
		return array_merge(
			parent::action_body(),
			array( 'sitekey' => $this->site_key )
		);
	}

}

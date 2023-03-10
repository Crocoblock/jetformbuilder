<?php


namespace Jet_Form_Builder\Integrations\Hcaptcha;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use \Jet_Form_Builder\Integrations\Re_Captcha_V3\Verify_Token_Action as BaseVerify;

class Verify_Token_Action extends BaseVerify {

	public function base_url(): string {
		return 'https://hcaptcha.com/';
	}

	public function send_request() {
		$this->request();
		$this->response_body_as_array();

		$response = $this->get_response_body();

		if ( ! empty( $response['success'] ) ) {
			return $response;
		}

		throw new Gateway_Exception( 'captcha_failed' );
	}

}
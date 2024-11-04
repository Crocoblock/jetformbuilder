<?php


namespace JFB_Modules\Captcha\Friendly_Captcha;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Gateways\Actions_Abstract\Action_Application_Raw_Body_It;
use JFB_Modules\Gateways\Base_Gateway_Action;

class Verify_Token_Action extends Base_Gateway_Action implements
	Action_Application_Raw_Body_It {

	private $secret;
	private $solution;
	private $site_key;

	public function action_endpoint() {
		return 'siteverify';
	}

	public function base_url(): string {
		return 'https://api.friendlycaptcha.com/api/v1/';
	}

	public function send_request() {
		$response = parent::send_request();

		if ( ! empty( $response['success'] ) ) {
			return $response;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION, $response, $this->get_request_args() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( $this->solution && $this->secret && $this->site_key ) {
			return;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION, 'Empty solution. Spammer detected' );
	}

	public function set_secret( string $secret ): Verify_Token_Action {
		$this->secret = $secret;

		return $this;
	}

	public function set_solution( string $solution ): Verify_Token_Action {
		$this->solution = $solution;

		return $this;
	}

	public function set_site_key( string $key ): Verify_Token_Action {
		$this->site_key = $key;

		return $this;
	}


	public function action_body() {
		return array(
			'secret'   => $this->secret,
			'solution' => $this->solution,
			'sitekey'  => $this->site_key,
		);
	}

}

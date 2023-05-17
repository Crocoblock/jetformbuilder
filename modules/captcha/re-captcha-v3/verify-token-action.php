<?php


namespace JFB_Modules\Captcha\Re_Captcha_V3;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Actions_Abstract\Action_Application_Raw_Body_It;
use Jet_Form_Builder\Gateways\Base_Gateway_Action;
use Jet_Form_Builder\Integrations\Forms_Captcha;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Verify_Token_Action extends Base_Gateway_Action implements
	Action_Application_Raw_Body_It {

	private $secret;
	private $token;
	private $action;
	private $threshold = 0.5;

	public function action_endpoint() {
		return 'siteverify';
	}

	public function base_url(): string {
		return 'https://www.google.com/recaptcha/api/';
	}

	public function send_request() {
		$response = parent::send_request();

		$action = $response['action'] ?? '';
		$score  = $response['score'] ?? 0;

		if ( $this->action === $action && $score > $this->threshold ) {
			return $response;
		}

		throw new Gateway_Exception( 'captcha_failed', $response, $this->get_request_args() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( ! $this->action ) {
			$this->set_action( jet_fb_live()->form_id );
		}

		if ( $this->token && $this->secret ) {
			return;
		}

		throw new Gateway_Exception( 'captcha_failed', 'Empty token. Spammer detected' );
	}

	public function set_secret( string $secret ): Verify_Token_Action {
		$this->secret = $secret;

		return $this;
	}

	public function set_token( string $token ): Verify_Token_Action {
		$this->token = $token;

		return $this;
	}

	/**
	 * @param string|int $action
	 *
	 * @return $this
	 */
	public function set_action( $action ): Verify_Token_Action {
		$this->action = is_numeric( $action ) ? Forms_Captcha::PREFIX . $action : $action;

		return $this;
	}

	/**
	 * @param float|string|int $threshold
	 */
	public function set_threshold( $threshold ): Verify_Token_Action {
		$this->threshold = floatval( $threshold );

		return $this;
	}

	public function action_body() {
		return array(
			'secret'   => $this->secret,
			'response' => $this->token,
		);
	}

}

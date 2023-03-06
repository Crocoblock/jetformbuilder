<?php


namespace Jet_Form_Builder\Integrations\Re_Captcha_V3;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Base_Gateway_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Verify_Token_Action extends Base_Gateway_Action {

	private $secret;
	private $token;
	private $action;
	private $threshold = 0.5;

	const PREFIX = 'jet_form_builder_captcha__';

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
			return;
		}

		throw new Gateway_Exception( 'captcha_failed', $response );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( $this->token && $this->secret ) {
			return;
		}

		throw new Gateway_Exception( 'captcha_failed' );
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
		$this->action = is_numeric( $action ) ? self::PREFIX . $action : $action;

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
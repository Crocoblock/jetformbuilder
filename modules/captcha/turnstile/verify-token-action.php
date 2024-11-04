<?php


namespace JFB_Modules\Captcha\Turnstile;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Gateways\Actions_Abstract\Action_Application_Raw_Body_It;
use JFB_Modules\Gateways\Base_Gateway_Action;
use JFB_Modules\Captcha\Module;

class Verify_Token_Action extends Base_Gateway_Action implements
	Action_Application_Raw_Body_It {

	private $secret;
	private $challenge;
	private $ip;
	private $action;

	public function action_endpoint() {
		return 'siteverify';
	}

	public function base_url(): string {
		return 'https://challenges.cloudflare.com/turnstile/v0/';
	}

	public function send_request() {
		$response = parent::send_request();

		$action = $response['action'] ?? '';

		if ( $this->action === $action && ! empty( $response['success'] ) ) {
			return $response;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION, $response, $this->get_request_args() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( ! $this->ip ) {
			$this->set_ip( Http_Tools::get_ip_address() );
		}

		if ( ! $this->action ) {
			$this->set_action( jet_fb_live()->form_id );
		}

		if ( $this->ip && $this->secret && $this->challenge ) {
			return;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Gateway_Exception( Module::SPAM_EXCEPTION, 'Empty solution. Spammer detected' );
	}

	public function set_secret( string $secret ): Verify_Token_Action {
		$this->secret = $secret;

		return $this;
	}

	public function set_challenge( string $challenge ): Verify_Token_Action {
		$this->challenge = $challenge;

		return $this;
	}

	public function set_ip( string $ip ): Verify_Token_Action {
		$this->ip = $ip;

		return $this;
	}

	/**
	 * @param string|int $action
	 *
	 * @return Verify_Token_Action
	 */
	public function set_action( $action ): Verify_Token_Action {
		$this->action = is_numeric( $action ) ? Module::PREFIX . $action : $action;

		return $this;
	}

	public function action_body() {
		return array(
			'secret'   => $this->secret,
			'response' => $this->challenge,
			'remoteip' => $this->ip,
		);
	}

}

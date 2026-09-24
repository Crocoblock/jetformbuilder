<?php


namespace JFB_Modules\Ai\External_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Gateways\Base_Gateway_Action;

class Generate_Form_Action extends Base_Gateway_Action {

	/**
	 * Maximum allowed length (in characters) of the `prompt` value.
	 *
	 * The prompt is sent as a GET query argument, so it must stay well
	 * under common web server/proxy URL length limits.
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/14825
	 */
	const MAX_PROMPT_LENGTH = 4000;

	protected $method = \WP_REST_Server::READABLE;

	protected $license = '';
	protected $prompt  = '';

	public function base_url(): string {
		return 'https://account.crocoblock.com/';
	}

	public function action_query_args(): array {
		$this->assert_prompt_length();

		return array(
			'ai_api'  => 'jfb',
			'license' => $this->get_licence(),
			'prompt'  => $this->prompt,
		);
	}

	/**
	 * @throws Gateway_Exception
	 */
	protected function assert_prompt_length() {
		if ( mb_strlen( $this->prompt, 'UTF-8' ) <= self::MAX_PROMPT_LENGTH ) {
			return;
		}

		throw new Gateway_Exception(
			esc_html(
				sprintf(
				/* translators: %d: maximum allowed prompt length */
					__( 'Prompt is too long. Maximum length is %d characters.', 'jet-form-builder' ),
					self::MAX_PROMPT_LENGTH
				)
			)
		);
	}

	/**
	 * @return string
	 */
	public function get_licence(): string {
		if ( defined( 'JFB_AI_LICENSE' ) ) {
			return JFB_AI_LICENSE;
		}

		return $this->license;
	}

	/**
	 * @param string $license
	 */
	public function set_license( string $license ) {
		$this->license = $license;
	}

	/**
	 * @param string $prompt
	 */
	public function set_prompt( string $prompt ) {
		$this->prompt = $prompt;
	}

	/**
	 * @return string
	 */
	public function get_prompt(): string {
		return $this->prompt;
	}

}

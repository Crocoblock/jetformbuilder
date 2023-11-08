<?php


namespace JFB_Modules\Ai\External_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Gateways\Base_Gateway_Action;

class Generate_Form_Action extends Base_Gateway_Action {

	protected $method = \WP_REST_Server::READABLE;

	protected $license = '';
	protected $prompt  = '';

	public function base_url(): string {
		return 'https://account.crocoblock.com/';
	}

	public function action_query_args(): array {
		return array(
			'ai_api'  => 'jfb',
			'license' => $this->get_licence(),
			'prompt'  => $this->prompt,
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

}

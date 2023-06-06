<?php


namespace JFB_Components\Wp_Nonce;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wp_Nonce {

	const DEFAULT_OPTIONS = array(
		'name' => '_nonce',
	);

	protected $action;
	protected $options;

	/**
	 * Wp_Nonce constructor.
	 *
	 * @param int|string $action
	 */
	public function __construct( $action = - 1, array $options = self::DEFAULT_OPTIONS ) {
		$this->action  = $action;
		$this->options = $options;
	}

	/**
	 * @return false|string
	 */
	public function create() {
		return wp_create_nonce( $this->action );
	}

	/**
	 * @return false|int
	 */
	public function verify() {
		return wp_verify_nonce( $this->get_nonce(), $this->action );
	}

	protected function get_nonce(): string {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_key( $_REQUEST[ $this->options['name'] ] ?? '' );
	}

	/**
	 * @return int|string
	 */
	public function get_action() {
		return $this->action;
	}

	public function get_name(): string {
		return $this->options['name'];
	}

}
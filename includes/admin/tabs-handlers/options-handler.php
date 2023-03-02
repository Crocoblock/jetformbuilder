<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Options_Handler extends Base_Handler {

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$dev_mode           = 'true' === sanitize_key( $_POST['enable_dev_mode'] ?? '' );
		$next_disable       = 'true' === sanitize_key( $_POST['disable_next_button'] ?? '' );
		$clear_on_uninstall = 'true' === sanitize_key( $_POST['clear_on_uninstall'] ?? '' );

		$result = $this->update_options(
			array(
				'enable_dev_mode'     => $dev_mode,
				'disable_next_button' => $next_disable,
				'clear_on_uninstall'  => $clear_on_uninstall,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'enable_dev_mode'     => false,
				'disable_next_button' => true,
				'clear_on_uninstall'  => false,
			)
		);
	}
}

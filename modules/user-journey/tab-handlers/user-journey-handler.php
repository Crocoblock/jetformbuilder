<?php


namespace JFB_Modules\User_Journey\Tab_Handlers;

// If this file is called directly, abort.
use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Handler extends Base_Handler {

	public function slug() {
		return 'user-journey-tab';
	}

	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$enable_user_journey = 'true' === sanitize_key( $_POST['enable_user_journey'] ?? '' );
		$storage_type        = sanitize_key( $_POST['storage_type'] ?? 'local' );
		$clear_after_submit  = sanitize_key( $_POST['clear_after_submit'] ?? 'success' );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'enable_user_journey' => $enable_user_journey,
				'storage_type'        => $storage_type,
				'clear_after_submit'  => $clear_after_submit,
			)
		);

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options(
			array(
				'enable_user_journey' => false,
				'storage_type'        => 'local',
				'clear_after_submit'  => 'success',
			)
		);
	}
}

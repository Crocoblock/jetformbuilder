<?php

namespace JFB_Modules\Blocks_V2\Phone_Field\Admin_Tabs;

use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Phone Field Settings Handler
 *
 * Manages global settings for Phone Field (ipinfo.io API token)
 */
class Phone_Field_Handler extends Base_Handler {

	/**
	 * Default options
	 */
	const OPTIONS = array(
		'ipinfo_token' => '',
	);

	/**
	 * Tab slug
	 */
	public function slug() {
		return 'phone-field-tab';
	}

	/**
	 * Handle POST request to save settings
	 */
	public function on_get_request() {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$ipinfo_token = sanitize_text_field( wp_unslash( $_POST['ipinfo_token'] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options(
			array(
				'ipinfo_token' => $ipinfo_token,
			)
		);

		$this->send_response( $result );
	}

	/**
	 * Load options (required by Base_Handler)
	 */
	public function on_load() {
		return $this->get_options( self::OPTIONS );
	}
}

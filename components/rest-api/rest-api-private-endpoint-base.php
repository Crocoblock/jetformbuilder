<?php
namespace JFB_Components\Rest_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Base class for REST API endpoints that require authentication
 * and form editing permissions.
 *
 * This class extends Rest_Api_Endpoint_Base and implements
 * permission checking to ensure only users with proper
 * capabilities can access these endpoints.
 *
 * @since 3.5.3
 */
abstract class Rest_Api_Private_Endpoint_Base extends Rest_Api_Endpoint_Base {

	/**
	 * Check if the current user has permission to access this endpoint.
	 *
	 * Verifies that the user has the capability to edit JetFormBuilder forms.
	 * Non-authenticated users automatically fail this check.
	 *
	 * @return bool True if user has permission, false otherwise.
	 */
	public function check_permission(): bool {
		return current_user_can( 'edit_jet_fb_forms' );
	}

}

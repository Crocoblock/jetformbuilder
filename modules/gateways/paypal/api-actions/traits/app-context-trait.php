<?php


namespace JFB_Modules\Gateways\Paypal\Api_Actions\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Trait AppContextTrait
 *
 * @package Jet_FB_Paypal\ApiActions
 */
trait App_Context_Trait {

	private $app_context = array();

	public function set_app_context( array $context ) {
		$blog_name = get_option( 'blogname' );

		$this->app_context = array_merge(
			$this->app_context,
			array(
				'landing_page' => 'BILLING',
				'user_action'  => $this->action_slug(),
				'brand_name'   => $blog_name ?: __( 'Site name', 'jet-form-builder' ),
			),
			$context
		);

		return $this;
	}

	public function get_app_context() {
		return $this->app_context;
	}

}

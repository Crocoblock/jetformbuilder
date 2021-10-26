<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

/**
 * Trait App_Context_Trait
 *
 * @package Jet_Form_Builder\Gateways\Paypal\Actions
 */
trait App_Context_Trait {

	private $app_context = array();

	public function set_app_context( array $context ) {
		$this->app_context = array_merge(
			$this->app_context,
			array(
				'landing_page' => 'BILLING',
				'user_action'  => $this->action_slug(),
				'brand_name'   => get_option( 'blogname' ),
			),
			$context
		);

		return $this;
	}

	public function get_app_context() {
		return $this->app_context;
	}

}

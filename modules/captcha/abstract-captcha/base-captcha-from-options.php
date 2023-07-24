<?php


namespace JFB_Modules\Captcha\Abstract_Captcha;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Captcha_From_Options extends Base_Captcha implements Captcha_Settings_From_Options {

	public function sanitize_options( array $options ): Base_Captcha {
		parent::sanitize_options( $options );

		if ( empty( $this->options['use_global'] ) ) {
			return $this;
		}

		$this->options = array_merge(
			$this->options,
			$this->on_load_options()
		);

		return $this;
	}

	/**
	 * Runs when the JetFormBuilder -> Settings page is loaded
	 * or when form is submitted
	 */
	public function on_load_options(): array {
		$options = Tab_Handler_Manager::get_options( 'captcha-tab' );

		return $options[ $this->get_id() ] ?? array();
	}

}

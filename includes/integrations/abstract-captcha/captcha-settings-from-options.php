<?php


namespace Jet_Form_Builder\Integrations\Abstract_Captcha;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Captcha_Settings_From_Options {

	/**
	 * Runs when settings are saved on the
	 * JetFormBuilder -> Settings page
	 */
	public function on_save_options( array $post_request ): array;

	/**
	 * Runs when the JetFormBuilder -> Settings page is loaded
	 */
	public function on_load_options(): array;

}
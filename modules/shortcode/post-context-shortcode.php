<?php


namespace JFB_Modules\Shortcode;

use Jet_Form_Builder\Classes\Security\Submitted_Post_Context;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * [jet_fb_post_context form_id="N"] prints "<post ID>.<signature>" for the
 * post being rendered (a listing item). One form shared by many items gets
 * the item the visitor picked through
 * JetFormBuilderFunctions.setPostContext( form, token ).
 */
class Post_Context_Shortcode extends Shortcode {

	/**
	 * @return string
	 */
	public function get_name() {
		return 'jet_fb_post_context';
	}

	protected function default_args() {
		return array( 'form_id' => 0 );
	}

	/**
	 * @param array $settings
	 *
	 * @return string
	 */
	public function generate( $settings ) {
		return esc_html( Submitted_Post_Context::token_for_current_post( $settings['form_id'] ?? 0 ) );
	}
}

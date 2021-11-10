<?php

namespace Jet_Form_Builder\Integrations;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Plugin;

/**
 * Captcha manager class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Forms_Captcha class
 */
class Forms_Captcha {

	const CAPTCHA_ACTION_PREFIX = 'jet_form_builder_captcha__';

	public static $script_rendered = false;

	private $field_key = '_captcha_token';
	private $api = 'https://www.google.com/recaptcha/api/siteverify';
	private $defaults = array(
		'enabled' => false,
		'key'     => '',
		'secret'  => '',
	);

	private function api_front_url( $key ): string {
		return esc_url_raw( sprintf( 'https://www.google.com/recaptcha/api.js?render=%s', $key ) );
	}

	public function verify( $form_id = null, $is_ajax = false ) {

		$captcha = $this->get_data( $form_id );

		if ( empty( $captcha['enabled'] ) ) {
			return true;
		}

		$request = $this->sanitize_token_from_request();

		if ( empty( $request[ $this->field_key ] ) ) {
			return false;
		}

		$token    = sanitize_text_field( $request[ $this->field_key ] );
		$response = wp_remote_post(
			$this->api,
			array(
				'body' => array(
					'secret'   => $captcha['secret'],
					'response' => $token,
				),
			)
		);

		$body = wp_remote_retrieve_body( $response );
		$body = json_decode( $body, true );

		if ( ! $body || empty( $body['success'] ) ) {
			return false;
		} elseif ( ! empty( $body['action'] ) && ( self::CAPTCHA_ACTION_PREFIX . $form_id ) === $body['action'] ) {

			return $body['success'];
		}

	}

	private function sanitize_token_from_request(): array {
		$response = array();
		$request  = jet_form_builder()->form_handler->request_handler->get_request();

		if ( isset( $request[ $this->field_key ] ) ) {
			$response[ $this->field_key ] = sanitize_text_field( $request[ $this->field_key ] );
		}

		return $response;
	}

	/**
	 * Returns captcha settings for passed form ID
	 *
	 * @param  [type] $post_id [description]
	 *
	 * @return [type]          [description]
	 */
	public function get_data( $form_id = null ) {

		if ( ! $form_id ) {
			$form_id = get_the_ID();
		}

		$captcha = Plugin::instance()->post_type->get_recaptcha( $form_id );

		if ( ! $captcha || ! is_array( $captcha ) ) {
			return $this->defaults;
		} elseif ( isset( $captcha['use_global'] ) && $captcha['use_global'] ) {
			return Tab_Handler_Manager::instance()->options(
				'captcha-tab',
				array( 'enabled' => $captcha['enabled'] )
			);

		} else {
			return wp_parse_args( $captcha, $this->defaults );
		}

	}

	public function render( $form_id ) {

		$captcha = $this->get_data( $form_id );

		if ( empty( $captcha['enabled'] ) || empty( $captcha['key'] ) ) {
			return;
		}

		$key = esc_attr( $captcha['key'] );

		wp_enqueue_script(
			'jet-form-builder-recaptcha',
			$this->api_front_url( $key ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_enqueue_script(
			'jet-form-builder-recaptcha-handler',
			jet_form_builder()->plugin_url( 'assets/js/re-captcha-v3.js' ),
			array( 'jquery' ),
			jet_form_builder()->get_version(),
			true
		);

		$action_prefix = self::CAPTCHA_ACTION_PREFIX;

		wp_add_inline_script(
			'jet-form-builder-recaptcha-handler',
			"
		    window.JetFormBuilderReCaptchaConfig = window.JetFormBuilderReCaptchaConfig || {};
		    window.JetFormBuilderReCaptchaConfig[ $form_id ] = { key: '$key', action_prefix: '$action_prefix' };
		",
			'before'
		);

		?>
        <input type="hidden" class="captcha-token" name="<?php echo esc_attr( $this->field_key ); ?>" value="">
		<?php
	}

}

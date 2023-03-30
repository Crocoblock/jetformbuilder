<?php


namespace Jet_Form_Builder\Integrations\Turnstile;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha_From_Options;
use Jet_Form_Builder\Integrations\Forms_Captcha;

class Turnstile extends Base_Captcha_From_Options {

	public function get_id(): string {
		return 'turnstile';
	}

	public function get_title(): string {
		return __( 'Turnstile', 'jet-form-builder' );
	}

	public function verify( array $request ) {
		$action = ( new Verify_Token_Action() )
			->set_secret( $this->options['secret'] ?? '' )
			->set_challenge( $request[ self::FIELD ] ?? '' );

		try {
			$action->send_request();
		} catch ( Gateway_Exception $exception ) {
			throw new Request_Exception(
				'captcha_failed',
				$exception->getMessage(),
				...$exception->get_additional()
			);
		}
	}

	public function render(): string {
		$captcha_args = apply_filters(
			'jet-form-builder/turnstile/options',
			array(
				'sitekey' => $this->options['key'] ?? '',
				'action'  => Forms_Captcha::PREFIX . jet_fb_live()->form_id,
			)
		);

		$captcha_url = apply_filters(
			'jet-form-builder/turnstile/url',
			esc_url_raw(
				'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=jfbTurnstileOnLoad&render=explicit'
			)
		);

		wp_register_script(
			Base_Captcha::HANDLE_USER,
			jet_form_builder()->plugin_url( 'assets/js/frontend/turnstile.js' ),
			array( 'jet-plugins' ),
			jet_form_builder()->get_version(),
			true
		);

		jet_form_builder()->captcha->add_inline_config( $captcha_args );

		wp_enqueue_script(
			Base_Captcha::HANDLE_API,
			$captcha_url,
			array( Base_Captcha::HANDLE_USER ),
			'1.0.0',
			true
		);

		return sprintf(
			'<div class="jet-form-builder-row captcha-token-container" data-validation-type="advanced">
	<input type="hidden" class="%1$s" name="%2$s" value="" data-jfb-sync required="required">
</div>',
			self::FIELD_CLASS,
			self::FIELD
		);
	}

	public function on_save_options( array $post_request ): array {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$secret = sanitize_text_field( $post_request['secret'] ?? '' );
		$key    = sanitize_text_field( $post_request['key'] ?? '' );

		// phpcs:enable WordPress.Security.NonceVerification.Missing

		return array(
			'secret' => $secret,
			'key'    => $key,
		);
	}
}

<?php


namespace Jet_Form_Builder\Integrations\Hcaptcha;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha_From_Options;

class Hcaptcha extends Base_Captcha_From_Options {

	public function get_id(): string {
		return 'hcaptcha';
	}

	public function get_title(): string {
		return __( 'hCaptcha', 'jet-form-builder' );
	}

	public function verify( array $request ) {
		$action = ( new Verify_Token_Action() )
			->set_secret( $this->options['secret'] ?? '' )
			->set_token( $request[ self::FIELD ] ?? '' )
			->set_action( jet_fb_live()->form_id );

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
		$form_id = jet_fb_live()->form_id;

		$captcha_args = apply_filters(
			'jet-form-builder/h-captcha/options',
			array(
				'sitekey' => $this->options['key'] ?? ''
			)
		);

		$config = Tools::encode_json( $captcha_args );

		$captcha_url = apply_filters(
			'jet-form-builder/h-captcha/url',
			esc_url_raw( 'https://js.hcaptcha.com/1/api.js?onload=jfbHCaptchaOnLoad&render=explicit' )
		);

		wp_register_script(
			Base_Captcha::HANDLE_USER,
			jet_form_builder()->plugin_url( 'assets/js/h-captcha.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_add_inline_script(
			Base_Captcha::HANDLE_USER,
			"
		    window.JetFormBuilderCaptchaConfig = window.JetFormBuilderCaptchaConfig || {};
		    window.JetFormBuilderCaptchaConfig[ $form_id ] = {$config};
		",
			'before'
		);

		wp_enqueue_script(
			Base_Captcha::HANDLE_API,
			$captcha_url,
			array( Base_Captcha::HANDLE_USER ),
			jet_form_builder()->get_version(),
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
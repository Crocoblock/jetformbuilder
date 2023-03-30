<?php


namespace Jet_Form_Builder\Integrations\Friendly_Captcha;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha_From_Options;

class Friendly_Captcha extends Base_Captcha_From_Options {

	public function get_id(): string {
		return 'friendly';
	}

	public function get_title(): string {
		return __( 'Friendly Captcha', 'jet-form-builder' );
	}

	public function verify( array $request ) {
		$action = ( new Verify_Token_Action() )
			->set_secret( $this->options['secret'] ?? '' )
			->set_site_key( $this->options['key'] ?? '' )
			->set_solution( $request[ self::FIELD ] ?? '' );

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
			'jet-form-builder/friendly-captcha/options',
			array(
				'sitekey' => $this->options['key'] ?? '',
			)
		);

		wp_enqueue_script(
			Base_Captcha::HANDLE_USER,
			jet_form_builder()->plugin_url( 'assets/js/frontend/friendly.captcha.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		jet_form_builder()->captcha->add_inline_config( $captcha_args );

		return sprintf(
			'<div class="jet-form-builder-row captcha-token-container" data-validation-type="advanced">
	<input type="hidden" class="%1$s" name="%2$s" value="" data-jfb-sync required="required">
	<div class="captcha-token-container--inner"></div>
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

<?php


namespace JFB_Modules\Captcha\Friendly_Captcha;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha_From_Options;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Editor_Script;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Frontend_Script;
use JFB_Modules\Security\Exceptions\Spam_Exception;

class Friendly_Captcha extends Base_Captcha_From_Options implements
	Captcha_Separate_Frontend_Script,
	Captcha_Separate_Editor_Script {

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
			throw new Spam_Exception(
				Module::SPAM_EXCEPTION,
				$exception->getMessage(), // phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				...$exception->get_additional() // phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			);
		}
	}

	/**
	 * @return string
	 */
	public function render(): string {
		$captcha_args = apply_filters(
			'jet-form-builder/friendly-captcha/options',
			array(
				'sitekey' => $this->options['key'] ?? '',
			)
		);

		if ( empty( $captcha_args['sitekey'] ) ) {
			return '';
		}

		$handle = $this->get_handle();
		wp_enqueue_script( $handle );

		/**
		 * In some themes, the "the_content" filter may be executed before the "wp_enqueue_scripts" action.
		 * Therefore, we should make sure that our script is registered before adding an inline script.
		 */
		$this->register_frontend_scripts();
		$this->module()->add_inline_config( $captcha_args, $handle );

		return sprintf(
			'<div class="jet-form-builder-row captcha-token-container" data-validation-type="inherit">
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

	public function enqueue_editor_script() {
		$script_asset = require_once $this->module()->get_dir( 'assets/build/friendly.captcha/editor.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		wp_enqueue_script(
			$this->get_handle(),
			$this->module()->get_url( 'assets/build/friendly.captcha/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function register_frontend_scripts() {
		$script_asset = require_once $this->module()->get_dir( 'assets/build/friendly.captcha/frontend.asset.php' );

		// scripts have already registered
		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			'jet-plugins'
		);

		wp_register_script(
			$this->get_handle(),
			$this->module()->get_url( 'assets/build/friendly.captcha/frontend.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}
}

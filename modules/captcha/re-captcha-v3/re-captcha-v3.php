<?php


namespace JFB_Modules\Captcha\Re_Captcha_V3;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha;
use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha_From_Options;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Editor_Script;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Frontend_Script;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Settings_From_Options;
use JFB_Modules\Captcha\Module;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Re_Captcha_V3 extends Base_Captcha_From_Options implements
	Captcha_Separate_Frontend_Script,
	Captcha_Separate_Editor_Script {

	const OPTIONS = array(
		'secret'    => '',
		'key'       => '',
		'threshold' => 0.5,
	);

	public function get_id(): string {
		return 'google';
	}

	public function get_title(): string {
		return __( 'reCAPTCHA v3', 'jet-form-builder' );
	}

	public function verify( array $request ) {
		$action = ( new Verify_Token_Action() )
			->set_secret( $this->options['secret'] ?? '' )
			->set_token( $request[ self::FIELD ] ?? '' );

		try {
			$action->send_request();
		} catch ( Gateway_Exception $exception ) {
			throw new Spam_Exception(
				'captcha_failed',
				$exception->getMessage(), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				...$exception->get_additional() // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			);
		}
	}

	/**
	 * @return string
	 */
	public function render(): string {
		$key = esc_attr( $this->options['key'] ?? '' );
		$url = esc_url_raw( sprintf( 'https://www.google.com/recaptcha/api.js?render=%s', $key ) );

		if ( ! $key || ! $url ) {
			return '';
		}

		$handle = $this->get_handle();

		wp_enqueue_script(
			$handle . '-api',
			$url,
			array(),
			'1.0.0',
			true
		);

		$handle = $this->get_handle();
		wp_enqueue_script( $handle );

		/**
		 * In some themes, the "the_content" filter may be executed before the "wp_enqueue_scripts" action.
		 * Therefore, we should make sure that our script is registered before adding an inline script.
		 */
		$this->register_frontend_scripts();
		$this->module()->add_inline_config( array( 'key' => $key ), $handle );

		return sprintf(
			'<input type="hidden" class="%1$s" name="%2$s" value=""/>',
			self::FIELD_CLASS,
			self::FIELD
		);
	}

	public function sanitize_options( array $options ): Base_Captcha {
		if ( isset( $options[ $this->get_id() ] ) ) {
			parent::sanitize_options( $options );

			return $this;
		}

		/**
		 * For backward compatibility
		 */
		$this->options = wp_array_slice_assoc( $options, array_keys( self::OPTIONS ) );

		if ( empty( $options['use_global'] ) ) {
			return $this;
		}

		$this->options = array_merge(
			$this->options,
			$this->on_load_options()
		);

		return $this;
	}

	public function on_save_options( array $post_request ): array {
		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$secret    = sanitize_text_field( $post_request['secret'] ?? '' );
		$key       = sanitize_text_field( $post_request['key'] ?? '' );
		$threshold = filter_var( $post_request['threshold'] ?? '', FILTER_VALIDATE_FLOAT );
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$threshold = false === $threshold ? self::OPTIONS['threshold'] : $threshold;

		return array(
			'secret'    => $secret,
			'key'       => $key,
			'threshold' => $threshold,
		);
	}

	/**
	 * @return array
	 * @see Captcha_Settings_From_Options
	 */
	public function on_load_options(): array {
		$parent = parent::on_load_options();

		if ( ! empty( $parent ) ) {
			return $parent;
		}

		/**
		 * For backward compatibility
		 */
		$options = Tab_Handler_Manager::get_options( 'captcha-tab', self::OPTIONS );

		return wp_array_slice_assoc( $options, array_keys( self::OPTIONS ) );
	}

	public function enqueue_editor_script() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->module()->get_url( 'assets-build/js/re-captcha-v3/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function register_frontend_scripts() {
		$handle = $this->get_handle();

		if ( wp_script_is( $handle, 'registered' ) ) {
			return;
		}
		wp_register_script(
			$handle,
			$this->module()->get_url( 'assets-build/js/re-captcha-v3/frontend.js' ),
			array( 'jet-plugins' ),
			jet_form_builder()->get_version(),
			true
		);
	}
}

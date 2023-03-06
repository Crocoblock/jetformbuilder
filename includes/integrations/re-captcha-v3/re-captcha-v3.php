<?php


namespace Jet_Form_Builder\Integrations\Re_Captcha_V3;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha_From_Options;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Re_Captcha_V3 extends Base_Captcha_From_Options {

	private $field_key = '_captcha_token';

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
			->set_token( $request[ $this->field_key ] ?? '' )
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
		$key     = esc_attr( $this->options['key'] ?? '' );
		$url     = esc_url_raw( sprintf( 'https://www.google.com/recaptcha/api.js?render=%s', $key ) );
		$form_id = jet_fb_live()->form_id;

		wp_enqueue_script(
			'jet-form-builder-recaptcha',
			$url,
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

		wp_add_inline_script(
			'jet-form-builder-recaptcha-handler',
			"
		    window.JetFormBuilderReCaptchaConfig = window.JetFormBuilderReCaptchaConfig || {};
		    window.JetFormBuilderReCaptchaConfig[ $form_id ] = { key: '$key' };
		",
			'before'
		);

		return sprintf(
			'<input type="hidden" class="captcha-token" name="%s" value="">',
			esc_attr( $this->field_key )
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


	public function on_save_options( array $options ) {
	}

	public function on_load_options(): array {
		$options = Tab_Handler_Manager::get_options( 'captcha-tab', self::OPTIONS );

		return wp_array_slice_assoc( $options, array_keys( self::OPTIONS ) );
	}
}
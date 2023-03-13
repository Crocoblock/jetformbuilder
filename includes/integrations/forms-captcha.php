<?php

namespace Jet_Form_Builder\Integrations;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Captcha_Settings_From_Options;
use Jet_Form_Builder\Integrations\Friendly_Captcha\Friendly_Captcha;
use Jet_Form_Builder\Integrations\Hcaptcha\Hcaptcha;
use Jet_Form_Builder\Integrations\Re_Captcha_V3\Re_Captcha_V3;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method Base_Captcha[] rep_get_items()
 *
 * Class Forms_Captcha
 * @package Jet_Form_Builder\Integrations
 */
class Forms_Captcha {

	use Repository_Pattern_Trait;

	/**
	 * @var Base_Captcha
	 */
	private $current;

	public function __construct() {
		$this->rep_install();

		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'on_request' ) );
		add_filter( 'jet-form-builder/before-render/submit-field', array( $this, 'on_render_submit' ), 10, 2 );
		add_filter( 'jet-form-builder/page-config/jfb-settings', array( $this, 'on_localize_config' ) );
		add_filter( 'jet-form-builder/form-builder/config', array( $this, 'on_localize_config' ) );
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/captcha/types',
			array(
				new Re_Captcha_V3(),
				new Hcaptcha(),
				new Friendly_Captcha(),
			)
		);
	}

	/**
	 * @param $request
	 *
	 * @return mixed
	 * @throws Request_Exception
	 */
	public function on_request( $request ) {
		$this->verify( $request );

		return $request;
	}

	public function on_render_submit( string $content, array $attrs ): string {
		if ( 'submit' !== $attrs['action_type'] ?? '' ) {
			return $content;
		}

		$content .= $this->render();

		return $content;
	}

	public function on_localize_config( array $config ): array {
		$captcha_config = array();

		foreach ( $this->rep_get_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
			$captcha_config[] = $captcha->to_array();
		}

		$config['captcha-tab-config'] = $captcha_config;

		return $config;
	}

	/**
	 * @param $request
	 *
	 * @throws Request_Exception
	 */
	protected function verify( $request ) {
		try {
			$this->get_current()->verify( $request );
		} catch ( Repository_Exception $exception ) {
			return;
		}
	}

	public function render(): string {
		try {
			return $this->get_current()->render();
		} catch ( Repository_Exception $exception ) {
			return '';
		}
	}

	/**
	 * Returns captcha settings for current form ID
	 *
	 * @return Base_Captcha
	 * @throws Repository_Exception
	 */
	public function get_current(): Base_Captcha {
		if ( $this->current ) {
			return $this->current;
		}

		$settings = Plugin::instance()->post_type->get_recaptcha( jet_fb_live()->form_id );

		if ( ! $settings || ! is_array( $settings ) ) {
			throw new Repository_Exception( 'Empty captcha settings' );
		}

		$captcha = $settings['captcha'] ?? false;

		/**
		 * For backward compatibility
		 */
		if ( false === $captcha && ! empty( $settings['enabled'] ) ) {
			$captcha = Re_Captcha_V3::class;
		}

		/**
		 * @var Base_Captcha $current
		 */
		$current = $this->rep_clone_item( $captcha );

		$this->current = $current->sanitize_options( $settings );

		return $this->current;
	}


}

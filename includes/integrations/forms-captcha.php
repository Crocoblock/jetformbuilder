<?php

namespace Jet_Form_Builder\Integrations;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;
use Jet_Form_Builder\Integrations\Re_Captcha_V3\Re_Captcha_V3;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Forms_Captcha class
 */
class Forms_Captcha {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();

		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		add_filter( 'jet-form-builder/before-end-form', array( $this, 'handler_render_form' ) );
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/captcha/types',
			array(
				new Re_Captcha_V3(),
			)
		);
	}

	/**
	 * @param $request
	 *
	 * @return mixed
	 * @throws Request_Exception
	 */
	public function handle_request( $request ) {
		$this->verify( $request );

		return $request;
	}

	public function handler_render_form( string $content ): string {
		$content .= $this->render();

		return $content;
	}

	/**
	 * @param $request
	 *
	 * @throws Request_Exception
	 */
	protected function verify( $request ) {
		try {
			$captcha = $this->get_current();
		} catch ( Repository_Exception $exception ) {
			return;
		}

		$captcha->verify( $request );
	}

	public function render(): string {
		try {
			$captcha = $this->get_current();
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $captcha->render();
	}

	/**
	 * Returns captcha settings for current form ID
	 *
	 * @return Base_Captcha
	 * @throws Repository_Exception
	 */
	public function get_current(): Base_Captcha {
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

		return $current->sanitize_options( $settings );
	}


}

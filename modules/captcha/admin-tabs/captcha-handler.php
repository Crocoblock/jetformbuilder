<?php


namespace JFB_Modules\Captcha\Admin_Tabs;

use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Settings_From_Options;
use JFB_Modules\Captcha\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Captcha_Handler extends Base_Handler {

	public function slug() {
		return 'captcha-tab';
	}

	/**
	 * @throws Repository_Exception
	 */
	public function on_get_request() {
		$options = array();

		/** @var Module $module */
		$module = jet_form_builder()->module( 'captcha' );

		/** @var Base_Captcha $captcha */
		foreach ( $module->rep_generate_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
			$slug = $captcha->get_id();

			// phpcs:disable WordPress.Security.NonceVerification.Missing
			if ( ! array_key_exists( $slug, $_POST ) ) {
				$options[ $slug ] = $captcha->on_load_options();
				continue;
			}

			// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			$options[ $slug ] = $captcha->on_save_options( wp_unslash( $_POST[ $slug ] ) );
			// phpcs:enable WordPress.Security.NonceVerification.Missing
		}

		$result = $this->update_options( $options );

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_captcha_options();
	}

	public function on_editor_load(): array {
		return $this->get_captcha_options();
	}

	/**
	 * @return array
	 * @throws Repository_Exception
	 */
	protected function get_captcha_options(): array {
		$options = array();

		/** @var Module $module */
		$module = jet_form_builder()->module( 'captcha' );

		/** @var Base_Captcha $captcha */
		foreach ( $module->rep_generate_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
			$options[ $captcha->get_id() ] = $captcha->on_load_options();
		}

		return $options;
	}
}

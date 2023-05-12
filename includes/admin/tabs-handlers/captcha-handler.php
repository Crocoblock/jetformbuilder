<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

use Jet_Form_Builder\Integrations\Abstract_Captcha\Captcha_Settings_From_Options;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Captcha_Handler extends Base_Handler {

	public function slug() {
		return 'captcha-tab';
	}

	public function on_get_request() {
		$options = array();

		foreach ( jet_form_builder()->captcha->rep_get_items() as $slug => $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
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

	protected function get_captcha_options(): array {
		$options = array();

		foreach ( jet_form_builder()->captcha->rep_get_items() as $slug => $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
			$options[ $slug ] = $captcha->on_load_options();
		}

		return $options;
	}
}

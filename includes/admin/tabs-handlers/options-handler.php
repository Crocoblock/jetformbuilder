<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Options_Handler extends Base_Handler {

	const OPTIONS = array(
		'enable_dev_mode'     => false,
		'clear_on_uninstall'  => false,
		'disable_next_button' => true,
		'scroll_on_next'      => false,
		'auto_focus'          => false,
		'form_records_access_capability' => 'manage_options',
	);

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		$options = array();

		// phpcs:disable WordPress.Security.NonceVerification.Missing
		foreach ( self::OPTIONS as $name => $default ) {
			if ( ! array_key_exists( $name, $_POST ) ) {
				continue;
			}

			if ( is_bool( $default ) ) {
				$options[ $name ] = filter_var(
					sanitize_key( $_POST[ $name ] ),
					defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN
				);
			} else {
				$options[ $name ] = sanitize_text_field( wp_unslash( $_POST[ $name ] ?? '' ));
			}

		}
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		$result = $this->update_options( $options );
		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options();
	}
}

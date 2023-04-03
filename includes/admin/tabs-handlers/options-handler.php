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
	);

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		$options = array();

		foreach ( self::OPTIONS as $name => $default ) {
			// phpcs:disable WordPress.Security.NonceVerification.Missing
			$options[ $name ] = array_key_exists( $name, $_POST )
				? 'true' === sanitize_key( $_POST[ $name ] )
				: $default;
			// phpcs:enable WordPress.Security.NonceVerification.Missing
		}

		$result = $this->update_options( $options );

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options( self::OPTIONS );
	}
}

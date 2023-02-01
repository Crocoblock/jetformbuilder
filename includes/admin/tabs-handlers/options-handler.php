<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

class Options_Handler extends Base_Handler {

	const OPTIONS = array(
		'enable_dev_mode'     => false,
		'clear_on_uninstall'  => false,
		'disable_next_button' => true,
		'scroll_on_next'      => false,
	);

	public function slug() {
		return 'options-tab';
	}

	public function on_get_request() {
		$options = array();

		foreach ( self::OPTIONS as $name => $default ) {
			// phpcs:ignore WordPress.Security.NonceVerification.Missing
			$options[ $name ] = array_key_exists( $name, $_POST )
				? 'true' === sanitize_key( $_POST[ $name ] )
				: $default;
		}

		$result = $this->update_options( $options );

		$this->send_response( $result );
	}

	public function on_load() {
		return $this->get_options( self::OPTIONS );
	}
}

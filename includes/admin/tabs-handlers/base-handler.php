<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;

// If this file is called directly, abort.
use JFB_Components\Repository\Repository_Item_Instance_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Handler implements Repository_Item_Instance_Trait {

	private $prefix = 'jet_form_builder_settings__';

	abstract public function slug();

	abstract public function on_get_request();

	abstract public function on_load();

	public function after_install() {
		add_action( "wp_ajax_jet_fb_save_tab__{$this->slug()}", array( $this, 'on_raw_request' ) );
		add_action( 'jet-fb/admin-pages/before-assets/jfb-settings', array( $this, 'before_assets' ) );
	}

	public function on_raw_request() {
		if (
			empty( $_POST['_nonce'] ) ||
			! wp_verify_nonce( sanitize_key( $_POST['_nonce'] ?? '' ), 'jfb-settings' ) ||
			! current_user_can( 'manage_options' )
		) {
			$this->send_response( false );

			return;
		}

		$this->on_get_request();
	}

	/**
	 * @since 3.1.0
	 *
	 * @return array
	 */
	public function on_editor_load(): array {
		return $this->get_options();
	}

	/**
	 * Define this, if you want to save options
	 * in Tab_Handler_Manager::$_tabs_options.
	 *
	 * Then you can get this data via
	 * $this->get_global_options()
	 *
	 * @return array
	 */
	public function save_global_default() {
		return array();
	}

	public function is_visible( $advanced_options ) {
		return true;
	}

	public function get_options( $if_empty = array() ) {
		$response = get_option( $this->option_name(), false );

		$response = $response
			? json_decode( $response, true )
			: array();

		return array_merge( $if_empty, $response );
	}

	public function update_options( $options ) {
		$options    = wp_json_encode( $options );
		$prev_value = get_option( $this->option_name(), false );

		if ( $prev_value === $options ) {
			return true;
		}

		return update_option( $this->option_name(), $options );
	}

	public function before_assets() {
	}

	public function save_global_options( $if_empty = array() ) {
		Tab_Handler_Manager::instance()->save_options_tab(
			$this->slug(),
			$this->get_options( $if_empty )
		);
	}

	public function get_global_options() {
		return Tab_Handler_Manager::instance()->get_options_tab( $this->slug() );
	}

	public function option_name() {
		return $this->prefix . $this->slug();
	}

	public function get_success_response_data() {
		return array(
			'message' => __( 'Saved successfully!', 'jet-form-builder' ),
		);
	}

	public function get_failed_response_data() {
		return array(
			'message' => __( 'Unsuccessful save.', 'jet-form-builder' ),
		);
	}

	public function send_response( $result ) {
		if ( $result ) {
			wp_send_json_success( $this->get_success_response_data() );
		}

		wp_send_json_error( $this->get_failed_response_data() );
	}

	public function rep_item_id() {
		return $this->slug();
	}

}

<?php


namespace Jet_Form_Builder\Admin\Tabs_Handlers;


abstract class Base_Handler {

	private $prefix = 'jet_form_builder_settings__';

	abstract public function slug(): string;

	abstract public function on_get_request(): void;

	abstract public function on_load(): array;

	public function __construct() {
		add_action( 'jet-fb/admin-pages/before-assets/jfb-settings', array( $this, 'before_assets' ) );
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

	public function get_options( $default = array() ): array {
		$response = get_option( $this->prefix . $this->slug(), false );

		$response = $response
			? json_decode( $response, true )
			: array();

		return array_merge( $default, $response );
	}

	public function update_options( $options ): bool {
		$options = json_encode( $options );

		return update_option( $this->prefix . $this->slug(), $options );
	}

	public function before_assets(): void {
	}

	public function save_global_options( $default = array() ) {
		Tab_Handler_Manager::instance()->save_options_tab(
			$this->slug(),
			$this->get_options( $default )
		);
	}

	public function get_global_options() {
		return Tab_Handler_Manager::instance()->get_options_tab( $this->slug() );
	}
}
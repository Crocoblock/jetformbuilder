<?php


namespace Jet_Form_Builder\Compatibility\Woocommerce;

use Jet_Form_Builder\Compatibility\Woocommerce\Methods\Wc_Product_Modification\Wc_Product_Modifier;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Woocommerce {

	public static function register() {
		if ( ! function_exists( 'WC' ) ) {
			return;
		}
		new static();
	}

	private function __construct() {
		add_filter(
			'jet-form-builder/action/insert-post/modifiers',
			array( $this, 'add_modifiers' )
		);

		add_filter(
			'jet-form-builder/editor/config',
			array( $this, 'add_property_to_editor' )
		);
	}

	public function add_modifiers( array $modifiers ): array {
		$modifiers[] = new Wc_Product_Modifier();

		return $modifiers;
	}

	/**
	 * @param array $config
	 *
	 * @return array
	 * @since 3.0.4
	 *
	 * We pass the value to js config to make sure that WooCommerce
	 * is installed in the Insert Post action script
	 */
	public function add_property_to_editor( array $config ): array {
		$config['wooExist'] = true;

		return $config;
	}


}

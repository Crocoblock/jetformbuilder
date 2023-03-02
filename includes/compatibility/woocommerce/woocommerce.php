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
	}

	public function add_modifiers( array $modifiers ): array {
		$modifiers[] = new Wc_Product_Modifier();

		return $modifiers;
	}


}
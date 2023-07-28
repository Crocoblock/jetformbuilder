<?php


namespace JFB_Compatibility\Woocommerce;

use JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification\Wc_Product_Modifier;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Woocommerce implements Base_Module_Url_It, Base_Module_It, Base_Module_Handle_It {

	use Base_Compat_Url_Trait;
	use Base_Compat_Handle_Trait;

	public function rep_item_id() {
		return 'woocommerce';
	}

	public function condition(): bool {
		return function_exists( 'WC' );
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/action/insert-post/modifiers',
			array( $this, 'add_modifiers' )
		);
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/action/insert-post/modifiers',
			array( $this, 'add_modifiers' )
		);
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
	}

	public function add_modifiers( array $modifiers ): array {
		$modifiers[] = new Wc_Product_Modifier();

		return $modifiers;
	}

	public function enqueue_admin_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

}

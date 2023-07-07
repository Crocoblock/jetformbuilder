<?php


namespace JFB_Modules\Deprecated;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Plugin;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'deprecated';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_deprecated_script' )
		);

		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
		add_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_deprecated_script' )
		);

		remove_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
		remove_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
	}

	public function register_scripts() {
		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/frontend{min}.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_deprecated_script( string $markup ): string {
		wp_enqueue_script( $this->get_handle() );

		return $markup;
	}

}

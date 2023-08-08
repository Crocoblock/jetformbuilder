<?php


namespace JFB_Compatibility\Jet_Booking;

use Jet_Form_Builder\Blocks\Module;
use JFB_Modules\Deprecated;
use Jet_Form_Builder\Plugin;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Booking implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;

	public function rep_item_id() {
		return 'jet-booking';
	}

	public function condition(): bool {
		return function_exists( 'jet_abaf' );
	}

	public function init_hooks() {
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);

		add_filter(
			'render_block_jet-forms/check-in-out',
			array( $this, 'add_compatibility_script' ),
			10,
			3
		);
	}

	public function remove_hooks() {
		remove_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);

		remove_action(
			'render_block_jet-forms/check-in-out',
			array( $this, 'add_compatibility_script' )
		);
	}

	/**
	 * @throws \Jet_Form_Builder\Exceptions\Repository_Exception
	 */
	public function register_scripts() {
		$deprecated = jet_form_builder()->module( Deprecated\Module::class );

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/frontend.js' ),
			array(
				Module::MAIN_SCRIPT_HANDLE,
				$deprecated->get_handle(),
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	public function add_compatibility_script( string $markup, array $parsed, $block ): string {
		wp_enqueue_script( $this->get_handle() );

		return $markup;
	}

}

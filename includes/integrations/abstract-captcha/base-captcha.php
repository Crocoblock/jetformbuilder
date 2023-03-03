<?php


namespace Jet_Form_Builder\Integrations\Abstract_Captcha;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Captcha implements Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	/**
	 * Runs when settings are saved on the
	 * JetFormBuilder -> Settings page
	 */
	abstract public function on_save_options();

	/**
	 * Runs when the JetFormBuilder -> Settings page is loaded
	 */
	abstract public function on_load_options(): array;

	public function handle_request( array $request ): array {
		return $request;
	}

	public function rep_item_id() {
		return $this->get_id();
	}
}
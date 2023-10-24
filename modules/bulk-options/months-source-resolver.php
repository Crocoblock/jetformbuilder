<?php


namespace JFB_Modules\Bulk_Options;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Bulk_Options\Interfaces\Source_Resolve_Interface;

class Months_Source_Resolver implements Source_Resolve_Interface {

	public function rep_item_id() {
		return 'months';
	}

	public function get_label(): string {
		return __( 'Months', 'jet-form-builder' );
	}

	public function resolve(): array {
		/** @noinspection PhpUnhandledExceptionInspection */
		/** @var Module $module */
		$module = jet_form_builder()->module( 'bulk-options' );

		return require_once $module->get_dir( 'sources/months.php' );
	}
}

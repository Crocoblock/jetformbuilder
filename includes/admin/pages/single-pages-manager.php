<?php


namespace Jet_Form_Builder\Admin\Pages;

use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Pages_Manager {

	use Repository_Pattern_Trait;

	/**
	 * Register admin pages
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/single-pages',
			array(
				new Single_Payment_Page(),
			)
		);
	}
}

<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;

class Single_Pages_Manager {

	use Repository_Pattern_Trait;

	/**
	 * Register admin pages
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/single-pages',
			array(
				new Single_Form_Record_Page(),
				new Single_Payment_Page(),
			)
		);
	}
}

<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Admin\Single_Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;

class Single_Pages_Manager {

	use Repository_Pattern_Trait;

	/**
	 * Register admin pages
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/admin/single-pages',
			array(
				new Single_Form_Record_Page()
			)
		);
	}
}
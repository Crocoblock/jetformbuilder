<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Base_Single_Page {

	/**
	 * @return Base_Page
	 * @throws Repository_Exception
	 */
	public function get_parent(): Base_Page {
		return jet_form_builder()->pages->get_current();
	}
}
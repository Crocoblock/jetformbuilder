<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;


abstract class Link_Single_Action extends View_Single_Action {

	abstract public function get_href(): string;

	public function to_array(): array {
		$attrs         = parent::to_array();
		$attrs['href'] = $this->get_href();

		return $attrs;
	}
}
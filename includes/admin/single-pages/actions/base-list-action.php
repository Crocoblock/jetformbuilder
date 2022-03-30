<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Actions;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;

abstract class Base_List_Action implements Arrayable {

	abstract public function get_slug(): string;

	public function to_array(): array {
		return array();
	}


}
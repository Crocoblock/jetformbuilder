<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Render_State implements
	Repository_Item_Instance_Trait,
	Arrayable {

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	public function rep_item_id() {
		return $this->get_id();
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_title(),
		);
	}

}
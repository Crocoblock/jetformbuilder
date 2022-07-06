<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Response_Object;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Function implements
	Repository_Item_Instance_Trait,
	Arrayable,
	Condition_Response_Object {

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	public function rep_item_id() {
		return $this->get_id();
	}

	public function to_response( array $base, Condition_Item $item ): array {
		return array();
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_title(),
		);
	}

}
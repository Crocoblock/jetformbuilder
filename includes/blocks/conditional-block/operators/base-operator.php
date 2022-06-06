<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Response_Object;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Operator implements
	Repository_Item_Instance_Trait,
	Arrayable,
	Condition_Response_Object {

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	abstract public function is_supported(): bool;

	public function rep_item_id() {
		return $this->get_id();
	}

	protected function check( Condition_Item $item ): bool {
		return true;
	}

	public function to_response( array $base, Condition_Item $item ): array {
		if ( ! $this->is_supported() ) {
			return array();
		}
		return array(
			'check_result' => $this->check( $item ),
		);
	}

	public function to_array(): array {
		return array(
			'label' => $this->get_title(),
			'value' => $this->get_id(),
		);
	}

}
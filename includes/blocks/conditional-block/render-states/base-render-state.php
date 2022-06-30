<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Render_State implements
	Repository_Item_Instance_Trait,
	Collection_Item_Interface,
	Arrayable {

	abstract public function get_title(): string;

	abstract public function is_supported(): bool;

	public function rep_item_id() {
		return $this->get_id();
	}

	public function render(): string {
		return sprintf(
			'<input type="hidden" name="%1$s[]" value="%2$s" data-jfb-sync />',
			Render_State::FIELD_NAME,
			$this->get_id()
		);
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_title(),
		);
	}

}
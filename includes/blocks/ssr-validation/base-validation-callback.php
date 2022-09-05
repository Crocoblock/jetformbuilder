<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Validation_Callback
	implements Arrayable, Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	/**
	 * @param mixed $value
	 *
	 * @return bool
	 */
	abstract public function is_valid( $value ): bool;

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_label(),
		);
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}
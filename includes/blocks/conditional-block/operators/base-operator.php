<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Response_Object;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
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

	protected function check( Base_Condition_Type $item ): bool {
		return true;
	}

	public function to_response( array $base, Base_Condition_Type $item ): array {
		if ( ! $this->is_supported() ) {
			return array();
		}

		return array(
			'check_result' => $this->check( $item ),
		);
	}

	public function to_array(): array {
		return array(
			'label'             => $this->get_title(),
			'value'             => $this->get_id(),
			'is_field_relative' => $this->is_field_relative(),
		);
	}

	/**
	 * This method is needed to distinguish operators that have a field dependency.
	 * For example, the 'render_state' operator does not have such a dependency.
	 *
	 * The result of this method is used only on the editor side.
	 *
	 * @return bool
	 */
	public function is_field_relative(): bool {
		return true;
	}

}
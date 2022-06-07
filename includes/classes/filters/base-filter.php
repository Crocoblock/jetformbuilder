<?php


namespace Jet_Form_Builder\Classes\Filters;


use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Filter implements Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function apply_macros( $value, ...$args ): string;

	final public function apply( $value, ...$args ): string {
		$callback_args = ( $args + $this->callback_args() );

		return $this->apply_macros( $value, ...$callback_args );
	}

	public function callback_args(): array {
		return array();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}
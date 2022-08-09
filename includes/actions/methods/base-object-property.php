<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;

abstract class Base_Object_Property implements
	Collection_Item_Interface,
	Arrayable {

	abstract public function get_prop_name(): string;

	abstract public function get_label(): string;

	public function attach( Abstract_Modifier $modifier ) {
		if ( ! $this->is_valid( $modifier ) ) {
			return;
		}
		$this->do_after( $modifier );
	}

	public function do_before( Abstract_Modifier $modifier ) {
	}

	public function do_after( Abstract_Modifier $modifier ) {
	}

	public function is_valid( Abstract_Modifier $modifier ): bool {
		if ( ! is_a( $this, Object_Dynamic_Property::class ) ) {
			return true;
		}

		return $this->is_supported( $modifier );
	}

	public function get_id(): string {
		return $this->get_prop_name();
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_prop_name(),
			'label' => $this->get_label(),
		);
	}

}
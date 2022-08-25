<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;

abstract class Base_Modifier_Action implements Collection_Item_Interface {

	/** @var Abstract_Modifier */
	protected $modifier;

	abstract public function do_action();

	abstract public static function is_supported( Abstract_Modifier $modifier ): bool;

	public function do_after() {
	}

	public function set_modifier( Abstract_Modifier $modifier ) {
		$this->modifier = $modifier;
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}
<?php


namespace Jet_Form_Builder\Classes\Macro_Constants;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Constant implements Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function get_value(): string;

	public function rep_item_id() {
		return $this->get_id();
	}

}

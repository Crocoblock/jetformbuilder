<?php


namespace Jet_Form_Builder\Admin\Vui_Boxes;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class Base_Vui_Box implements Repository_Item_Instance_Trait, Arrayable {

	const TYPE_PANEL = 'panel';
	const TYPE_BANNER = 'banner';

	abstract public function get_slug(): string;

	abstract public function get_type(): string;

	public function rep_item_id() {
		return $this->get_slug();
	}

	public function get_classes(): array {
		return array();
	}

	public function to_array(): array {
		return array(
			'slug'    => $this->get_slug(),
			'type'    => $this->get_type(),
			'classes' => $this->get_classes(),
		);
	}

}

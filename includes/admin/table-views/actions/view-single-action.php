<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

abstract class View_Single_Action implements Repository_Item_Instance_Trait {

	public function rep_item_id() {
		return $this->get_slug();
	}

	abstract public function get_slug(): string;

	abstract public function get_label(): string;

	abstract public function show_in_header(): bool;

	abstract public function show_in_row( array $record ): bool;

	public function get_type(): string {
		return '';
	}

	public function to_array( array $record ): array {
		$attrs = array(
			'value' => $this->get_slug(),
			'label' => $this->get_label(),
		);

		if ( $this->get_type() ) {
			$attrs['type'] = $this->get_type();
		}

		return $attrs;
	}

}

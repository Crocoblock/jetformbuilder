<?php


namespace Jet_Form_Builder\Admin\Vui_Boxes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Vui_Panel_Box extends Base_Vui_Box {

	abstract public function get_title(): string;

	abstract public function get_description(): string;

	public function get_type(): string {
		return self::TYPE_PANEL;
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'title'       => $this->get_title(),
				'description' => $this->get_description(),
			)
		);
	}

}

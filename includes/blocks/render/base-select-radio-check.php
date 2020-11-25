<?php


namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Plugin;

abstract class Base_Select_Radio_Check extends Base {

	public function set_options() {
		$this->block_type->block_attrs['field_options'] = $this->block_type->get_field_options();
	}

}
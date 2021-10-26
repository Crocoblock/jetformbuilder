<?php


namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Blocks\Types\Base_Select_Radio_Check as SRC_Base;

/**
 * @property SRC_Base block_type
 *
 * Class Base_Select_Radio_Check
 * @package Jet_Form_Builder\Blocks\Render
 */
abstract class Base_Select_Radio_Check extends Base {

	public function set_options() {
		$this->block_type->block_attrs['field_options'] = $this->block_type->get_field_options();
	}

}

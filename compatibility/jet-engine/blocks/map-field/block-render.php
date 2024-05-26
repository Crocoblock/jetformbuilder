<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Map_Field;

use Jet_Form_Builder\Blocks\Render\Base as RenderBase;

class Block_Render extends RenderBase {
	public function get_name() {
		return 'map-field';
	}

	/**
	 * @see \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render::get_fields_label_tag
	 *
	 * @return string
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
	}

}

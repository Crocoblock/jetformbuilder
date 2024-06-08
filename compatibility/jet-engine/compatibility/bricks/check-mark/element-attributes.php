<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Bricks\Check_Mark;

use JFB_Compatibility\Bricks\Widgets\Base;
use JFB_Compatibility\Jet_Engine\Blocks\Check_Mark\Block_Attributes;

class Element_Attributes extends Block_Attributes {

	/**
	 * @var Base
	 */
	private $element;

	public function get_wrapper_attributes(): string {
		return $this->get_element()->render_attributes( '_root' );
	}

	/**
	 * @param Base $element
	 */
	public function set_element( Base $element ) {
		$this->element = $element;
	}

	/**
	 * @return Base
	 */
	public function get_element(): Base {
		return $this->element;
	}

}

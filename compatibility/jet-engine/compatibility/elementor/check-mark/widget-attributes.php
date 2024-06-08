<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Elementor\Check_Mark;

use JFB_Compatibility\Jet_Engine\Blocks\Check_Mark\Block_Attributes;

class Widget_Attributes extends Block_Attributes {

	public function get_wrapper_attributes(): string {
		return 'class="jet-fb-check-mark"';
	}

}

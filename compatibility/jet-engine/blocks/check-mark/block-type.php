<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Check_Mark;

use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Modules\Blocks_V2\Interfaces\Block_Type_With_Assets_Interface;
use JFB_Modules\Blocks_V2\Traits\Block_Type_With_Assets_Trait;

class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	public function get_name() {
		return 'check-mark';
	}

	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		parent::register_block();
	}

	public function get_block_renderer( $wp_block = null ) {
		return 'Check mark';
	}

}

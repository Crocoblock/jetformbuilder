<?php

namespace JFB_Modules\Blocks_V2\Traits;

use JFB_Modules\Blocks_V2\Interfaces\Block_Asset_Interface;

trait Block_Type_With_Assets_Trait {

	protected $block_assets;

	public function get_assets(): Block_Asset_Interface {
		return $this->block_assets;
	}

	public function set_assets( Block_Asset_Interface $asset ) {
		$this->block_assets = $asset;
	}

}

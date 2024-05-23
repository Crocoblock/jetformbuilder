<?php

namespace JFB_Modules\Blocks_V2\Interfaces;

interface Block_Type_With_Assets_Interface {

	public function get_assets(): Block_Asset_Interface;

	public function set_assets( Block_Asset_Interface $asset );

}
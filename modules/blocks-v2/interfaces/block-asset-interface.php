<?php

namespace JFB_Modules\Blocks_V2\Interfaces;

interface Block_Asset_Interface {

	public function init_hooks();

	public function register_frontend_assets();

	public function enqueue_editor_assets();

}

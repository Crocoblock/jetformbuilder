<?php


namespace JFB_Modules\Block_Sanitizer\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface For_Blocks_Sanitizer_Interface extends Is_Supported_Sanitizer_Interface {

	public function for_blocks(): array;

}

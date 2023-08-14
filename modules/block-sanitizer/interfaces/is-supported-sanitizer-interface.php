<?php


namespace JFB_Modules\Block_Sanitizer\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Is_Supported_Sanitizer_Interface {

	public function is_supported( array $parsed_block ): bool;

}

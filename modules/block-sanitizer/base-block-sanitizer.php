<?php


namespace JFB_Modules\Block_Sanitizer;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Block_Sanitizer {

	abstract public function for_blocks(): array;

	abstract public function apply_data( array $parsed_block ): array;

}

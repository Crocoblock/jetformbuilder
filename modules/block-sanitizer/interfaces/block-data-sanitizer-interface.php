<?php


namespace JFB_Modules\Block_Sanitizer\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Block_Data_Sanitizer_Interface {

	/**
	 * @param array $parsed_block
	 * @param array $source_block
	 * @param null|\WP_Block $parent_block
	 *
	 * @return array
	 * @noinspection PhpMissingParamTypeInspection
	 */
	public function apply_block_data( array $parsed_block, array $source_block, $parent_block = null ): array;

}

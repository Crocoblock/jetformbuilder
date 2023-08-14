<?php


namespace JFB_Modules\Block_Sanitizer\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Block_Context_Sanitizer_Interface {

	/**
	 * @param array $block_context
	 * @param array $parsed_block
	 * @param null|\WP_Block $parent_block
	 *
	 * @return array
	 * @noinspection PhpMissingParamTypeInspection
	 */
	public function apply_block_context( array $block_context, array $parsed_block, $parent_block = null ): array;

}

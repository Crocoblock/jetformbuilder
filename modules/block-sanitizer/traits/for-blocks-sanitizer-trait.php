<?php


namespace JFB_Modules\Block_Sanitizer\Traits;

use Jet_Form_Builder\Blocks\Block_Helper;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method bool for_blocks
 *
 * Trait For_Blocks_Sanitizer_Trait
 * @package JFB_Modules\Block_Sanitizer\Traits
 */
trait For_Blocks_Sanitizer_Trait {

	public function is_supported( array $parsed_block ): bool {
		try {
			$name = Block_Helper::resolve_name( $parsed_block );
		} catch ( \Exception $exception ) {
			return false;
		}

		return in_array( $name, $this->for_blocks(), true );
	}

}

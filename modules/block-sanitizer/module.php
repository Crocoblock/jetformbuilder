<?php


namespace JFB_Modules\Block_Sanitizer;

use JFB_Components\Module\Base_Module_It;
use Jet_Form_Builder\Blocks\Block_Helper;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The creation of this class is determined by the block rendering logic.
 * Because it happens from the depths to the surface.
 *
 * The task was to throw the prepared value in the attribute into the child blocks.
 * But the `render_callback` of the main block is run after the children,
 * so changing the attributes for further transmission to the context makes no sense.
 *
 * The solution is to change the attributes on the `render_block_data' hook,
 * because it is run in the correct order of block rendering - from top to bottom.
 *
 * @since 3.1.0
 *
 * Class Module
 * @package Jet_Form_Builder\Blocks\Block_Sanitizer
 */
final class Module implements Base_Module_It {

	/**
	 * @var Base_Block_Sanitizer[]
	 */
	private $sanitizers = array();

	public function condition(): bool {
		return true;
	}

	public function rep_item_id() {
		return 'block-sanitizer';
	}

	public function init_hooks() {
		add_filter(
			'render_block_data',
			array( $this, 'apply_blocks_data' ),
			10,
			2
		);
	}

	public function remove_hooks() {
		remove_filter(
			'render_block_data',
			array( $this, 'apply_blocks_data' )
		);
	}

	public function apply_blocks_data( array $block_data, array $initial_block ): array {
		$name = $initial_block['blockName'] ?? '';

		// is has 'jet-forms/' namespace in 'blockName' property
		if ( ! is_string( $name ) || ! Block_Helper::is_field( $name ) ) {
			return $block_data;
		}

		$block_type = \WP_Block_Type_Registry::get_instance()->get_registered( $name );

		if ( ! ( $block_type instanceof \WP_Block_Type ) ) {
			return $block_data;
		}

		$name = Block_Helper::delete_namespace( $name );

		foreach ( $this->sanitizers as $item ) {
			if ( ! in_array( $name, $item->for_blocks(), true ) ) {
				continue;
			}

			$block_data = $item->apply_data( $block_data );
		}

		return $block_data;
	}

	public function register( Base_Block_Sanitizer $item ): Module {
		$this->sanitizers[] = $item;

		return $this;
	}

}

<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Sanitizers\Base_Block_Sanitizer;
use Jet_Form_Builder\Blocks\Sanitizers\Choices_Default_Value_Sanitizer;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

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
 * Class Block_Sanitizer_Manager
 * @package Jet_Form_Builder\Blocks
 */
final class Block_Sanitizer_Manager {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
		$this->init_hooks();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/block-sanitizers',
			array(
				new Choices_Default_Value_Sanitizer(),
			)
		);
	}

	public function init_hooks() {
		add_filter(
			'render_block_data',
			array( $this, 'apply_blocks_data' ),
			10,
			2
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

		/** @var Base_Block_Sanitizer $item */
		foreach ( $this->rep_generate_items() as $item ) {
			if ( ! in_array( $name, $item->for_blocks(), true ) ) {
				continue;
			}

			$block_data = $item->apply_data( $block_data );
		}

		return $block_data;
	}

	/**
	 * @param $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( $item instanceof Base_Block_Sanitizer ) {
			return;
		}

		$this->_rep_abort_this();
	}

}

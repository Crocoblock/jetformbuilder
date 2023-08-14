<?php


namespace JFB_Modules\Block_Sanitizer;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Context_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Data_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\Is_Supported_Sanitizer_Interface;

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
final class Module implements Base_Module_It, Base_Module_After_Install_It {

	/**
	 * @var Is_Supported_Sanitizer_Interface[]
	 */
	private $sanitizers = array();

	public function condition(): bool {
		return false;
	}

	public function rep_item_id() {
		return 'block-sanitizer';
	}

	public function init_hooks() {
		/**
		 * Modify the blocks that inside the form
		 */
		add_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'init_form_blocks_hooks' )
		);
		add_filter(
			'jet-form-builder/after-end-form',
			array( $this, 'remove_form_blocks_hooks' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'init_form_blocks_hooks' )
		);
		remove_filter(
			'jet-form-builder/after-end-form',
			array( $this, 'remove_form_blocks_hooks' )
		);
	}

	public function init_form_blocks_hooks( $markup ) {
		add_filter(
			'render_block_data',
			array( $this, 'blocks_data_handler' ),
			10,
			3
		);
		add_filter(
			'render_block_context',
			array( $this, 'blocks_context_handler' ),
			10,
			3
		);

		return $markup;
	}

	public function remove_form_blocks_hooks( $markup ) {
		remove_filter(
			'render_block_data',
			array( $this, 'blocks_data_handler' )
		);
		remove_filter(
			'render_block_context',
			array( $this, 'blocks_context_handler' )
		);

		return $markup;
	}

	public function on_install() {
		$this->register( new Sanitizers\Repeater_Sanitizer() );
	}

	public function on_uninstall() {
		$this->unregister( new Sanitizers\Repeater_Sanitizer() );
	}

	public function blocks_data_handler( array $block_data, array $initial_block, $parent_block ): array {
		if ( ! is_null( $parent_block ) ) {
			return $block_data;
		}

		return $this->apply_blocks_data( $block_data, $initial_block, $parent_block );
	}

	public function blocks_context_handler( array $block_context, array $initial_block, $parent_block ): array {
		if ( ! is_null( $parent_block ) ) {
			return $block_context;
		}

		return $this->apply_blocks_context( $block_context, $initial_block, $parent_block );
	}

	/**
	 * @param array $block_data
	 * @param array $initial_block
	 * @param null|\WP_Block $parent_block
	 *
	 * @return array
	 * @noinspection PhpMissingParamTypeInspection
	 */
	public function apply_blocks_data( array $block_data, array $initial_block, $parent_block ): array {
		foreach ( $this->iterate_sanitizers( $block_data ) as $item ) {
			if ( ! ( $item instanceof Block_Data_Sanitizer_Interface ) ) {
				continue;
			}
			$block_data = $item->apply_block_data( $block_data, $initial_block, $parent_block );
		}

		return $block_data;
	}

	/**
	 * @param array $block_context
	 * @param array $initial_block
	 * @param null|\WP_Block $parent_block
	 *
	 * @return array
	 * @noinspection PhpMissingParamTypeInspection
	 */
	public function apply_blocks_context( array $block_context, array $initial_block, $parent_block ): array {
		foreach ( $this->iterate_sanitizers( $initial_block ) as $item ) {
			if ( ! ( $item instanceof Block_Context_Sanitizer_Interface ) ) {
				continue;
			}
			$block_context = $item->apply_block_context( $block_context, $initial_block, $parent_block );
		}

		return $block_context;
	}

	public function register( Is_Supported_Sanitizer_Interface $item ): Module {
		$this->sanitizers[] = $item;

		return $this;
	}

	public function unregister( Is_Supported_Sanitizer_Interface $item ): Module {
		foreach ( $this->sanitizers as $index => $sanitizer ) {
			if ( get_class( $sanitizer ) !== get_class( $item ) ) {
				continue;
			}
			unset( $this->sanitizers[ $index ] );
		}

		$this->sanitizers = array_values( $this->sanitizers );

		return $this;
	}

	protected function iterate_sanitizers( array $parsed_block ): \Generator {
		foreach ( $this->sanitizers as $item ) {
			if ( ! $item->is_supported( $parsed_block ) ) {
				continue;
			}

			yield $item;
		}
	}
}

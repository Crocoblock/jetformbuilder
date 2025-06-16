<?php
/**
 * Proxy class to unify the access to the blocks style manager
 * and the legacy style manager plugin.
 */
namespace Crocoblock\Blocks_Style;

class Proxy {

	protected $block;
	protected $legacy_block_manager;
	protected $legacy_controls_manager;

	/**
	 * Set the Block instance
	 *
	 * @param Block $block Block instance.
	 */
	public function __construct( $block ) {

		$this->block = $block;

		if ( $this->has_legacy_style_manager() ) {
			$this->legacy_block_manager    = \JET_SM\Gutenberg\Block_Manager::get_instance();
			$this->legacy_controls_manager = new \JET_SM\Gutenberg\Controls_Manager(
				 $this->block->get_block_name()
			);
		}
	}

	/**
	 * Get the Block instance
	 *
	 * @return Block
	 */
	public function get_block() {
		return $this->block;
	}

	/**
	 * Check we has a legacy style manage plugin.
	 *
	 * @return boolean
	 */
	public function has_legacy_style_manager() {
		return ( class_exists( '\JET_SM\Gutenberg\Block_Manager' ) && class_exists( '\JET_SM\Gutenberg\Block_Manager' ) );
	}

	/**
	 * Start a new section for block styles
	 *
	 * @param string $section_id
	 * @param array $args
	 * @return void
	 */
	public function start_section( $section_id, $args = array() ) {

		if ( $this->has_legacy_style_manager() ) {
			$this->legacy_controls_manager->start_section( $section_id, $args );
		}

		$this->block->start_section( $args );
	}

	/**
	 * End the current section
	 *
	 * @return void
	 */
	public function end_section() {

		if ( $this->has_legacy_style_manager() ) {
			$this->legacy_controls_manager->end_section();
		}

		$this->block->end_section();
	}

	/**
	 * Add a new control to the current section
	 *
	 * @param array $args
	 * @return void
	 */
	public function add_control( $args = array() ) {

		if ( $this->has_legacy_style_manager() ) {
			$this->legacy_controls_manager->add_control( $args );
		}

		if ( ! empty( $args['is_legacy'] ) ) {
			// If the control is marked as legacy, so do not add it
			return;
		}

		$this->block->add_control( $args );
	}

	/**
	 * Add a new control to the current section.
	 * Fallback for legacy style manager.
	 *
	 * @param array $args
	 * @return void
	 */
	public function add_responsive_control( $args = array() ) {
		$this->add_control( $args );
	}

	/**
	 * Start tabs group
	 *
	 * @param string $id
	 * @param array $args
	 * @return void
	 */
	public function start_tabs( $id, $args = array() ) {
		$this->block->start_tabs( $args );
	}

	/**
	 * Start a new tab
	 *
	 * @param string $id
	 * @param array $args
	 * @return void
	 */
	public function start_tab( $id, $args = array() ) {
		$this->block->start_tab( $args );
	}

	/**
	 * End tabs group
	 *
	 * @return void
	 */
	public function end_tabs() {
		$this->block->end_tabs();
	}

	/**
	 * End the current tab
	 *
	 * @return void
	 */
	public function end_tab() {
		$this->block->end_tab();
	}
}
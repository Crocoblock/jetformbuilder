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

	public static $is_migrated = null;

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

		if ( self::$is_migrated ) {
			return false;
		}

		self::$is_migrated = get_option( 'jet_sm_migration_completed', false );

		return class_exists( '\JET_SM\Gutenberg\Block_Manager' );
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
	 * @param array   $args
	 * @return void
	 */
	public function add_control( $args = array() ) {

		if ( $this->has_legacy_style_manager() ) {

			$is_responsive = ! empty( $args['is_responsive'] ) && $args['is_responsive'];

			if ( ! empty( $args['legacy_css_selector'] ) ) {
				$args['css_selector'] = $args['legacy_css_selector'];
				unset( $args['legacy_css_selector'] );
			}

			if ( $is_responsive ) {
				$this->legacy_controls_manager->add_responsive_control( $args );
			} else {
				$this->legacy_controls_manager->add_control( $args );
			}
		}

		if ( ! empty( $args['is_legacy'] ) ) {
			// If the control is marked as legacy, so do not add it
			return;
		}

		// rewrite default attribute
		if (
			! empty( $args['attributes'] )
			&& ! empty( $args['attributes']['default'] )
		) {
			$raw_default = $args['attributes']['default'];
			$default = null;

			if ( is_array( $raw_default ) ) {
				if ( ! empty( $raw_default['value'] ) ) {
					if ( is_array( $raw_default['value'] ) ) {

						if ( isset( $raw_default['value']['value'] ) ) {
							$default = $raw_default['value']['value'];
						}

						if ( ! empty( $raw_default['value']['unit'] ) && null !== $default ) {
							$default .= $raw_default['value']['unit'];
						}
					} else {
						$default = (string) $raw_default['value'];
					}
				}

				if ( ! empty( $raw_default['unit'] ) && null !== $default ) {
					$default .= $raw_default['unit'];
				}
			} else {
				$default = $raw_default;
			}

			if ( null !== $default ) {

				if ( ! empty( $args['return_value'] ) ) {
					$default = $this->find_value_by_return_value( $args['return_value'], $default );
				}

				$args['default'] = $default;
			}

			unset( $args['attributes']['default'] );
		}

		$this->block->add_control( $args );
	}

	/**
	 * Find the value by return value array
	 *
	 * @param array $return_value
	 * @param mixed $default
	 * @return mixed
	 */
	protected function find_value_by_return_value( $return_value, $default ) {
		if ( is_array( $return_value ) ) {

			$key = $default;

			if ( is_bool( $key ) ) {
				$key = ( $key ) ? 'true' : 'false';
			} elseif ( is_null( $key ) ) {
				$key = 'null';
			} elseif ( is_array( $key ) ) {
				$key = json_encode( $key );
			} else {
				$key = (string) $key;
			}

			return ( isset( $return_value[ $key ] ) ) ? $return_value[ $key ] : $default;
		}

		return $default;
	}

	/**
	 * Add a new control to the current section.
	 * Fallback for legacy style manager.
	 *
	 * @param array $args
	 * @return void
	 */
	public function add_responsive_control( $args = array() ) {
		$args['is_responsive'] = true;
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
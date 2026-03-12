<?php
/**
 * Generator Registry - centralized registration and management of option generators.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Registry class for option generators.
 *
 * Provides centralized registration, retrieval, and schema export
 * for all option generators (both legacy and V2).
 *
 * This class integrates with the existing Form_Manager system
 * by reading generators from the 'jet-form-builder/forms/options-generators' filter.
 */
class Registry {

	/**
	 * Singleton instance.
	 *
	 * @var Registry|null
	 */
	private static $instance = null;

	/**
	 * Cached generators from Form_Manager.
	 *
	 * @var Base[]|null
	 */
	private $generators = null;

	/**
	 * Get singleton instance.
	 *
	 * @return Registry
	 */
	public static function instance(): Registry {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Private constructor for singleton.
	 */
	private function __construct() {
		// Generators are loaded lazily from Form_Manager
	}

	/**
	 * Load generators from Form_Manager.
	 * This integrates with the existing system that uses
	 * 'jet-form-builder/forms/options-generators' filter.
	 */
	private function load_generators(): void {
		if ( null !== $this->generators ) {
			return;
		}

		$this->generators = array();

		// Get generators from Form_Manager (which applies the filter)
		if ( class_exists( Plugin::class ) && Plugin::instance()->form ) {
			$generators = Plugin::instance()->form->get_options_generators();

			foreach ( $generators as $id => $generator ) {
				$this->generators[ $id ] = $generator;
			}
		}
	}

	/**
	 * Get a generator by ID.
	 *
	 * @param string $id Generator ID.
	 *
	 * @return Base|null Generator instance or null if not found.
	 */
	public function get( string $id ): ?Base {
		$this->load_generators();

		return $this->generators[ $id ] ?? null;
	}

	/**
	 * Check if a generator exists.
	 *
	 * @param string $id Generator ID.
	 *
	 * @return bool
	 */
	public function has( string $id ): bool {
		$this->load_generators();

		return isset( $this->generators[ $id ] );
	}

	/**
	 * Get all registered generators.
	 *
	 * @return Base[]
	 */
	public function get_all(): array {
		$this->load_generators();

		return $this->generators;
	}

	/**
	 * Get generators list for select control (id => name format).
	 *
	 * @return array
	 */
	public function get_list(): array {
		$this->load_generators();

		$list = array(
			array(
				'value' => '',
				'label' => __( '-- Select generator --', 'jet-form-builder' ),
			),
		);

		foreach ( $this->generators as $generator ) {
			if ( ! $generator->can_generate() ) {
				continue;
			}

			$list[] = array(
				'value' => $generator->get_id(),
				'label' => $generator->get_name(),
			);
		}

		return $list;
	}

	/**
	 * Get all schemas for JS localization.
	 * Returns detailed schema information for editor UI generation.
	 *
	 * @return array
	 */
	public function get_schemas_for_js(): array {
		$this->load_generators();

		$schemas = array();

		foreach ( $this->generators as $id => $generator ) {
			if ( $generator instanceof Base_V2 ) {
				// New V2 generator with full schema support
				$schemas[ $id ] = $generator->get_schema_for_js();
			} else {
				// Legacy generator - create minimal schema
				$schemas[ $id ] = $this->create_legacy_schema( $generator );
			}
		}

		return $schemas;
	}

	/**
	 * Creates minimal schema for legacy generators.
	 *
	 * @param Base $generator Legacy generator instance.
	 *
	 * @return array
	 */
	private function create_legacy_schema( Base $generator ): array {
		$id = $generator->get_id();

		// Special handling for known legacy generators
		switch ( $id ) {
			case 'num_range_manual':
				return array(
					'id'              => $id,
					'name'            => $generator->get_name(),
					'schema'          => array(
						'generator_numbers_min'  => array(
							'type'    => 'number',
							'default' => 1,
							'label'   => __( 'Start of range', 'jet-form-builder' ),
							'control' => 'number',
							'step'    => 0.01,
						),
						'generator_numbers_max'  => array(
							'type'    => 'number',
							'default' => 10,
							'label'   => __( 'End of range', 'jet-form-builder' ),
							'control' => 'number',
							'step'    => 0.01,
						),
						'generator_numbers_step' => array(
							'type'    => 'number',
							'default' => 1,
							'label'   => __( 'Step', 'jet-form-builder' ),
							'control' => 'number',
							'step'    => 0.01,
						),
					),
					'supports_update' => false,
					'legacy'          => false, // Has dedicated schema
				);

			default:
				// Generic legacy generator with single field
				return array(
					'id'              => $id,
					'name'            => $generator->get_name(),
					'schema'          => array(
						'generator_field' => array(
							'type'    => 'string',
							'default' => '',
							'label'   => __( 'Field Name', 'jet-form-builder' ),
							'control' => 'text',
						),
					),
					'supports_update' => false,
					'legacy'          => true,
				);
		}
	}

	/**
	 * Get combined block attributes from all V2 generators.
	 * Can be used to dynamically extend block.json.
	 *
	 * @return array
	 */
	public function get_all_block_attributes(): array {
		$this->load_generators();

		$attributes = array();

		foreach ( $this->generators as $generator ) {
			if ( $generator instanceof Base_V2 ) {
				$attributes = array_merge( $attributes, $generator->get_block_attributes() );
			}
		}

		return $attributes;
	}

	/**
	 * Generate options using specified generator.
	 *
	 * @param string $generator_id Generator ID.
	 * @param array  $block_attrs  Block attributes.
	 * @param array  $context      Optional context for auto-update.
	 *
	 * @return array Generated options or empty array if generator not found.
	 */
	public function generate( string $generator_id, array $block_attrs, array $context = array() ): array {
		$generator = $this->get( $generator_id );

		if ( ! $generator ) {
			return array();
		}

		if ( ! $generator->can_generate() ) {
			return array();
		}

		// Use context-aware generation for V2 generators
		if ( $generator instanceof Base_V2 && ! empty( $context ) ) {
			// Priority: generator_args object (new format) > prefixed attrs (intermediate) > defaults
			if ( ! empty( $block_attrs['generator_args'] ) && is_array( $block_attrs['generator_args'] ) ) {
				$settings = $generator->parse_generator_args( $block_attrs['generator_args'] );
			} else {
				$settings = $generator->parse_settings( $block_attrs );
			}
			return $generator->generate_with_context( $settings, $context );
		}

		// Standard generation
		return $generator->get_values( $block_attrs );
	}

	/**
	 * Prevent cloning of singleton.
	 */
	private function __clone() {}

	/**
	 * Prevent unserialization of singleton.
	 *
	 * @throws \Exception Always.
	 */
	public function __wakeup() {
		throw new \Exception( 'Cannot unserialize singleton' );
	}
}

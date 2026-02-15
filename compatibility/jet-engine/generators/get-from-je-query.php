<?php
/**
 * JetEngine Query Generator with schema support.
 *
 * @package JFB_Compatibility\Jet_Engine\Generators
 */

namespace JFB_Compatibility\Jet_Engine\Generators;

use Jet_Engine\Query_Builder\Queries\Base_Query;
use JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers\Base_Object_Handler;
use JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers\User_Object_Handler;
use Jet_Form_Builder\Generators\Base_V2;
use Jet_Engine\Query_Builder\Manager as Query_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_From_Je_Query class.
 *
 * Enhanced JetEngine Query generator with structured settings schema
 * and support for auto-update (cascading fields).
 */
class Get_From_Je_Query extends Base_V2 {

	/**
	 * Object handlers for different query result types.
	 *
	 * @var Base_Object_Handler[]
	 */
	private $object_handlers;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->object_handlers = apply_filters(
			'jet-form-builder/generators/get_from_query/handlers',
			array(
				new User_Object_Handler(),
				new Base_Object_Handler(),
			)
		);
	}

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_query';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from JetEngine Query', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'query_id'    => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Query ID', 'jet-form-builder' ),
				'control'     => 'select',
				'options'     => $this->get_queries_for_select(),
				'help'        => __( 'Select a JetEngine Query to fetch options from.', 'jet-form-builder' ),
			),
			'value_field' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Value Field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => '',
				'help'        => __( 'Field to use as option value (e.g., ID, post_name, meta_key).', 'jet-form-builder' ),
			),
			'label_field' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Label Field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => '',
				'help'        => __( 'Field to use as option label (e.g., post_title, display_name).', 'jet-form-builder' ),
			),
			'calc_field'  => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Calculated Field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => '',
				'help'        => __( 'Optional. Field for calculated value (e.g., price, _regular_price).', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Get available JetEngine queries for select control.
	 *
	 * @return array
	 */
	private function get_queries_for_select(): array {
		$options = array(
			array(
				'value' => '',
				'label' => __( '-- Select Query --', 'jet-form-builder' ),
			),
		);

		if ( ! class_exists( Query_Manager::class ) ) {
			return $options;
		}

		// Use JetEngine's built-in method to get queries for options
		// Returns array of [ query_id => query_name ]
		$queries = Query_Manager::instance()->get_queries_for_options();

		foreach ( $queries as $query_id => $query_name ) {
			$options[] = array(
				'value' => (string) $query_id,
				'label' => $query_name,
			);
		}

		return $options;
	}

	/**
	 * Parse settings from block attributes.
	 * Override to support legacy generator_args format.
	 *
	 * @param array $block_attrs Block attributes.
	 *
	 * @return array Parsed settings.
	 */
	public function parse_settings( array $block_attrs ): array {
		// Try parent's parse_settings first (looks for gen_get_from_query_* keys)
		$settings = parent::parse_settings( $block_attrs );

		// If empty, try legacy generator_args format
		if ( empty( $settings['query_id'] ) && ! empty( $block_attrs['generator_args'] ) && is_array( $block_attrs['generator_args'] ) ) {
			$settings['query_id']    = $block_attrs['generator_args']['query_id'] ?? '';
			$settings['value_field'] = $block_attrs['generator_args']['value_field'] ?? 'ID';
			$settings['label_field'] = $block_attrs['generator_args']['label_field'] ?? 'post_title';
			$settings['calc_field']  = $block_attrs['generator_args']['calc_field'] ?? '';
		}

		// If still empty, try generator_field (pipe format)
		if ( empty( $settings['query_id'] ) && ! empty( $block_attrs['generator_field'] ) ) {
			$parts = explode( '|', $block_attrs['generator_field'] );
			$settings['query_id']    = $parts[0] ?? '';
			$settings['value_field'] = $parts[1] ?? 'ID';
			$settings['label_field'] = $parts[2] ?? 'post_title';
			$settings['calc_field']  = $parts[3] ?? '';
		}

		return $settings;
	}

	/**
	 * Enrich legacy pipe-delimited generator_field with calculated_value_from_key.
	 * Legacy blocks store calc field separately in block attr, not in the pipe string.
	 *
	 * @param string $generator_field Legacy pipe string: "query_id|value|label"
	 * @param array  $block_attrs     All block attributes.
	 *
	 * @return array Structured settings for generate().
	 */
	protected function enrich_legacy_field( string $generator_field, array $block_attrs ) {
		$parts = explode( '|', $generator_field );

		$settings = array(
			'query_id'    => $parts[0] ?? '',
			'value_field' => $parts[1] ?? 'ID',
			'label_field' => $parts[2] ?? 'post_title',
			'calc_field'  => $parts[3] ?? '',
		);

		// Legacy blocks stored calc in a separate block attribute
		if ( empty( $settings['calc_field'] ) && ! empty( $block_attrs['calculated_value_from_key'] ) ) {
			$settings['calc_field'] = $block_attrs['calculated_value_from_key'];
		}

		return $settings;
	}

	/**
	 * Whether this generator supports auto-update.
	 *
	 * @return bool
	 */
	public function supports_auto_update(): bool {
		return true;
	}

	/**
	 * Returns context fields description for auto-update.
	 *
	 * @return array
	 */
	public function get_auto_update_context_fields(): array {
		return array(
			array(
				'description' => __( 'The selected value from the listened field can be used in JetEngine Query via dynamic tags.', 'jet-form-builder' ),
				'example'     => __( 'Use "JFB Update Field - Form Field Value" dynamic tag in your query.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Generate options with context from dependent fields.
	 *
	 * @param array $settings Parsed settings.
	 * @param array $context  Context from dependent fields.
	 *
	 * @return array Generated options.
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		// Store context for JetEngine dynamic tags to access
		if ( ! empty( $context ) ) {
			foreach ( $context as $field_name => $field_value ) {
				// Set global that JetEngine dynamic tags can read
				$global_key = 'jfb_update_related_' . $field_name;
				$GLOBALS[ $global_key ] = $field_value;
			}
		}

		return $this->generate( $settings );
	}

	/**
	 * Returns generated options list.
	 *
	 * @param array|string $args Settings array with query_id, value_field, label_field, calc_field
	 *                           OR legacy pipe-delimited string.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$result = array();

		// Handle legacy string format (pipe-delimited: "query_id|value|label|calc")
		if ( is_string( $args ) ) {
			$parts       = explode( '|', $args );
			$query_id    = $parts[0] ?? '';
			$value_field = $parts[1] ?? 'ID';
			$label_field = $parts[2] ?? 'post_title';
			$calc_field  = $parts[3] ?? '';
		} elseif ( is_array( $args ) ) {
			// New structured format OR legacy array with generator_field
			$query_id    = $args['query_id'] ?? '';
			$value_field = $args['value_field'] ?? 'ID';
			$label_field = $args['label_field'] ?? 'post_title';
			$calc_field  = $args['calc_field'] ?? '';

			// Legacy format support: check for generator_args object
			if ( empty( $query_id ) && ! empty( $args['generator_args'] ) && is_array( $args['generator_args'] ) ) {
				$query_id    = $args['generator_args']['query_id'] ?? '';
				$value_field = $args['generator_args']['value_field'] ?? 'ID';
				$label_field = $args['generator_args']['label_field'] ?? 'post_title';
				$calc_field  = $args['generator_args']['calc_field'] ?? '';
			}

			// Legacy format support: check for generator_field with pipe delimiter
			if ( empty( $query_id ) && ! empty( $args['generator_field'] ) ) {
				$parts       = explode( '|', $args['generator_field'] );
				$query_id    = $parts[0] ?? '';
				$value_field = $parts[1] ?? 'ID';
				$label_field = $parts[2] ?? 'post_title';
				$calc_field  = $parts[3] ?? '';
			}
		} else {
			// Unknown format
			return $result;
		}

		if ( empty( $query_id ) ) {
			return $result;
		}

		/** @var Base_Query $query */
		$query = Query_Manager::instance()->get_query_by_id( $query_id );

		if ( ! $query ) {
			return $result;
		}

		$query->setup_query();

		// Store query type in block attributes if block is available
		if ( $this->block ) {
			$this->block->block_attrs['je_generator_query_type'] = $query->query_type;
		}

		do_action( 'jet-form-builder/generators/get_from_query/setup', $this, $query );

		$objects = $query->get_items();

		if ( empty( $objects ) ) {
			return $result;
		}

		// Build fields array for handler
		$fields = array( $query_id, $value_field, $label_field );
		if ( ! empty( $calc_field ) ) {
			$fields[] = $calc_field;
		}

		$handler = $this->get_handler( $objects[0] ?? array() );
		$handler->set_fields( $fields );
		error_log( '[GET_FROM_QUERY V2] Handler: ' . get_class( $handler ) . ', fields: ' . print_r( $fields, true ) );

		foreach ( $objects as $object ) {
			$item = $handler->to_array( $object );

			if ( ! empty( $item ) ) {
				$result[] = $item;
			}
		}

		error_log( '[GET_FROM_QUERY V2] Final result: ' . count( $result ) . ' options' );
		error_log( '=== [GET_FROM_QUERY V2] END ===' );

		return $result;
	}

	/**
	 * Get appropriate handler for object type.
	 *
	 * @param mixed $current Current object to check.
	 *
	 * @return Base_Object_Handler
	 */
	private function get_handler( $current ): Base_Object_Handler {
		/** @var Base_Object_Handler $handler */
		foreach ( $this->object_handlers as $handler ) {
			if ( $handler->is_supported( $current ) ) {
				return $handler;
			}
		}

		wp_die(
			sprintf(
				/* translators: %s - class name */
				esc_html__( '%s::is_supported must return TRUE', 'jet-form-builder' ),
				esc_attr( Base_Object_Handler::class )
			)
		);
	}

	/**
	 * Check if generator can generate options.
	 *
	 * @return bool
	 */
	public function can_generate() {
		return class_exists( Query_Manager::class );
	}
}

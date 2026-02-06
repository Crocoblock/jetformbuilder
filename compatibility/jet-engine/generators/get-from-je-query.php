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
	 * Returns generated options list.
	 *
	 * @param array|string $args Settings array with query_id, value_field, label_field, calc_field
	 *                           OR legacy pipe-delimited string.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$result = array();

		error_log( '=== [GET_FROM_QUERY V2] generate() ===' );
		error_log( '[GET_FROM_QUERY V2] Input $args type: ' . gettype( $args ) );
		error_log( '[GET_FROM_QUERY V2] Input $args: ' . print_r( $args, true ) );

		// Handle legacy string format (pipe-delimited: "query_id|value|label|calc")
		if ( is_string( $args ) ) {
			error_log( '[GET_FROM_QUERY V2] Parsing as STRING (legacy pipe format)' );
			$parts       = explode( '|', $args );
			$query_id    = $parts[0] ?? '';
			$value_field = $parts[1] ?? 'ID';
			$label_field = $parts[2] ?? 'post_title';
			$calc_field  = $parts[3] ?? '';
		} elseif ( is_array( $args ) ) {
			error_log( '[GET_FROM_QUERY V2] Parsing as ARRAY' );
			// New structured format OR legacy array with generator_field
			$query_id    = $args['query_id'] ?? '';
			$value_field = $args['value_field'] ?? 'ID';
			$label_field = $args['label_field'] ?? 'post_title';
			$calc_field  = $args['calc_field'] ?? '';

			error_log( '[GET_FROM_QUERY V2] Direct extraction: query_id=' . $query_id );

			// Legacy format support: check for generator_field with pipe delimiter
			if ( empty( $query_id ) && ! empty( $args['generator_field'] ) ) {
				error_log( '[GET_FROM_QUERY V2] query_id empty, trying generator_field: ' . $args['generator_field'] );
				$parts       = explode( '|', $args['generator_field'] );
				$query_id    = $parts[0] ?? '';
				$value_field = $parts[1] ?? 'ID';
				$label_field = $parts[2] ?? 'post_title';
				$calc_field  = $parts[3] ?? '';
			}
		} else {
			error_log( '[GET_FROM_QUERY V2] Unknown format, returning empty' );
			// Unknown format
			return $result;
		}

		error_log( '[GET_FROM_QUERY V2] Final parsed: query_id=' . $query_id . ', value=' . $value_field . ', label=' . $label_field . ', calc=' . $calc_field );

		if ( empty( $query_id ) ) {
			error_log( '[GET_FROM_QUERY V2] query_id is EMPTY, returning empty result' );
			return $result;
		}

		/** @var Base_Query $query */
		$query = Query_Manager::instance()->get_query_by_id( $query_id );

		if ( ! $query ) {
			error_log( '[GET_FROM_QUERY V2] Query NOT FOUND for ID: ' . $query_id );
			return $result;
		}

		error_log( '[GET_FROM_QUERY V2] Query found: ' . get_class( $query ) );

		$query->setup_query();

		// Store query type in block attributes if block is available
		if ( $this->block ) {
			$this->block->block_attrs['je_generator_query_type'] = $query->query_type;
		}

		do_action( 'jet-form-builder/generators/get_from_query/setup', $this, $query );

		$objects = $query->get_items();
		error_log( '[GET_FROM_QUERY V2] Query returned ' . count( $objects ) . ' items' );

		if ( empty( $objects ) ) {
			error_log( '[GET_FROM_QUERY V2] No objects, returning empty' );
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

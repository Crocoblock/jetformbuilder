<?php
/**
 * REST API Generator.
 *
 * Generates options by fetching data from an external REST API endpoint.
 * Supports dot-notation paths, multiple request headers, and URL placeholders
 * for auto-update (e.g. https://api.example.com/items?category={category_field}).
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_From_Rest_Api class.
 *
 * Generates options by fetching from an external REST API.
 */
class Get_From_Rest_Api extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_rest_api';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from REST API', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'endpoint_url'    => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'API Endpoint URL', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => 'https://api.example.com/items',
				'required'    => true,
				'help'        => __( 'URL must return a JSON array or object. Use {field_name} placeholders for auto-update filtering.', 'jet-form-builder' ),
			),
			'value_path'      => array(
				'type'        => 'string',
				'default'     => 'id',
				'label'       => __( 'Value Field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => 'id',
				'help'        => __( 'JSON key for option value. Supports dot notation: data.id', 'jet-form-builder' ),
			),
			'label_path'      => array(
				'type'        => 'string',
				'default'     => 'name',
				'label'       => __( 'Label Field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => 'name',
				'help'        => __( 'JSON key for option label. Supports dot notation: data.name', 'jet-form-builder' ),
			),
			'items_path'      => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Items Path (optional)', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => 'results',
				'help'        => __( 'Path to the array inside the JSON response. Leave empty if the root is already an array.', 'jet-form-builder' ),
			),
			'request_headers' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Request Headers (optional)', 'jet-form-builder' ),
				'control'     => 'textarea',
				'placeholder' => "Authorization: Bearer your-token\nX-API-Key: abc123",
				'help'        => __( 'One header per line in format "Header-Name: value".', 'jet-form-builder' ),
			),
			'request_timeout' => array(
				'type'    => 'number',
				'default' => 10,
				'label'   => __( 'Request Timeout (seconds)', 'jet-form-builder' ),
				'control' => 'number',
				'min'     => 1,
				'max'     => 30,
			),
		);
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
	 * Returns context field descriptions for auto-update.
	 *
	 * @return array
	 */
	public function get_auto_update_context_fields(): array {
		return array(
			array(
				'description' => __( 'Use {field_name} placeholders in the Endpoint URL to inject field values.', 'jet-form-builder' ),
				'example'     => 'https://api.example.com/products?category={category_field}',
			),
		);
	}

	/**
	 * Generate with context — replaces {field_name} placeholders in the URL.
	 *
	 * @param array $settings Parsed settings.
	 * @param array $context  ['field_name' => 'value'] from listened fields.
	 *
	 * @return array
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		if ( ! empty( $context ) && ! empty( $settings['endpoint_url'] ) ) {
			foreach ( $context as $field_name => $field_value ) {
				$settings['endpoint_url'] = str_replace(
					'{' . $field_name . '}',
					rawurlencode( (string) $field_value ),
					$settings['endpoint_url']
				);
			}
		}

		return $this->generate( $settings );
	}

	/**
	 * Generates options by fetching from the REST API endpoint.
	 *
	 * @param array $args Settings from schema.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$endpoint = trim( $args['endpoint_url'] ?? '' );

		if ( empty( $endpoint ) ) {
			return array();
		}

		$request_args = array(
			'timeout' => intval( $args['request_timeout'] ?? 10 ),
			'headers' => $this->parse_headers( $args['request_headers'] ?? '' ),
		);

		$response = wp_remote_get( $endpoint, $request_args );
		if ( is_wp_error( $response ) ) {
			return array();
		}

		if ( 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return array();
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( ! is_array( $body ) ) {
			return array();
		}

		// Navigate to items array if path specified
		$items_path = trim( $args['items_path'] ?? '' );
		if ( ! empty( $items_path ) ) {
			$body = $this->get_by_path( $body, $items_path );
		}

		if ( ! is_array( $body ) ) {
			return array();
		}

		$value_path = $args['value_path'] ?? 'id';
		$label_path = $args['label_path'] ?? 'name';
		$result     = array();

		foreach ( $body as $item ) {
			if ( ! is_array( $item ) ) {
				continue;
			}

			$value = $this->get_by_path( $item, $value_path );

			if ( null === $value ) {
				continue;
			}

			$label = $this->get_by_path( $item, $label_path );

			$result[] = array(
				'value' => strval( $value ),
				'label' => strval( $label ?? $value ),
			);
		}

		return $result;
	}

	/**
	 * Parse textarea headers string into associative array.
	 * Format: one "Header-Name: value" per line.
	 *
	 * @param string $raw Raw headers string.
	 *
	 * @return array Parsed headers.
	 */
	private function parse_headers( string $raw ): array {
		$headers = array();

		foreach ( explode( "\n", $raw ) as $line ) {
			$line = trim( $line );

			if ( empty( $line ) ) {
				continue;
			}

			$parts = explode( ':', $line, 2 );

			if ( 2 === count( $parts ) ) {
				$headers[ trim( $parts[0] ) ] = trim( $parts[1] );
			}
		}

		return $headers;
	}

	/**
	 * Navigate to a nested value using dot notation.
	 * Example: get_by_path( $data, 'results.items' ) reads $data['results']['items'].
	 *
	 * @param array  $data Array to navigate.
	 * @param string $path Dot-separated path.
	 *
	 * @return mixed|null Value at path or null if not found.
	 */
	private function get_by_path( array $data, string $path ) {
		$keys    = explode( '.', $path );
		$current = $data;

		foreach ( $keys as $key ) {
			if ( ! is_array( $current ) || ! array_key_exists( $key, $current ) ) {
				return null;
			}
			$current = $current[ $key ];
		}

		return $current;
	}
}

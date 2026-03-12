<?php

namespace JFB_Modules\Option_Field;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * HTML Attributes Injector for Auto-Update Feature.
 *
 * Injects data attributes into option field HTML for auto-update functionality.
 * These attributes are read by the frontend JavaScript watcher system.
 */
class Html_Attributes_Injector {

	/**
	 * Field types that support auto-update.
	 *
	 * @var array
	 */
	private static $supported_types = array(
		'select-field',
		'checkbox-field',
		'radio-field',
	);

	/**
	 * Initialize hooks.
	 */
	public function __construct() {
		foreach ( self::$supported_types as $type ) {
			add_filter(
				"jet-form-builder/render/{$type}",
				array( $this, 'inject_attributes' ),
				10,
				2
			);
		}
	}

	/**
	 * Inject auto-update attributes into field args.
	 *
	 * This filter is called before the field template is rendered,
	 * allowing us to add data attributes that will be applied via
	 * $this->add_attribute() in the template.
	 *
	 * @param array $args        Field render args.
	 * @param Base  $render_base Render instance.
	 *
	 * @return array Modified args with injected attributes.
	 */
	public function inject_attributes( $args, $render_base ) {
		// Only proceed if generator_auto_update is enabled
		if ( empty( $args['generator_auto_update'] ) ) {
			return $args;
		}

		// Only proceed if field uses generator
		if ( empty( $args['field_options_from'] ) || 'generate' !== $args['field_options_from'] ) {
			return $args;
		}

		// Only proceed if generator is set
		if ( empty( $args['generator_function'] ) ) {
			return $args;
		}

		// Build data attributes array
		$data_attrs = array();

		// Core auto-update identification
		$data_attrs['data-jfb-auto-update'] = '1';
		$data_attrs['data-generator-id']    = esc_attr( $args['generator_function'] );
		$data_attrs['data-field-name']      = esc_attr( $args['name'] );
		$data_attrs['data-field-type']      = esc_attr( $render_base->get_name() );

		// Listen field configuration
		if ( ! empty( $args['generator_listen_field'] ) ) {
			$listen_to = $args['generator_listen_field'];

			// Support both string (single field) and array (multiple fields)
			if ( is_array( $listen_to ) ) {
				// Multiple fields: store as JSON
				$data_attrs['data-listen-to']          = esc_attr( wp_json_encode( $listen_to ) );
				$data_attrs['data-listen-to-multiple'] = '1';
			} else {
				// Single field: store as string (backwards compat)
				$data_attrs['data-listen-to'] = esc_attr( $listen_to );
			}
		}

		// Require all listened fields to be filled before triggering update.
		// Also check legacy attribute name for backward compatibility with saved forms.
		if ( ! empty( $args['generator_require_all_filled'] ) || ! empty( $args['generator_listen_all'] ) ) {
			$data_attrs['data-require-all-filled'] = '1';
		}

		// Button trigger configuration
		if ( ! empty( $args['generator_update_on_button'] ) ) {
			$data_attrs['data-update-on-button'] = esc_attr( $args['generator_update_on_button'] );
		}

		// Cache timeout (in seconds)
		$cache_timeout = isset( $args['generator_cache_timeout'] ) ? absint( $args['generator_cache_timeout'] ) : 60;
		$data_attrs['data-cache-timeout'] = $cache_timeout;

		// Form ID for REST API calls
		$form_id = $render_base->form_id ?? 0;
		if ( $form_id ) {
			$data_attrs['data-form-id'] = absint( $form_id );
		}

		// Store data attributes in args for template access
		if ( ! isset( $args['_jfb_data_attrs'] ) ) {
			$args['_jfb_data_attrs'] = array();
		}
		$args['_jfb_data_attrs'] = array_merge( $args['_jfb_data_attrs'], $data_attrs );

		// Enqueue the auto-update script when a field uses it
		$module = \Jet_Form_Builder\Plugin::instance()->module( 'option-field' );
		if ( $module ) {
			wp_enqueue_script( $module->get_handle( 'auto-update' ) );
			if ( wp_style_is( $module->get_handle( 'auto-update' ), 'registered' ) ) {
				wp_enqueue_style( $module->get_handle( 'auto-update' ) );
			}
		}

		return $args;
	}

	/**
	 * Helper method to render data attributes in template.
	 * Can be called from field templates if needed.
	 *
	 * @param array $args Field render args.
	 *
	 * @return string HTML attributes string.
	 */
	public static function render_data_attributes( array $args ): string {
		if ( empty( $args['_jfb_data_attrs'] ) ) {
			return '';
		}

		$attrs = array();

		foreach ( $args['_jfb_data_attrs'] as $key => $value ) {
			if ( '' !== $value ) {
				$attrs[] = sprintf( '%s="%s"', esc_attr( $key ), esc_attr( $value ) );
			}
		}

		return implode( ' ', $attrs );
	}
}

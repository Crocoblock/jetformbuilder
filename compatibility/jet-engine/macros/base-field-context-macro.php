<?php
/**
 * Shared helpers for JetEngine macros that read JetFormBuilder field values.
 *
 * @package JFB_Compatibility\Jet_Engine\Macros
 */

namespace JFB_Compatibility\Jet_Engine\Macros;

if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Field_Context_Macro extends \Jet_Engine_Base_Macros {

	protected function get_context_value( string $field_name ) {
		$request_key = 'jfb_update_related_' . $field_name;

		if (
			isset( $GLOBALS['jfb_generator_context'] ) &&
			is_array( $GLOBALS['jfb_generator_context'] ) &&
			array_key_exists( $field_name, $GLOBALS['jfb_generator_context'] )
		) {
			return $this->sanitize_value( $GLOBALS['jfb_generator_context'][ $field_name ] );
		}

		if ( isset( $_REQUEST[ $request_key ] ) ) {
			// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			return $this->sanitize_value( wp_unslash( $_REQUEST[ $request_key ] ) );
		}

		if ( isset( $GLOBALS[ $request_key ] ) ) {
			return $this->sanitize_value( $GLOBALS[ $request_key ] );
		}

		if ( function_exists( 'jet_fb_context' ) ) {
			$request_data = jet_fb_context()->resolve_request();

			if ( isset( $request_data[ $field_name ] ) ) {
				return $this->sanitize_value( $request_data[ $field_name ] );
			}
		}

		return '';
	}

	protected function sanitize_value( $value ) {
		if ( is_array( $value ) ) {
			return $value;
		}

		if ( is_numeric( $value ) ) {
			return $value;
		}

		return sanitize_text_field( $value );
	}
}

<?php
/**
 * JetEngine Macro for accessing form field values during auto-update.
 *
 * This macro allows JetEngine Query Builder to access values from form fields
 * when options are being dynamically regenerated via auto-update feature.
 *
 * Usage in JetEngine Query:
 * Use dynamic tag "JFB Auto-Update - Field Value" with field_name parameter
 * in query conditions, meta queries, or tax queries.
 *
 * @package JFB_Compatibility\Jet_Engine\Macros
 */

namespace JFB_Compatibility\Jet_Engine\Macros;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Auto_Update_Field_Value class.
 *
 * JetEngine macro that retrieves form field values from the auto-update context.
 * Values are stored in $_REQUEST with 'jfb_update_related_' prefix by the
 * Generator_Update_Endpoint during cascading field updates.
 */
class Auto_Update_Field_Value extends \Jet_Engine_Base_Macros {

	/**
	 * Returns macro tag for JetEngine.
	 *
	 * @return string
	 */
	public function macros_tag() {
		return 'jfb_auto_update_field_value';
	}

	/**
	 * Returns macro name displayed in JetEngine UI.
	 *
	 * @return string
	 */
	public function macros_name() {
		return 'JFB Auto-Update - Field Value';
	}

	/**
	 * Returns macro arguments configuration.
	 *
	 * @return array
	 */
	public function macros_args() {
		return array(
			'field_name' => array(
				'label'   => __( 'Field Name', 'jet-form-builder' ),
				'type'    => 'text',
				'default' => '',
			),
		);
	}

	/**
	 * Macro callback - retrieves field value from request context.
	 *
	 * Values are set by Generator_Update_Endpoint::run_callback() with format:
	 * $_REQUEST['jfb_update_related_' . field_name] = field_value
	 *
	 * Also checks $GLOBALS as fallback (set by Get_From_Je_Query::generate_with_context).
	 *
	 * @param array $args Macro arguments with 'field_name'.
	 *
	 * @return string|int|array Field value or empty string if not found.
	 */
	public function macros_callback( $args = array() ) {
		$field_name = ! empty( $args['field_name'] ) ? $args['field_name'] : null;

		if ( ! $field_name ) {
			return '';
		}

		$request_key = 'jfb_update_related_' . $field_name;

		// Check $_REQUEST first (set by Generator_Update_Endpoint)
		if ( isset( $_REQUEST[ $request_key ] ) ) {
			return $this->sanitize_value( $_REQUEST[ $request_key ] );
		}

		// Fallback to $GLOBALS (set by Get_From_Je_Query::generate_with_context)
		if ( isset( $GLOBALS[ $request_key ] ) ) {
			return $this->sanitize_value( $GLOBALS[ $request_key ] );
		}

		// Try jet_fb_context() as final fallback for form submissions
		if ( function_exists( 'jet_fb_context' ) ) {
			$request_data = jet_fb_context()->resolve_request();
			if ( isset( $request_data[ $field_name ] ) ) {
				return $this->sanitize_value( $request_data[ $field_name ] );
			}
		}

		return '';
	}

	/**
	 * Sanitize field value based on type.
	 *
	 * @param mixed $value Field value.
	 *
	 * @return mixed Sanitized value.
	 */
	private function sanitize_value( $value ) {
		if ( is_array( $value ) ) {
			// For arrays (checkboxes, multi-select), return as comma-separated
			// or keep as array depending on JetEngine query needs
			return $value;
		}

		if ( is_numeric( $value ) ) {
			return $value;
		}

		// Sanitize string values
		return sanitize_text_field( $value );
	}
}

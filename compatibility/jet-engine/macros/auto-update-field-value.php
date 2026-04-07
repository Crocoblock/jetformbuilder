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
 * Values are available in scoped $GLOBALS['jfb_generator_context'] and
 * in legacy $_REQUEST / $GLOBALS keys with 'jfb_update_related_' prefix.
 */
class Auto_Update_Field_Value extends Base_Field_Context_Macro {

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
	 * Preferred source (scoped): $GLOBALS['jfb_generator_context'][field_name].
	 * Legacy fallback sources:
	 * - $_REQUEST['jfb_update_related_' . field_name]
	 * - $GLOBALS['jfb_update_related_' . field_name] (set by Get_From_Je_Query::generate_with_context).
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

		return $this->get_context_value( $field_name );
	}
}

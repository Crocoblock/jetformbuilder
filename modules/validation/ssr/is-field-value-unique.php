<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Request\Parser_Context;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Field_Value_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_field_value_unique';
	}

	public function get_label(): string {
		return __( 'Is field value unique', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		$request = $context->get_request();
		$field_name = $request['_jfb_validation_path'][0];
		$form_id = $request['_jet_engine_booking_form_id'];

		global $wpdb;
		$record_ids = $wpdb->get_col($wpdb->prepare(
			"SELECT id FROM {$wpdb->prefix}jet_fb_records WHERE form_id = %d AND status = %s",
			$form_id,
			'success'
		));
		if (!empty($record_ids)) {
			$exists = $wpdb->get_var($wpdb->prepare(
				"SELECT COUNT(*) FROM {$wpdb->prefix}jet_fb_records_fields 
         		WHERE record_id IN (" . implode(',', array_map('intval', $record_ids)) . ")
         		AND field_name = %s
         		AND field_value = %s",
				$field_name,
				$value
			));
			if ($exists) {
				return false;
			}
		}
		return true;
	}
}

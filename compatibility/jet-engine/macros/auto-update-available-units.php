<?php
/**
 * JetBooking available units macro for JetFormBuilder auto-update.
 *
 * @package JFB_Compatibility\Jet_Engine\Macros
 */

namespace JFB_Compatibility\Jet_Engine\Macros;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Auto_Update_Available_Units extends Base_Field_Context_Macro {

	public function macros_tag() {
		return 'jfb_auto_update_available_units';
	}

	public function macros_name() {
		return 'JFB Auto-Update - JetBooking Available Units';
	}

	public function macros_args() {
		return array(
			'_date_field' => array(
				'label'   => __( 'Date field name', 'jet-form-builder' ),
				'type'    => 'text',
				'default' => '',
			),
			'_post_field' => array(
				'label'   => __( 'Apartment ID field name', 'jet-form-builder' ),
				'type'    => 'text',
				'default' => '',
			),
		);
	}

	public function macros_callback( $args = array() ) {
		$date_field = ! empty( $args['_date_field'] ) ? $args['_date_field'] : null;
		$post_field = ! empty( $args['_post_field'] ) ? $args['_post_field'] : null;

		if ( ! $date_field || ! $post_field || ! function_exists( 'jet_abaf' ) ) {
			return '';
		}

		$bounds = (array) $this->get_context_value( $date_field . '_jfbuf_timestamp_array' );

		if ( empty( $bounds ) ) {
			return '';
		}

		$apartment_id = $this->get_context_value( $post_field );

		if ( ! $apartment_id ) {
			return '';
		}

		$in  = $bounds['start'] ?? false;
		$out = $bounds['end'] ?? false;

		if ( ! $in || ! $out ) {
			return '';
		}

		$booking = array(
			'apartment_id'   => $apartment_id,
			'check_in_date'  => $in,
			'check_out_date' => $out,
		);

		$available_units = jet_abaf()->db->get_available_units( $booking );

		if ( empty( $available_units ) ) {
			return '';
		}

		return implode( ',', array_column( $available_units, 'unit_id' ) );
	}
}

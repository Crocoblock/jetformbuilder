<?php
/**
 * JetAppointment service macro for JetFormBuilder auto-update.
 *
 * @package JFB_Compatibility\Jet_Engine\Macros
 */

namespace JFB_Compatibility\Jet_Engine\Macros;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Auto_Update_Appointment_Service extends Base_Field_Context_Macro {

	public function macros_tag() {
		return 'jfb_auto_update_appointment_service';
	}

	public function macros_name() {
		return 'JFB Auto-Update - JetAppointment Service';
	}

	public function macros_args() {
		return array(
			'field_name' => array(
				'label'   => __( 'Field Name', 'jet-form-builder' ),
				'type'    => 'text',
				'default' => '',
			),
		);
	}

	public function macros_callback( $args = array() ) {
		$field_name = ! empty( $args['field_name'] ) ? $args['field_name'] : null;

		if ( ! $field_name || ! function_exists( 'jet_apb' ) || ! function_exists( 'jet_engine' ) ) {
			return '';
		}

		$post_id = $this->get_context_value( $field_name );

		if ( ! $post_id ) {
			return '';
		}

		$post = get_post( $post_id );

		if ( ! $post ) {
			return '';
		}

		$provider_id   = $post->ID;
		$services_cpt  = jet_apb()->settings->get( 'services_cpt' );
		$providers_cpt = jet_apb()->settings->get( 'providers_cpt' );

		if ( ! $provider_id || ! $services_cpt || ! $providers_cpt ) {
			return '';
		}

		$services = jet_engine()->relations->get_related_posts(
			array(
				'post_type_1' => $services_cpt,
				'post_type_2' => $providers_cpt,
				'post_id'     => $provider_id,
				'from'        => $services_cpt,
			)
		);

		if ( ! is_array( $services ) ) {
			$services = array( $services );
		}

		return implode( ',', array_filter( $services ) );
	}
}

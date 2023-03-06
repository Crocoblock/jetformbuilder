<?php


namespace Jet_Form_Builder\Form_Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Import_Form_Trait {

	/**
	 * Import form by data
	 *
	 * @param array $form_data [description]
	 *
	 * @return [type]            [description]
	 */
	public function import_form( $form_data = array() ) {

		$form_data = wp_parse_args(
			$form_data,
			array(
				'post_title'  => 'New form',
				'post_status' => 'publish',
			)
		);

		if ( isset( $form_data['meta_input'] ) && is_array( $form_data['meta_input'] ) ) {
			$form_data['meta_input'] = wp_slash( $form_data['meta_input'] );
		}

		$post_id = wp_insert_post(
			array_merge(
				$form_data,
				array(
					'post_type' => $this->post_type(),
				)
			)
		);

		if ( is_wp_error( $post_id ) ) {
			wp_die( $post_id->get_error_message(), 'Error' );
		}

		return $post_id;

	}

}

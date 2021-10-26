<?php


namespace Jet_Form_Builder\Form_Actions;

trait Get_Form_Data {

	/**
	 * Get post ID from the current request and validate user acess to this post
	 *
	 * @return [type] [description]
	 */
	public function get_post_id_from_request() {

		$post_id = ! empty( $_GET['post'] ) ? absint( $_GET['post'] ) : false;

		if ( ! $post_id ) {
			wp_die( 'Form ID not found in the request', 'Error!' );
		}

		if ( ! $this->check_user_access( $post_id ) ) {
			wp_die( 'You haven`t access to this form', 'Error!' );
		}

		return $post_id;

	}

	/**
	 * Returns from data by ID
	 *
	 * @param  [type] $form_id [description]
	 *
	 * @return [type]          [description]
	 */
	public function get_from_data( $form_id ) {
		$post       = get_post( $form_id );
		$meta_value = $this->parse_meta_value(
			get_post_meta( $form_id ),
			array( '_edit_lock' )
		);

		$for_encoding = $this->parse_form_data(
			array(
				'post_title'   => $post->post_title,
				'post_content' => $post->post_content,
				'meta_input'   => $meta_value,
			)
		);

		return array( $post, $for_encoding );
	}

	public function parse_form_data( $data ) {
		return $data;
	}

	private function parse_meta_value( $meta, $exclude = array() ) {
		$response = array();

		foreach ( $meta as $key => $value ) {
			if ( in_array( $key, $exclude ) ) {
				continue;
			}
			$response[ $key ] = $value[0];
		}

		return $response;
	}
}

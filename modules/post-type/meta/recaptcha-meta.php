<?php


namespace JFB_Modules\Post_Type\Meta;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Recaptcha_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_recaptcha';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}

	/**
	 * @param $form_id
	 *
	 * @return array
	 */
	public function query( $form_id ) {
		$response = parent::query( $form_id );

		return is_array( $response ) ? $response : array();
	}
}

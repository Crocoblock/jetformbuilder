<?php


namespace JFB_Modules\Post_Type\Meta;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Actions_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_actions';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '[]';
	}

	public function query( $form_id ) {
		$response = parent::query( $form_id );

		return is_array( $response ) ? $response : array();
	}
}

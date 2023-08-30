<?php


namespace Jet_Form_Builder\Post_Meta;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Gateways_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_gateways';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}

	public function is_supported(): bool {
		return jet_form_builder()->allow_gateways;
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

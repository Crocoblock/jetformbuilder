<?php


namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Tools;

class Prepared_Queries {

	public static function add_notes_by_id( $post_id, $data ) {
		if ( ! is_array( $data ) ) {
			$data = array( 'note' => $data );
		}

		$login = wp_get_current_user()->user_login ?? 'WEBHOOK';

		$data = array_merge( array(
			'by'         => $login,
			'created_dt' => current_time( 'timestamp' ),
			'note'       => ''
		), $data );

		if ( ! $data['note'] ) {
			return false;
		}

		return add_post_meta(
			$post_id,
			Scenarios_Manager::NOTES_KEY,
			Tools::encode_json( $data )
		);
	}

}
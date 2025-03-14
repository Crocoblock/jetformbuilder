<?php
namespace JFB_Compatibility\Jet_Engine\Map_Field;

/**
 * Rewritten Get_Map_Location_Data endpoint
 */
class Get_Map_Location_Data_Endpoint extends \Jet_Engine\Modules\Maps_Listings\Get_Map_Location_Data {

	/**
	 * Check user access to current end-point
	 *
	 * @return bool
	 */
	public function permission_callback( $request ) {
		return current_user_can( 'edit_posts' ) || $this->validate_public_request( $request );
	}

	/**
	 * Check public-side user access to current end-point
	 *
	 * @return bool
	 */
	public function validate_public_request( $request ) {

		$nonce = $request->get_header( 'X-WP-Nonce' );

		if ( ! $nonce || ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
			return false;
		}

		/**
		 * @see https://github.com/Crocoblock/jetformbuilder/issues/521
		 */
		$referer = $request->get_header( 'referer' );

		if ( ! $referer || false === strpos( $referer, home_url( '/' ) ) ) {
			return false;
		}

		return true;
	}
}

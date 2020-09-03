<?php
namespace Jet_Form_Builder\Rest;

use Jet_Form_Builder\Plugin;

class Endpoint_Update_Form extends Endpoint_Base {

	/**
	 * Returns route name
	 *
	 * @return string
	 */
	public function get_name() {
		return 'update-form';
	}

	/**
	 * API callback
	 *
	 * @return void
	 */
	public function callback( $request ) {

		$params  = $request->get_params();
		$item_id = ! empty( $params['item_id'] ) ? absint( $params['item_id'] ) : 0;
		$body    = ! empty( $params['body'] ) ? $params['body'] : array();
		$name    = ! empty( $params['name'] ) ? $params['name'] : '(no name)';

		$result = array(
			'success' => true,
		);

		$item = array(
			'body' => $body,
			'name' => $name,
		);

		if ( ! $item_id ) {

			$item_id = Plugin::instance()->db->insert( $item );

			if ( $item_id ) {
				$result['redirect'] = add_query_arg(
					array(
						'page' => 'jet-form-builder-edit',
						'form' => $item_id,
					),
					esc_url( admin_url( 'admin.php' ) )
				);
			} else {
				$result = array(
					'success' => false,
					'message' => 'Please try again later',
				);
			}
		} else {
			Plugin::instance()->db->update( $item, array(
				'ID' => $item_id,
			) );
		}

		return rest_ensure_response( $result );

	}

	/**
	 * Check user access to current end-popint
	 *
	 * @return bool
	 */
	public function permission_callback( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Returns endpoint request method - GET/POST/PUT/DELTE
	 *
	 * @return string
	 */
	public function get_method() {
		return 'POST';
	}

	/**
	 * Returns arguments config
	 *
	 * @return array
	 */
	public function get_args() {
		return array(
			'body'  => array(
				'default'  => null,
				'required' => true,
			),
			'name'  => array(
				'default'  => null,
				'required' => false,
			),
			'item_id' => array(
				'default'  => null,
				'required' => false,
			),
		);
	}

}

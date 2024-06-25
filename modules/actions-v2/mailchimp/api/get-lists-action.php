<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Get_Lists_Action extends Base_Api_Action {

	protected $method = 'GET';

	public function action_endpoint() {
		return add_query_arg(
			array(
				'count' => 999,
			),
			'lists'
		);
	}


	/**
	 * @return \Generator
	 * @throws Gateway_Exception
	 */
	public function generate_lists(): \Generator {
		$response = $this->get_response_body();

		if ( ! empty( $response['errors'] ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Gateway_Exception( $response['detail'] );
		}

		foreach ( $response['lists'] as $list ) {
			yield array(
				'value' => $list['id'],
				'label' => $list['name'],
			);
		}
	}

}

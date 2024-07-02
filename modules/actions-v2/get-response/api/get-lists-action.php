<?php

namespace JFB_Modules\Actions_V2\Get_Response\Api;

class Get_Lists_Action extends Base_Api_Action {

	protected $method = 'GET';

	public function action_endpoint() {
		return 'campaigns';
	}

	/**
	 * @return \Generator
	 */
	public function generate_lists(): \Generator {
		$response = $this->get_response_body();

		foreach ( $response as $list ) {
			yield array(
				'value' => $list['campaignId'],
				'label' => $list['name'],
			);
		}
	}

}

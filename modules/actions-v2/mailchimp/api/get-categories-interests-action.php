<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use JFB_Modules\Actions_V2\Mailchimp\Api\interfaces\List_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\traits\List_Trait;

class Get_Categories_Interests_Action extends Base_Api_Action implements List_Interface {

	use List_Trait;

	protected $method = 'GET';

	public function action_endpoint() {
		return 'lists/{list_id}/interest-categories/{cat_id}/interests?count=999';
	}

	public function generate_interests(): \Generator {
		$response = $this->get_response_body();

		if ( empty( $response['interests'] ) ) {
			return;
		}

		foreach ( $response['interests'] as $interest ) {
			yield array(
				'value' => $interest['id'],
				'label' => $interest['name'],
			);
		}
	}

	public function set_category_id( string $category_id ) {
		$this->set_path(
			array(
				'cat_id' => $category_id,
			)
		);
	}

}

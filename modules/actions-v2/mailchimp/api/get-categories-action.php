<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Actions_V2\Mailchimp\Api\Base_Api_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\interfaces\List_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\traits\List_Trait;

class Get_Categories_Action extends Base_Api_Action implements List_Interface {

	use List_Trait;

	protected $method = 'GET';

	public function action_endpoint() {
		return 'lists/{list_id}/interest-categories?count=999';
	}

	public function generate_categories(): \Generator {
		$response = $this->get_response_body();

		if ( empty( $response['categories'] ) ) {
			return;
		}

		foreach ( $response['categories'] as $category ) {
			yield array(
				'value' => $category['id'],
				'label' => $category['title'],
			);
		}
	}

}

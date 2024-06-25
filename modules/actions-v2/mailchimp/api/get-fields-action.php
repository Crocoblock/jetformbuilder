<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Actions_V2\Mailchimp\Api\Base_Api_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\interfaces\List_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\traits\List_Trait;

class Get_Fields_Action extends Base_Api_Action implements List_Interface {

	use List_Trait;

	protected $method = 'GET';

	public function action_endpoint() {
		return 'lists/{list_id}/merge-fields?count=999';
	}

	public function generate_fields(): \Generator {
		$response = $this->get_response_body();

		if ( empty( $response['merge_fields'] ) ) {
			return;
		}

		foreach ( $response['merge_fields'] as $field ) {
			yield array(
				'value'    => $field['tag'],
				'label'    => $field['name'],
				'required' => $field['required'],
			);
		}
	}

}

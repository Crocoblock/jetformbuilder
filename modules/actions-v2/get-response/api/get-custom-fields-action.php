<?php

namespace JFB_Modules\Actions_V2\Get_Response\Api;

class Get_Custom_Fields_Action extends Base_Api_Action {

	protected $method = 'GET';

	public function action_endpoint() {
		return 'custom-fields';
	}

	/**
	 * @return \Generator
	 */
	public function generate_fields(): \Generator {
		$custom_fields = $this->get_response_body();

		foreach ( $custom_fields as $field ) {
			if ( ! isset( $field['customFieldId'] ) ) {
				continue;
			}
			yield array(
				'value' => $field['customFieldId'],
				'label' => $field['name'],
			);
		}
	}

}

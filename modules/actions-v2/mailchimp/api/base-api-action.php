<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use JFB_Modules\Gateways\Base_Gateway_Action;

class Base_Api_Action extends Base_Gateway_Action {

	public function base_url(): string {
		return 'https://{domain}.api.mailchimp.com/3.0/';
	}

	public function set_domain( string $domain ): self {
		return $this->set_path(
			array(
				'domain' => $domain,
			)
		);
	}

	public function set_basic_auth( $token ): Base_Gateway_Action {
		// phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions
		return parent::set_basic_auth( base64_encode( 'user:' . $token ) );
	}

}

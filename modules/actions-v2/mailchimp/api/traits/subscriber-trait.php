<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api\traits;

trait Subscriber_Trait {

	use List_Trait;

	protected $email_address = '';

	public function set_email_address( string $email_address ) {
		$this->email_address = $email_address;

		$this->set_path(
			array(
				'email_md5' => md5( strtolower( $this->get_email_address() ) ),
			)
		);
	}


	/**
	 * @return string
	 */
	public function get_email_address(): string {
		return $this->email_address;
	}

}

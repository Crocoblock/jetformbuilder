<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api\interfaces;

interface Subscriber_Interface extends List_Interface {

	public function set_email_address( string $email_address );

	public function get_email_address(): string;

}

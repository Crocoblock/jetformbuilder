<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

use JFB_Modules\Actions_V2\Mailchimp\Api\interfaces\Subscriber_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\traits\Subscriber_Trait;
use JFB_Modules\Gateways\Base_Gateway_Action;

class Create_Tags_Action extends Base_Api_Action implements Subscriber_Interface {

	use Subscriber_Trait;

	protected $method = 'POST';
	private $tags     = array();

	public function action_endpoint() {
		return 'lists/{list_id}/members/{email_md5}/tags';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json; charset=utf-8',
		);
	}

	public function action_body() {
		return array(
			'tags' => iterator_to_array( $this->generate_tags() ),
		);
	}

	/**
	 * @return array
	 */
	public function get_tags(): array {
		return $this->tags;
	}

	/**
	 * @param array|string $tags
	 */
	public function set_tags( $tags ) {
		if ( is_array( $tags ) ) {
			$this->tags = $tags;

			return;
		}

		if ( is_string( $tags ) ) {
			$this->set_tags_from_list( $tags );
		}
	}

	private function set_tags_from_list( string $tags_list ) {
		$this->set_tags(
			array_map( 'trim', explode( ',', $tags_list ) )
		);
	}

	protected function generate_tags(): \Generator {
		foreach ( $this->tags as $tag ) {
			yield array(
				'name'   => $tag,
				'status' => 'active',
			);
		}
	}


}

<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Create_Tag_Action extends Base_Action {

	protected $tag;

	public function action_endpoint() {
		return 'tags';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function action_body() {
		return array(
			'tag' => array(
				'tag'     => $this->tag,
				'tagType' => 'contact'
			),
		);
	}

	public function set_tag( string $tag ): self {
		$this->tag = $tag;

		return $this;
	}
}
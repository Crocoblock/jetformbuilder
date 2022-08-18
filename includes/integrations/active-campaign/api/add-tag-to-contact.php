<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


class Add_Tag_To_Contact extends Base_Action {

	protected $contact;
	protected $tag;

	public function action_endpoint() {
		return 'api/3/contactTags';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function action_body() {
		return array(
			'contactTag' => array(
				'contact' => $this->contact,
				'tag'     => $this->tag,
			),
		);
	}

	public function set_contact( int $contact ): self {
		$this->contact = $contact;

		return $this;
	}

	public function set_tag( int $tag ): self {
		$this->tag = $tag;

		return $this;
	}
}
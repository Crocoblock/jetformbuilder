<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


class Update_List_Status extends Base_Action {

	protected $list;
	protected $contact;

	public function action_endpoint() {
		return 'contactLists';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function action_body() {
		return array(
			'contactList' => array(
				'contact' => $this->contact,
				'list'    => $this->list,
				'status'  => 1,
			)
		);
	}

	public function set_contact( int $contact ): self {
		$this->contact = $contact;

		return $this;
	}

	public function set_list( int $list ): self {
		$this->list = $list;

		return $this;
	}
}
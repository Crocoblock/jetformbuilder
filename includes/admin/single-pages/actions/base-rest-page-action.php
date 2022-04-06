<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Actions;

use Jet_Form_Builder\Admin\Pages\Actions\Base_Page_Action;

abstract class Base_Rest_Page_Action extends Base_Page_Action {

	abstract public function get_rest_url(): string;

	abstract public function get_methods(): string;

	public function get_messages(): array {
		return array();
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'endpoint' => array(
				'url'    => $this->get_rest_url(),
				'method' => $this->get_methods(),
			),
			'messages' => $this->get_messages(),
		);
	}

}

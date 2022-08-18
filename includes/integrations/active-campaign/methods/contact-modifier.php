<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Exceptions\Action_Exception;

class Contact_Modifier extends Abstract_Modifier {

	public $token;
	public $url;

	protected function get_actions(): Collection {
		return new Collection(
			array(
				new Sync_Contact_Action(),
			)
		);
	}

	protected function get_properties(): Object_Properties_Collection {
		return new Object_Properties_Collection(
			array(
				new Email_Contact_Property(),
				new First_Name_Contact_Property(),
				new Last_Name_Contact_Property(),
				new Phone_Contact_Property(),
				new List_Contact_Property(),
				new Tags_Contact_Property(),
			)
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function run() {
		if ( empty( $this->url ) || empty( $this->token ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		parent::run();
	}


	public function set_api_key( string $token ): self {
		$this->token = $token;

		return $this;
	}

	public function set_api_url( string $url ): self {
		$this->url = $url;

		return $this;
	}
}
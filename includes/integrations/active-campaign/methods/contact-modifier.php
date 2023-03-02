<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
				new Custom_Contact_Property(),
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

	/**
	 * Convert legacy properties.
	 * Custom properties converting in
	 * \Jet_Form_Builder\Integrations\Active_Campaign\Methods\Custom_Contact_Property
	 *
	 * @param array $fields_map
	 * @param bool $revert
	 *
	 * @return Abstract_Modifier|Contact_Modifier
	 */
	public function set_fields_map( array $fields_map, bool $revert = false ): Abstract_Modifier {
		parent::set_fields_map( $fields_map, $revert );

		$legacy = array(
			'first_name' => 'firstName',
			'last_name'  => 'lastName',
		);

		foreach ( $this->fields_map as $field_name => $property ) {
			if ( ! isset( $legacy[ $property ] ) ) {
				continue;
			}
			$this->fields_map[ $field_name ] = $legacy[ $property ];
		}

		return $this;
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
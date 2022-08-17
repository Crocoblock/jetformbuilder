<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;

/**
 * @since 2.1.4
 * @link https://developers.activecampaign.com/reference/sync-a-contacts-data
 *
 * Class Sync_Contact_Action
 * @package Jet_Form_Builder\Integrations\Active_Campaign\Api
 */
class Sync_Contact_Action extends Base_Action {

	const DEFAULT_PROPERTIES = array(
		'email',
		'firstName',
		'lastName',
		'phone'
	);

	protected $contact = array();

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function action_endpoint() {
		return 'api/3/contact/sync';
	}

	public function action_body() {
		return array(
			'contact' => $this->contact
		);
	}

	public function set_contact( array $contact ): self {
		foreach ( $contact as $current => $value ) {
			$this->set_contact_property( $current, $value );
		}

		return $this;
	}

	public function set_contact_property( string $property, $value ): self {
		if ( in_array( $property, self::DEFAULT_PROPERTIES, true ) ) {
			$this->contact[ $property ] = $value;

			return $this;
		}

		if ( ! is_array( $this->contact['fieldValues'] ) ) {
			$this->contact['fieldValues'] = array();
		}

		$property = $this->legacy_convert( $property );

		$this->contact['fieldValues'][] = array(
			'field' => $property,
			'value' => $value,
		);

		return $this;
	}

	/**
	 * Ex: 'field[%WEBSITE%,0]', where WEBSITE is correct field
	 *
	 * @param string $property
	 *
	 * @return string
	 */
	protected function legacy_convert( string $property ): string {
		if ( 0 !== strpos( $property, 'field[%' ) ) {
			return $property;
		}

		preg_match(
			'/^field\[%(\w+)%\,0\]$/i',
			$property,
			$matches
		);

		return $matches[1] ?? $property;
	}
}
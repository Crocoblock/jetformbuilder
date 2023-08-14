<?php


namespace JFB_Modules\Active_Campaign\Methods;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Active_Campaign\Api\Retrieve_Custom_Fields_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Custom_Contact_Property extends Base_Object_Property implements Object_Dynamic_Property {

	protected $action;

	public function get_label(): string {
		return '';
	}

	public function get_id(): string {
		return 'fieldValues';
	}

	public function is_supported( string $key, $value ): bool {
		return true;
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier|Contact_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		if ( ! is_array( $this->value ) ) {
			$this->value = array();
		}

		if ( is_numeric( $key ) ) {
			$this->value[] = array(
				'field' => $key,
				'value' => $value,
			);

			return;
		}

		$key = $this->legacy_convert( $key );
		$id  = $this->get_field_id( $modifier, $key );

		$this->value[] = array(
			'field' => $id,
			'value' => $value,
		);
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

	/**
	 * @param Contact_Modifier $modifier
	 * @param string $field
	 *
	 * @return int
	 * @throws Action_Exception
	 */
	protected function get_field_id( Contact_Modifier $modifier, string $field ): int {
		$fields = $this->get_fields( $modifier );

		return $fields->get_field_id( $field );
	}

	/**
	 * @param Contact_Modifier $modifier
	 *
	 * @return Retrieve_Custom_Fields_Action
	 * @throws Action_Exception
	 */
	protected function get_fields( Contact_Modifier $modifier ): Retrieve_Custom_Fields_Action {
		if ( is_a( $this->action, Retrieve_Custom_Fields_Action::class ) ) {
			return $this->action;
		}

		/** @var Retrieve_Custom_Fields_Action $fields */
		$fields = ( new Retrieve_Custom_Fields_Action() )
			->set_base( $modifier->url )
			->set_token( $modifier->token );

		try {
			$fields->request()->check_response_code()->response_body_as_array();
		} catch ( Gateway_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			throw new Action_Exception( 'internal_error', $fields->get_request_args() );
		}

		$this->action = $fields;

		return $this->action;
	}
}

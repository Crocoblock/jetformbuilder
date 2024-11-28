<?php

namespace JFB_Modules\Actions_V2\Get_Response;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Actions_V2\Get_Response\Api\Action_Factory;
use JFB_Modules\Actions_V2\Get_Response\Api\Create_Contact_Action;

class Get_Response_Action extends Base {

	public $option_name = 'get-response-tab';

	public function get_name() {
		return __( 'Getresponse', 'jet-form-builder' );
	}

	public function get_id() {
		return 'getresponse';
	}

	/**
	 * Run a hook notification
	 *
	 * @param array          $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$api = $this->global_settings(
			array(
				'api_key' => '',
			)
		);

		if ( empty( $api['api_key'] ) || empty( $this->settings['list_id'] ) ) {
			throw new Action_Exception( 'invalid_api_key' );
		}

		$factory = new Action_Factory();
		$factory->set_api_key( $api['api_key'] );

		/** @var Create_Contact_Action $contact */
		$contact = $factory->create( Create_Contact_Action::class );
		$contact->set_list_id( $this->settings['list_id'] );
		$contact->set_email( $this->get_property_value( 'email' ) );
		$contact->set_name( $this->get_property_value( 'name' ) );
		$contact->set_day_of_cycle( $this->settings['day_of_cycle'] ?? '' );

		$fields_map = $this->settings['fields_map'] ?? array();


		foreach ( $fields_map as $param => $field ) {
			if ( ! $field || empty( $request[ $field ] ) ) {
				continue;
			}
			if ( 'name' !== $param  && 'email' !== $param ) {
				$contact->add_custom_field( $param, $request[ $field ] );
			}
		}

		try {
			$contact->request();
			$contact->check_response_code();
		} catch ( Gateway_Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception(
				'internal_error',
				$exception->getMessage(),
				...$exception->get_additional()
			);
			// phpcs:enable WordPress.Security.EscapeOutput.ExceptionNotEscaped
		}
	}

	public function editor_labels() {
		return array(
			'api_key'          => __( 'API Key:', 'jet-form-builder' ),
			'validate_api_key' => __( 'Validate API Key', 'jet-form-builder' ),
			'list_id'          => __( 'List Id:', 'jet-form-builder' ),
			'update_list_ids'  => __( 'Update List', 'jet-form-builder' ),
			'day_of_cycle'     => __( 'Day Of Cycle:', 'jet-form-builder' ),
			'fields_map'       => __( 'Fields Map:', 'jet-form-builder' ),
			'use_global'       => __( 'Use Global Settings', 'jet-form-builder' ),
		);
	}

	private function get_property_value( string $property ) {
		return jet_fb_context()->get_value(
			(string) ( $this->settings['fields_map'][ $property ] ?? '' )
		);
	}

}

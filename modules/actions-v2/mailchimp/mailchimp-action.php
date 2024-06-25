<?php

namespace JFB_Modules\Actions_V2\Mailchimp;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Actions_V2\Mailchimp\Api\Action_Factory;
use JFB_Modules\Actions_V2\Mailchimp\Api\Create_Tags_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\Put_Member_In_List_Action;

class Mailchimp_Action extends Base {

	public function get_id() {
		return 'mailchimp';
	}

	public function get_name() {
		return __( 'MailChimp', 'jet-form-builder' );
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$factory = new Action_Factory();
		$factory->set_api_key( $this->get_api_key() );

		/** @var Put_Member_In_List_Action $put_member */
		$put_member = $factory->create( Put_Member_In_List_Action::class );
		$put_member->set_list_id( $this->settings['list_id'] ?? '' );
		$put_member->set_opt_in( $this->settings['double_opt_in'] ?? '' );
		$put_member->set_email_address( $this->get_property_value( 'email' ) );
		$put_member->set_birthday( $this->get_property_value( 'BIRTHDAY' ) );
		$put_member->set_interests( $this->settings['groups_ids'] ?? array() );

		$fields_map = $this->settings['fields_map'] ?? array();

		foreach ( $fields_map as $param => $field ) {
			if ( empty( $field ) || empty( $request[ $field ] ) ) {
				continue;
			}
			$put_member->set_merge_fields( $param, $request[ $field ] );
		}

		try {
			$put_member->send_request();
		} catch ( Gateway_Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception(
				'internal_error',
				$exception->getMessage(),
				...$exception->get_additional()
			);
			// phpcs:enable WordPress.Security.EscapeOutput.ExceptionNotEscaped
		}

		/** @var Create_Tags_Action $create_tags */
		$create_tags = $factory->create( Create_Tags_Action::class );
		$create_tags->set_tags( $this->settings['tags'] ?? array() );
		$create_tags->set_email_address( $this->get_property_value( 'email' ) );
		$create_tags->set_list_id( $this->settings['list_id'] ?? '' );

		if ( ! count( $create_tags->get_tags() ) ) {
			return;
		}

		try {
			$create_tags->request();
			$create_tags->check_response_code();
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


	private function get_property_value( string $property ) {
		return jet_fb_context()->get_value(
			(string) ( $this->settings['fields_map'][ $property ] ?? '' )
		);
	}

	private function get_api_key(): string {
		if ( empty( $this->settings['use_global'] ) ) {
			return (string) ( $this->settings['api_key'] ?? '' );
		}

		$options = Tab_Handler_Manager::get_options( 'mailchimp-tab' );

		return (string) ( $options['api_key'] ?? '' );
	}

}

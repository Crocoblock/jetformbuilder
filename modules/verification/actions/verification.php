<?php


namespace JFB_Modules\Verification\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Actions_Tools;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Db\Models\Tokens_To_Records_Model;
use JFB_Modules\Form_Record\Action_Types\Save_Record;
use JFB_Modules\Verification\Events\Verification_Success;
use JFB_Modules\Verification\Events\Verification_Failed;
use JFB_Modules\Verification\Module;
use JFB_Modules\Webhook;
use JFB_Modules\Security;

class Verification extends Base {

	const TOKEN    = '_jfb_verification_token';
	const TOKEN_ID = '_jfb_verification_token_id';
	const URL      = '_jfb_verification_url';

	public function get_id() {
		return 'verification';
	}

	public function get_name() {
		return __( 'Verification', 'jet-form-builder' );
	}

	public function unsupported_events(): array {
		return array(
			Default_Required_Event::class,
			Verification_Success\Event::class,
			Verification_Failed\Event::class,
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Sql_Exception|Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		// saving the request is required
		Save_Record::add_hidden();

		// set field-type to make this fields as objects, which extends Field_Data_Parser
		jet_fb_context()->set_field_type( 'text-field', self::TOKEN );
		jet_fb_context()->set_field_type( 'text-field', self::URL );
		jet_fb_context()->set_field_type( 'number-field', self::TOKEN_ID );

		// this fields shouldn't save as field in Form Record
		jet_fb_context()->make_secure( self::TOKEN );
		jet_fb_context()->make_secure( self::URL );
		jet_fb_context()->make_secure( self::TOKEN_ID );

		$timezone = new \DateTimeZone( 'UTC' );

		try {
			$current = new \DateTimeImmutable( 'now', $timezone );
		} catch ( \Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( $exception->getMessage() );
		}

		$lifespan = $this->settings['lifespan'] ?? '';
		// return number of minutes, by default it's 240 (4 hours)
		$lifespan_min = $lifespan && is_numeric( $lifespan ) ? absint( $lifespan * 60 ) : 4 * 60;
		$token        = Security\Csrf\Csrf_Tools::generate();

		$id = ( new Tokens_Model() )->insert(
			array(
				'action'    => $this->get_id(),
				'hash'      => Security\Module::get_hasher()->HashPassword( $token ),
				'expire_at' => $current->modify(
					sprintf( '+%d min', $lifespan_min )
				)->format(
					Base_Db_Model::DATETIME_FORMAT
				),
			)
		);

		// generate unique token for current request, which could be used in another actions
		jet_fb_context()->update_request( self::TOKEN, $token );
		jet_fb_context()->update_request( self::TOKEN_ID, $id );
		jet_fb_context()->update_request(
			self::URL,
			add_query_arg(
				array(
					Webhook\Module::GET_TOKEN_ID => $id,
					Webhook\Module::GET_TOKEN    => jet_fb_context()->get_value( self::TOKEN ),
				),
				jet_fb_handler()->refer
			)
		);

		add_action(
			'jet-form-builder/form-handler/after-send',
			array( $this, 'connect_record_or_delete_token' ),
			10,
			2
		);

		$this->send_default_email();
	}

	public function send_default_email() {
		if ( ! empty( $this->settings['custom_email'] ) || empty( $this->settings['mail_to'] ) ) {
			return;
		}

		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( Module::class );

		$generator = Actions_Tools::get_flow(
			$module->get_dir( 'actions/send.email.flow.json' )
		);

		/**
		 * @var Base $action
		 * @var array $props
		 */
		foreach ( $generator as list( $action, $props ) ) {
			$action->settings['mail_to']    = 'form';
			$action->settings['from_field'] = $this->settings['mail_to'];

			jet_fb_action_handler()->add( $action, $props );
		}
	}

	/**
	 * @param $handler
	 * @param $is_success
	 *
	 * @throws Sql_Exception
	 */
	public function connect_record_or_delete_token( $handler, $is_success ) {
		$record_id = jet_fb_action_handler()->get_context( Save_Record::ID, 'id' );
		$token_id  = jet_fb_context()->get_value( self::TOKEN_ID );

		if ( ! $is_success ) {
			( new Tokens_Model() )->delete( array( 'id' => $token_id ) );

			return;
		}

		( new Tokens_To_Records_Model() )->insert(
			array(
				'token_id'  => $token_id,
				'record_id' => $record_id,
			)
		);
	}
}

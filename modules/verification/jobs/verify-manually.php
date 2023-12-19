<?php


namespace JFB_Modules\Verification\Jobs;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Form_Record\Tools;
use JFB_Modules\Jobs\Async_Job;
use JFB_Modules\Jobs\Interfaces\Self_Execution_Job_It;
use JFB_Modules\Jobs;
use JFB_Modules\Webhook;
use JFB_Modules\Verification;
use JFB_Modules\Jobs\Traits\Self_Execution_Job_Trait;
use JFB_Modules\Security;
use JFB_Modules\Verification\Events;
use JFB_Modules\Webhook\Db\Views\Token_By_Record_View;

class Verify_Manually extends Async_Job implements Self_Execution_Job_It {

	use Self_Execution_Job_Trait;

	public function __construct() {
		$this->set_hook( 'verification/verify' );
	}

	/**
	 * @param $record_id
	 *
	 * @throws Repository_Exception
	 */
	public function execute( $record_id ) {
		$this->set_args( array( $record_id ) );
		/** @var Jobs\Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );
		/** @var Webhook\Module $webhooks */
		$webhooks = jet_form_builder()->module( 'webhook' );

		try {
			$token_row = Token_By_Record_View::findOne(
				array(
					'record_id' => $record_id,
				)
			)->query()->query_one();
		} catch ( Query_Builder_Exception $exception ) {
			\ActionScheduler_Logger::instance()->log(
				$jobs->get_action_id(),
				/* translators: %d - id of the form record */
				sprintf( __( 'undefined webhook by record-ID: %d', 'jet-form-builder' ), $record_id )
			);

			return;
		}

		$webhooks->set_token_id( (int) $token_row['id'] );
		$webhooks->set_token( Security\Csrf\Csrf_Tools::generate() );
		$webhooks->set_check_hash( false );
		$webhooks->confirm();
	}


	/**
	 * @param Webhook\Module $webhooks
	 *
	 * @throws Repository_Exception
	 */
	protected function execute_actions( Webhook\Module $webhooks ) {
		global $wpdb;
		/** @var Verification\Module $verification */
		$verification = jet_form_builder()->module( 'verification' );
		/** @var Jobs\Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );

		try {
			$verification->do_verification( $webhooks );
		} catch ( Sql_Exception $exception ) {
			\ActionScheduler_Logger::instance()->log(
				$jobs->get_action_id(),
				sprintf(
				/* translators: %d - message from the exception */
					__( 'failed update from-record: %1$s, %2$s', 'jet-form-builder' ),
					$exception->getMessage(),
					$wpdb->last_error
				)
			);
		} catch ( Action_Exception $exception ) {
			\ActionScheduler_Logger::instance()->log(
				$jobs->get_action_id(),
				/* translators: %d - message from the exception */
				sprintf( __( 'failed actions execution: %s', 'jet-form-builder' ), $exception->getMessage() )
			);
		} catch ( Query_Builder_Exception $exception ) {
			\ActionScheduler_Logger::instance()->log(
				$jobs->get_action_id(),
				/* translators: %d - id of the form record */
				sprintf( __( 'undefined record by webhook-ID: %d', 'jet-form-builder' ), $webhooks->get_token_id() )
			);
		}
	}

	public function init_hooks() {
		add_action( $this->get_hook(), array( $this, 'execute' ) );
		add_action( 'jet-form-builder/webhook/verification', array( $this, 'execute_actions' ) );
	}

	public function remove_hooks() {
		remove_action( $this->get_hook(), array( $this, 'execute' ) );
		remove_action( 'jet-form-builder/webhook/verification', array( $this, 'execute_actions' ) );
	}
}

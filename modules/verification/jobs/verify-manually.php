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
use JFB_Modules\Jobs\Async_Job;
use JFB_Modules\Jobs\Interfaces\Self_Execution_Job_It;
use JFB_Modules\Jobs;
use JFB_Modules\Webhook;
use JFB_Modules\Verification;
use JFB_Modules\Jobs\Traits\Self_Execution_Job_Trait;
use JFB_Modules\Security;
use JFB_Modules\Verification\Events;
use JFB_Modules\Webhook\Form_Record\Db\Views\Token_By_Record_View;

class Verify_Manually extends Async_Job implements Self_Execution_Job_It {

	use Self_Execution_Job_Trait;

	private $real_user_id = 0;

	public function __construct() {
		$this->set_hook( 'verification/verify' );
	}

	public function init_hooks() {
		add_action( $this->get_hook(), array( $this, 'execute' ), 10, 2 );
	}

	public function remove_hooks() {
		remove_action( $this->get_hook(), array( $this, 'execute' ) );
	}

	/**
	 * @param $record_id
	 * @param $user_id
	 *
	 * @throws Repository_Exception
	 */
	public function execute( $record_id, $user_id ) {
		$this->set_args( array( $record_id ) );
		/** @var Jobs\Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );
		/** @var Webhook\Module $webhooks */
		$webhooks = jet_form_builder()->module( 'webhook' );
		/** @var Verification\Module $verification */
		$verification = jet_form_builder()->module( 'verification' );

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
				__( 'undefined webhook by record-ID', 'jet-form-builder' )
			);

			return;
		}

		/**
		 * Triggered by $webhooks->confirm();
		 *
		 * @see \JFB_Modules\Webhook\Module::confirm
		 */
		add_action( 'jet-form-builder/webhook/verification', array( $this, 'execute_actions' ) );

		// Disable base verification process
		remove_action( 'jet-form-builder/webhook/verification', array( $verification, 'on_verification' ) );

		$this->set_user( $user_id );

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
	public function execute_actions( Webhook\Module $webhooks ) {
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
		} finally {
			$this->reset_user();
		}
	}

	protected function set_user( $user_id ) {
		$this->set_real_user_id( get_current_user_id() );

		wp_set_current_user( $user_id );
	}

	protected function reset_user() {
		wp_set_current_user( $this->real_user_id );
	}

	/**
	 * @param int $real_user_id
	 */
	protected function set_real_user_id( int $real_user_id ) {
		$this->real_user_id = $real_user_id;
	}
}

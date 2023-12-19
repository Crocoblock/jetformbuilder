<?php


namespace JFB_Modules\Verification;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Actions\Types\Register_User;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Form_Record\Tools;
use JFB_Modules\Security\Csrf\Csrf_Tools;
use JFB_Modules\Verification\Actions\Verification;
use JFB_Modules\Verification\Events;
use JFB_Modules\Verification\Form_Record\Inner_Module;
use JFB_Modules\Verification\Jobs;
use JFB_Modules\Webhook;
use JFB_Modules\Verification\Rest_Api\Endpoints;

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;

	/**
	 * @var Inner_Module
	 */
	private $record;

	public function rep_item_id() {
		return 'verification';
	}

	public function condition(): bool {
		return true;
	}

	/**
	 * @throws Repository_Exception
	 */
	public function on_install() {
		$this->record = new Inner_Module();

		/** @var \JFB_Modules\Jobs\Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );
		$jobs->install( new Jobs\Verify_Manually() );

		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		$rest_api = jet_form_builder()->module( 'rest-api' );
		$rest_api->get_controller()->install( new Endpoints\Verify_Manually() );
	}

	/**
	 * @throws Repository_Exception
	 */
	public function on_uninstall() {
		unset( $this->record );

		/** @var \JFB_Modules\Jobs\Module $jobs */
		$jobs = jet_form_builder()->module( 'jobs' );
		$jobs->uninstall( new Jobs\Verify_Manually() );

		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		$rest_api = jet_form_builder()->module( 'rest-api' );
		$rest_api->get_controller()->uninstall( new Endpoints\Verify_Manually() );
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'jet-form-builder/actions/register', array( $this, 'actions_register' ) );
		/**
		 * It runs by `webhook` module
		 *
		 * @see \JFB_Modules\Webhook\Module::confirm
		 */
		add_action( 'jet-form-builder/webhook/verification', array( $this, 'on_verification' ) );
		add_action( 'jet-form-builder/before-do-action/register_user', array( $this, 'register_user_before' ), 10, 2 );

		add_filter( 'jet-form-builder/event-types', array( $this, 'events_register' ) );
		add_filter(
			'jet-form-builder/default-process-event/executors',
			array( $this, 'add_executor_to_default_process' )
		);

		$this->record->init_hooks();
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
		remove_action( 'jet-form-builder/actions/register', array( $this, 'actions_register' ) );
		remove_action( 'jet-form-builder/webhook/verification', array( $this, 'on_verification' ) );
		remove_action(
			'jet-form-builder/before-do-action/register_user',
			array( $this, 'register_user_before' )
		);
		remove_filter( 'jet-form-builder/event-types', array( $this, 'events_register' ) );
		remove_filter(
			'jet-form-builder/default-process-event/executors',
			array( $this, 'add_executor_to_default_process' )
		);

		$this->record->remove_hooks();
	}

	public function enqueue_editor_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function actions_register( Manager $manager ) {
		$manager->register_action_type( new Verification() );
	}

	public function events_register( array $types ): array {
		array_push(
			$types,
			new Events\Verification_Success\Event(),
			new Events\Verification_Failed\Event()
		);

		return $types;
	}

	public function add_executor_to_default_process( array $executors ): array {
		return array_merge(
			array(
				new Events\Default_Process\Executor(),
			),
			$executors
		);
	}

	/**
	 * Generate unique token, if it used
	 *
	 * @param Register_User $action
	 */
	public function register_user_before( Register_User $action ) {
		$fields_map = array_values( $action->settings['fields_map'] ?? array() );

		if (
			! in_array( Verification::TOKEN, $fields_map, true ) ||
			jet_fb_context()->has_field( Verification::TOKEN )
		) {
			return;
		}

		jet_fb_context()->set_field_type( 'text-field', Verification::TOKEN );
		jet_fb_context()->update_request( Csrf_Tools::generate(), Verification::TOKEN );
		jet_fb_context()->make_secure( Verification::TOKEN );
	}

	public function on_verification( Webhook\Module $module ) {
		try {
			$this->do_verification( $module );
		} catch ( Handler_Exception $exception ) {
			$module->redirect(
				$this->get_redirect_url(
					array(
						'status' => $exception->getMessage(),
					)
				)
			);
		}

		$module->redirect(
			$this->get_redirect_url(
				array(
					'status' => $module->is_verified() ? 'success' : 'failed',
				)
			)
		);
	}

	/**
	 * @param Webhook\Module $module
	 *
	 * @throws Action_Exception
	 * @throws Query_Builder_Exception
	 * @throws Sql_Exception
	 */
	public function do_verification( Webhook\Module $module ) {
		$record = Webhook\Db\Views\Record_By_Token_View::findOne(
			array(
				'token_id' => $module->get_token_id(),
			)
		)->query()->query_one();

		// setup actions
		jet_fb_action_handler()->set_form_id( $record['form_id'] );

		// setup referrer for redirect actions
		jet_fb_handler()->set_referrer( $record['referrer'] );

		// setup fields & request for them
		Tools::apply_context( $record );

		$record_id = $record['id'] ?? 0;

		jet_fb_context()->set_field_type( 'text-field', Verification::TOKEN );
		jet_fb_context()->update_request( $module->get_token(), Verification::TOKEN );
		jet_fb_context()->make_secure( Verification::TOKEN );

		try {
			jet_fb_events()->execute(
				$module->is_verified()
					? Events\Verification_Success\Event::class
					: Events\Verification_Failed\Event::class
			);
		} finally {
			Tools::update_record( $record_id );
		}
	}

	public function get_redirect_url( $args ): string {
		$redirect = jet_fb_action_handler()->response_data['redirect'] ?? '';

		if ( ! $redirect ) {
			$redirect = jet_fb_handler()->get_referrer();
		}

		return add_query_arg( $args, $redirect );
	}
}

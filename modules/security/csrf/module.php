<?php


namespace JFB_Modules\Security\Csrf;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Security\Exceptions\Spam_Exception;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_Dir_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	private $token;
	private $client;

	public function rep_item_id() {
		return 'csrf';
	}

	const SPAM_EXCEPTION = 'csrf_failed';
	public function __construct() {
		add_filter( 'jet-form-builder/security/spam-statuses', array( $this, 'add_spam_statuses' ) );
	}
	public function add_spam_statuses( $statuses ) {
		$statuses[] = self::SPAM_EXCEPTION;
		return $statuses;
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		add_filter( 'jet-form-builder/message-types', array( $this, 'handle_messages' ) );
		add_filter( 'jet-form-builder/after-start-form', array( $this, 'on_render_form' ) );
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		remove_filter( 'jet-form-builder/message-types', array( $this, 'handle_messages' ) );
		remove_filter( 'jet-form-builder/after-start-form', array( $this, 'on_render_form' ) );
	}

	public function on_render_form( string $html ): string {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return $html;
		}

		return ( $html . Csrf_Tools::get_field() );
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Spam_Exception
	 */
	public function handle_request( array $request ): array {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return $request;
		}

		$this->token  = $request[ Csrf_Tools::FIELD ] ?? false;
		$this->client = Csrf_Tools::client_id( jet_fb_live()->form_id );

		// delete all old tokens
		Csrf_Token_Model::clear();

		if ( ! Csrf_Tools::verify( $this->token, $this->client ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Spam_Exception( self::SPAM_EXCEPTION );
		}

		// delete verified token only on success
		add_action( 'jet-form-builder/form-handler/after-send', array( $this, 'handle_after_send' ) );

		return $request;
	}

	public function handle_after_send() {
		if ( ! jet_fb_handler()->is_success ) {
			return;
		}

		Csrf_Tools::delete( $this->token, $this->client );
	}

	public function handle_messages( array $messages ): array {
		$messages[ self::SPAM_EXCEPTION ] = array(
			'label' => __( 'CSRF token validation failed', 'jet-form-builder' ),
			'value' => __( 'Invalid token', 'jet-form-builder' ),
		);

		return $messages;
	}
}

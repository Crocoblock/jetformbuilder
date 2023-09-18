<?php


namespace JFB_Modules\Security;

use JFB_Modules\Logger;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Security\Exceptions\Spam_Exception;
use JFB_Modules\Security\Csrf;
use JFB_Modules\Security\Honeypot;
use JFB_Modules\Security\Wp_Nonce;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It,
	Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	private $spam_statuses = array();

	public function rep_item_id() {
		return 'security';
	}

	public function on_install() {
		$this->spam_statuses = apply_filters(
			'jet-form-builder/security/spam-statuses',
			array()
		);

		jet_form_builder()->get_modules()->install( new Csrf\Module() );
		jet_form_builder()->get_modules()->install( new Honeypot\Module() );
		jet_form_builder()->get_modules()->install( new Wp_Nonce\Module() );
	}

	public function on_uninstall() {
		$this->spam_statuses = array();

		jet_form_builder()->get_modules()->uninstall( new Csrf\Module() );
		jet_form_builder()->get_modules()->uninstall( new Honeypot\Module() );
		jet_form_builder()->get_modules()->uninstall( new Wp_Nonce\Module() );
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function has_spam(): bool {
		$status = jet_fb_handler()->response_args['status'] ?? '';

		return (
			in_array( $status, $this->spam_statuses, true ) ||
			Logger\Module::instance()->has_log( Spam_Exception::class )
		);
	}

	public static function get_hasher(): \PasswordHash {
		global $wp_hasher;

		if ( ! empty( $wp_hasher ) ) {
			return $wp_hasher;
		}

		require_once ABSPATH . WPINC . '/class-phpass.php';
		// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$wp_hasher = new \PasswordHash( 8, true );

		return $wp_hasher;
	}

}

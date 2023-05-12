<?php


namespace Jet_Form_Builder\Modules\Security;

use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;
use Jet_Form_Builder\Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Dir_It, Base_Module_After_Install_It, Base_Module_Handle_It {

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
			Logger::instance()->has_log( Spam_Exception::class )
		);
	}

}

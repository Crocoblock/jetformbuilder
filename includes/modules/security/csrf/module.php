<?php


namespace Jet_Form_Builder\Modules\Security\Csrf;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;


class Module implements Base_Module_After_Install_It, Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_Dir_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function on_install() {
	}

	public function rep_item_id() {
		return 'csrf';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}
}
<?php


namespace JFB_Modules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks;
use JFB_Components\Module\Module_Controller_It;
use JFB_Components\Module\Module_Controller_Trait;
use Jet_Form_Builder\Gateways\Gateway_Manager;

class Modules_Controller implements Module_Controller_It {

	use Module_Controller_Trait;

	public function rep_instances(): array {
		// backward compatibility
		require_once jet_form_builder()->plugin_dir( 'modules/gateways/legacy/gateway-manager.php' );

		return array(
			new Logger\Module(),
			new Dev\Module(),
			new Admin\Module(),
			new Block_Parsers\Module(),
			new Wp_Experiments\Module(),
			new Deprecated\Module(),
			new Rest_Api\Module(),
			new Blocks\Module(),
			new Block_Sanitizer\Module(),
			new Jet_Style\Module(),
			new Security\Module(),
			new Switch_Page_On_Change\Module(),
			new Form_Record\Module(),
			new Advanced_Choices\Module(),
			new Captcha\Module(),
			new Gateway_Manager(),
			new Active_Campaign\Module(),
		);
	}

}

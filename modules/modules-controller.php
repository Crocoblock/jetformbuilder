<?php


namespace JFB_Modules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks;
use JFB_Components\Module\Module_Controller_It;
use JFB_Components\Module\Module_Controller_Trait;

class Modules_Controller implements Module_Controller_It {

	use Module_Controller_Trait;

	public function rep_instances(): array {
		return array(
			new Logger\Module(),
			new Dev\Module(),
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
			new Gateways\Module(),
			new Active_Campaign\Module(),
		);
	}

}
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
			// core required modules
			new Jobs\Module(),
			new Jet_Plugins\Module(),
			new Logger\Module(),
			new Dev\Module(),
			new Admin\Module(),
			new Post_Type\Module(),
			new Bulk_Options\Module(),
			new Block_Parsers\Module(),
			new Webhook\Module(),
			new Rest_Api\Module(),
			new Option_Query\Module(),
			new Blocks\Module(),
			new Security\Module(),
			new Rich_Content\Module(),
			// additional
			new Shortcode\Module(),
			new Option_Field\Module(),
			new Wp_Experiments\Module(),
			new Deprecated\Module(),
			new Jet_Style\Module(),
			new Switch_Page_On_Change\Module(),
			new Form_Record\Module(),
			new Advanced_Choices\Module(),
			new Captcha\Module(),
			new Gateway_Manager(),
			new Active_Campaign\Module(),
			new Verification\Module(),
			new Sanitize_Value\Module(),
			new Onboarding\Module(),
			new Html_Parser\Module(),
			new Ai\Module(),
			new Validation\Module(),
			new Wysiwyg\Module(),
			new Switcher\Module(),
		);
	}

}

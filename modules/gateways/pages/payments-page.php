<?php


namespace JFB_Modules\Gateways\Pages;

use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\interfaces\Page_Script_Declaration_Interface;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Module;
use JFB_Modules\Gateways\Table_Views\Payments;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payments_Page extends Base_Page implements Page_Script_Declaration_Interface {

	use Gateways_Pages_Trait;

	const SLUG = 'jfb-payments';

	public function slug(): string {
		return self::SLUG;
	}

	public function title(): string {
		return __( 'Payments', 'jet-form-builder' );
	}

	public function page_config(): array {
		$view = new Payments();

		return $view->load_view();
	}

	public function assets() {
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}

	/**
	 * @throws Repository_Exception
	 */
	public function register_scripts() {
		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module       = jet_form_builder()->module( 'gateways' );
		$script_asset = require_once $module->get_dir(
			'assets/build/admin/pages/jfb-payments.asset.php'
		);

		wp_register_script(
			$this->slug(),
			$this->base_script_url(),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

}

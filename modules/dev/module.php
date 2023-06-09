<?php


namespace JFB_Modules\Dev;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Static_Instance_It;
use JFB_Components\Module\Base_Module_Static_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Module instance()
 *
 * Class Manager
 * @package Jet_Form_Builder\Dev_Mode
 */
final class Module implements Base_Module_It, Base_Module_Static_Instance_It {

	use Base_Module_Static_Instance_Trait;

	public static function get_instance_id(): string {
		return 'dev';
	}

	public function condition(): bool {
		$options = Tab_Handler_Manager::get_options( 'options-tab' );

		return (
			$options['enable_dev_mode'] ?? apply_filters( 'jet-form-builder/dev-mode/activate', false )
		);
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	/**
	 * @deprecated 3.1.0 use jet_form_builder()->has_module( 'dev' )
	 *
	 * @return bool
	 */
	public function active(): bool {
		return true;
	}
}

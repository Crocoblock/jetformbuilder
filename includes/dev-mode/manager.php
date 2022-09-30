<?php


namespace Jet_Form_Builder\Dev_Mode;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;

/**
 * @method static Manager instance()
 *
 * Class Manager
 * @package Jet_Form_Builder\Dev_Mode
 */
class Manager {

	use Instance_Trait;

	private $is_active;

	private function __construct() {
		$options_tab = Tab_Handler_Manager::instance()->tab( 'options-tab' );

		$options_tab->save_global_options();
		$options = $options_tab->get_global_options();

		$this->is_active = apply_filters( 'jet-form-builder/dev-mode/activate', false );

		if ( isset( $options['enable_dev_mode'] ) ) {
			$this->is_active = $options['enable_dev_mode'];
		}
	}

	public function active(): bool {
		return $this->is_active;
	}


}

<?php

namespace JFB_Modules\Actions_V2\Mailchimp;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Modules\Actions_V2\Interfaces\Action_Integration_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Rest_Api\Mailchimp\Mailchimp_Route;
use JFB_Modules\Actions_V2\Traits\Action_Integration_Trait;

final class Mailchimp implements Action_Integration_Interface {

	use Action_Integration_Trait;

	public function rep_item_id() {
		return 'mailchimp';
	}

	public function on_install() {
		// install tab handler for Settings page
		Tab_Handler_Manager::instance()->install( new Mailchimp_Tab_Handler() );
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'editor_assets' )
		);
		add_action(
			'rest_api_init',
			array( $this, 'rest_api_init' )
		);
	}

	public function register_actions( Manager $manager ) {
		$manager->register_action_type( new Mailchimp_Action() );
	}

	public function editor_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		array_push(
			$script_asset['dependencies'],
			'jet-fb-components',
			'jet-fb-data',
			'jet-fb-actions-v2',
			'jet-fb-blocks-v2-to-actions-v2'
		);

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function rest_api_init() {
		$mailchimp = new Mailchimp_Route();
		$mailchimp->register();

		register_setting(
			trim( Base_Handler::PREFIX, '_' ),
			Base_Handler::PREFIX . 'mailchimp-tab',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'default'      => '{}',
			)
		);
	}
}

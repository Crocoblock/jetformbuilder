<?php

namespace JFB_Modules\Actions_V2\Call_Webhook;

use Jet_Form_Builder\Actions\Manager;
use JFB_Modules\Actions_V2\Interfaces\Action_Integration_Interface;
use JFB_Modules\Actions_V2\Traits\Action_Integration_Trait;

class Call_Webhook implements Action_Integration_Interface {

	use Action_Integration_Trait;

	public function rep_item_id() {
		return 'call-webhook';
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'editor_assets' )
		);
	}

	public function on_install() {
		// TODO: Implement on_install() method.
	}

	public function register_actions( Manager $manager ) {
		$manager->register_action_type( new Call_Webhook_Action() );
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
}

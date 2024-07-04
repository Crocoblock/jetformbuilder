<?php

namespace JFB_Modules\Actions_V2;

use Jet_Form_Builder\Actions\Manager;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Actions_V2\Interfaces\Action_Integration_Interface;

final class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It,
	Repository_Pattern_Interface {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;
	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'actions-v2';
	}

	public function rep_instances(): array {
		return array(
			new Send_Email\Send_Email(),
			new Insert_Post\Insert_Post(),
			new Register_User\Register_User(),
			new Update_User\Update_User(),
			new Redirect_To_Page\Redirect_To_Page(),
			new Call_Hook\Call_Hook(),
			new Call_Webhook\Call_Webhook(),
			new Mailchimp\Mailchimp(),
			new Get_Response\Get_Response(),
		);
	}

	public function on_install() {
		$this->rep_install();

		/** @var Action_Integration_Interface $integration_item */
		foreach ( $this->rep_generate_items() as $integration_item ) {
			$integration_item->on_install();
		}
	}

	public function on_uninstall() {
		$this->rep_clear();
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/actions/register', array( $this, 'register_actions' ) );

		add_action(
			'enqueue_block_editor_assets',
			array( $this, 'register_assets' ),
			-9
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_assets' ),
			-9
		);

		/** @var Action_Integration_Interface $integration_item */
		foreach ( $this->rep_generate_items() as $integration_item ) {
			$integration_item->init_hooks();
		}
	}


	public function remove_hooks() {
		remove_action( 'jet-form-builder/actions/register', array( $this, 'register_actions' ) );

		remove_action(
			'enqueue_block_editor_assets',
			array( $this, 'register_assets' ),
			-9
		);
		remove_action(
			'wp_enqueue_scripts',
			array( $this, 'register_assets' ),
			-9
		);
	}


	public function register_actions( Manager $manager ) {
		/** @var Action_Integration_Interface $integration_item */
		foreach ( $this->rep_generate_items() as $integration_item ) {
			$integration_item->register_actions( $manager );
		}
	}

	public function register_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			'jet-fb-components',
			'jet-fb-data'
		);

		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}
}

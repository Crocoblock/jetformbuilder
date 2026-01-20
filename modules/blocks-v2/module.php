<?php

namespace JFB_Modules\Blocks_V2;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

final class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	/**
	 * @var Actions_Integration\Actions_Integration
	 */
	private $action_integration;

	public function rep_item_id() {
		return 'blocks-v2';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->action_integration = new Actions_Integration\Actions_Integration();
	}

	public function on_uninstall() {
		unset( $this->action_integration );
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );

		$this->action_integration->init_hooks();
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
	}

	public function add_blocks_types( array $block_types ): array {
		array_push(
			$block_types,
			new Text_Field\Block_Type(),
			new Repeater_Field\Block_Type_Row(),
			new Repeater_Field\Block_Type(),
			new Phone_Field\Block_Type()
		);

		return $block_types;
	}

	public function get_action_integration() {
		return $this->action_integration;
	}

	public function set_action_integration( $action_integration ) {
		$this->action_integration = $action_integration;
	}
}

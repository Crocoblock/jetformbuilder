<?php


namespace Jet_Form_Builder\Modules\Switch_Page_On_Change;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	const SUPPORT_NAME   = 'jetFBSwitchPageOnChange';
	const ATTRIBUTE_NAME = 'switch_on_change';

	public function rep_item_id() {
		return 'switch-page-on-change';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		\WP_Block_Supports::get_instance()->register(
			self::SUPPORT_NAME,
			array(
				'register_attribute' => array( $this, 'register_support' ),
				'apply'              => array( $this, 'apply_support' ),
			)
		);
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function register_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_NAME ) ) &&
			! array_key_exists( self::ATTRIBUTE_NAME, $block_type->attributes )
		) {
			$block_type->attributes[ self::ATTRIBUTE_NAME ] = array(
				'type'    => 'boolean',
				'default' => false,
			);
		}
	}

	public function apply_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		$support_config = Array_Tools::get( $block_type->supports, array( self::SUPPORT_NAME ), false );
		$value          = $block_attributes[ self::ATTRIBUTE_NAME ] ?? array();

		if (
			! is_array( $support_config ) ||
			empty( $value )
		) {
			return array();
		}
		// todo

		return array();
	}
}

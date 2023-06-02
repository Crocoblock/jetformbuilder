<?php


namespace JFB_Modules\Wp_Experiments;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use JFB_Components\Module\Base_Module_It;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Wp_Experiments
 * @package JFB_Modules\Wp_Experiments
 */
class Module implements Base_Module_It {

	const SUPPORT_CUSTOM_LAYOUT = 'jetCustomWrapperLayout';

	public function rep_item_id() {
		return 'wp-experiments';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'block_type_metadata',
			array( $this, 'disable_layout_support' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'block_type_metadata',
			array( $this, 'disable_layout_support' )
		);
	}

	public function disable_layout_support( array $metadata ): array {
		if (
			! Block_Helper::is_field( $metadata['name'] ) ||
			! is_array( $metadata['supports'] ) ||
			! Array_Tools::get( $metadata['supports'], array( self::SUPPORT_CUSTOM_LAYOUT ), false )
		) {
			return $metadata;
		}

		$metadata['supports'][ self::SUPPORT_CUSTOM_LAYOUT ] = $metadata['supports']['__experimentalLayout'];
		unset( $metadata['supports']['__experimentalLayout'] );

		return $metadata;
	}

	public function enable_native_layout() {
		$block_type = Block_Helper::current_block_type();

		if ( ! $block_type ) {
			return;
		}

		$block_type->supports['__experimentalLayout'] = $block_type->supports[ self::SUPPORT_CUSTOM_LAYOUT ];
		unset( $block_type->supports[ self::SUPPORT_CUSTOM_LAYOUT ] );
	}

	public function remove_native_layout() {
		$block_type = Block_Helper::current_block_type();

		if ( ! $block_type ) {
			return;
		}

		$block_type->supports[ self::SUPPORT_CUSTOM_LAYOUT ] = $block_type->supports['__experimentalLayout'];
		unset( $block_type->supports['__experimentalLayout'] );
	}
}

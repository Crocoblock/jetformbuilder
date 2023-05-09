<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Wp_Experiments
 * @package Jet_Form_Builder\Compatibility\Wp_Experiments
 */
class Wp_Experiments {

	const SUPPORT_CUSTOM_LAYOUT = 'jetCustomWrapperLayout';

	public function __construct() {
		add_filter(
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

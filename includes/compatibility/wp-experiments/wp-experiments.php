<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;

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

	const SUPPORT_STYLE         = 'jetStyle';
	const SUPPORT_CUSTOM_LAYOUT = 'jetCustomWrapperLayout';

	public function __construct() {
		add_filter(
			'block_type_metadata',
			array( $this, 'disable_layout_support' )
		);

		\WP_Block_Supports::get_instance()->register(
			'jetStyle',
			array(
				'register_attribute' => array( $this, 'register_jet_style_support' ),
				'apply'              => array( $this, 'apply_jet_style_support' ),
			)
		);
	}


	public function register_jet_style_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_STYLE ) ) &&
			! array_key_exists( 'style', $block_type->attributes )
		) {
			$block_type->attributes['style'] = array(
				'type' => 'object',
			);
		}
	}

	public function apply_jet_style_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		$support_config = _wp_array_get( $block_type->supports, array( self::SUPPORT_STYLE ), false );
		$root_styles    = $block_attributes['style'] ?? array();

		if (
			! is_array( $support_config ) ||
			empty( $root_styles )
		) {
			return array();
		}

		$declarations = new \WP_Style_Engine_CSS_Declarations();

		foreach ( $support_config as $css_var => $path_items ) {
			foreach ( $path_items as $path_item ) {
				if ( ! isset( \WP_Style_Engine::BLOCK_STYLE_DEFINITIONS_METADATA[ $path_item ] ) ) {
					continue;
				}

				$declarations->add_declaration(
					$css_var,
					_wp_array_get( $root_styles, $path_items, '' )
				);
				break;
			}
		}

		return array(
			'style' => $declarations->get_declarations_string(),
		);
	}

	public function disable_layout_support( array $metadata ): array {
		if (
			! Block_Helper::is_field( $metadata['name'] ) ||
			! is_array( $metadata['supports'] ) ||
			! _wp_array_get( $metadata['supports'], array( self::SUPPORT_CUSTOM_LAYOUT ), false )
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

		unset( $block_type->supports['__experimentalLayout'] );
	}

}

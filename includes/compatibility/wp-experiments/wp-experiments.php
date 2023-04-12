<?php


namespace Jet_Form_Builder\Compatibility\Wp_Experiments;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Choices_Field;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wp_Experiments {

	const STYLE_SUPPORT = 'jetStyle';

	public function __construct() {
		add_filter(
			'render_block_jet-forms/choices-field',
			array( $this, 'render_choice_with_layout' ),
			10,
			2
		);

		\WP_Block_Supports::get_instance()->register(
			'jetStyle',
			array(
				'register_attribute' => array( $this, 'register_jet_style_support' ),
				'apply'              => array( $this, 'apply_jet_style_support' ),
			)
		);
	}

	/**
	 * @param string $block_content The block content.
	 * @param array $block The full block, including name and attributes.
	 */
	public function render_choice_with_layout( string $block_content, array $block ): string {
		/** @var Choices_Field $choice */
		$choice = jet_form_builder()->blocks->get_field_by_name( 'choices-field' );

		$choice->set_block_data( $block['attrs'] ?? array() );

		$template = array(
			$choice->start_form_row( true ),
			$block_content,
			$choice->end_form_row( true ),
		);

		return implode( "\r\n", $template );
	}

	public function register_jet_style_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::STYLE_SUPPORT ) ) &&
			! array_key_exists( 'style', $block_type->attributes )
		) {
			$block_type->attributes['style'] = array(
				'type' => 'object',
			);
		}
	}

	public function apply_jet_style_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		$support_config = _wp_array_get( $block_type->supports, array( self::STYLE_SUPPORT ), false );
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

}

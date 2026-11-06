<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Types\Conditional_Block;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

use Jet_Form_Builder\Blocks\Render\Base as RenderBase;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Dynamic_Value {

	const HANDLE = 'jet-fb-dynamic-value';

	public function __construct() {
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_dynamic_value_block' )
		);
		add_filter(
			'jet-form-builder/render/hidden-field',
			array( $this, 'on_render_hidden_field' ),
			10,
			2
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
		add_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/build/frontend/dynamic.value.js' ),
			array(
				Conditional_Block::HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_dynamic_value_block( Base $block ) {
		$groups = $this->get_groups_json( $block );

		if ( ! $groups ) {
			return;
		}

		$block->add_attribute( 'data-value', Tools::esc_attr( $groups ) );
	}

	public function on_render_hidden_field( array $args, RenderBase $block ): array {
		$groups = $this->get_groups_json( $block->block_type );

		if ( ! $groups ) {
			return $args;
		}

		$block->add_attribute( 'data-dynamic-value', Tools::esc_attr( $groups ) );

		return $args;
	}

	protected function get_groups_json( Base $block ): string {
		$groups = $block->block_attrs['value']['groups'] ?? array();

		if ( ! count( $groups ) ) {
			return '';
		}

		wp_enqueue_script( self::HANDLE );

		// A value from a preset must not bring a shortcode into the attribute;
		// shortcodes the author wrote in other values keep working.
		$tokens = Tools::json_bracket_tokens();

		foreach ( $groups as &$group ) {
			// Groups come from the block's own attributes (admin-authored), but a
			// dynamic preset replaces the value with data from its source (post
			// or user meta, query var...), which visitors can write. The browser
			// runs "to_set" and condition values as formulas, so a value that
			// came from a preset is marked to be used as plain data.
			$to_set          = $group['to_set'] ?? '';
			$group['to_set'] = jet_fb_parse_dynamic_trusted( $to_set );

			if ( $group['to_set'] !== $to_set ) {
				$group['to_set']             = Tools::mark_json_brackets(
					$this->preset_number_to_string( $group['to_set'] ),
					$tokens
				);
				$group['to_set_from_preset'] = true;
			}

			if ( ! isset( $group['conditions'] ) || ! is_array( $group['conditions'] ) ) {
				continue;
			}

			foreach ( $group['conditions'] as &$condition ) {
				$value              = $condition['value'] ?? '';
				$condition['value'] = jet_fb_parse_dynamic_trusted( $value );

				// Same flag as Condition_Field_Item: the value is not a formula.
				if ( $condition['value'] !== $value ) {
					$condition['value']      = Tools::mark_json_brackets(
						$this->preset_number_to_string( $condition['value'] ),
						$tokens
					);
					$condition['use_preset'] = true;
				}
			}
			unset( $condition );
		}
		unset( $group );

		return Tools::encode_json_marked( $groups, $tokens );
	}

	/**
	 * A preset can return a number or a list of numbers (user, post or term
	 * IDs). Field values and condition values are compared as strings in the
	 * browser, so numbers - also inside a list - are sent as strings. The
	 * shape of the value and other items are kept.
	 *
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	private function preset_number_to_string( $value ) {
		if ( is_array( $value ) ) {
			return array_map( array( $this, 'preset_number_to_string' ), $value );
		}

		return ( is_int( $value ) || is_float( $value ) ) ? (string) $value : $value;
	}

}

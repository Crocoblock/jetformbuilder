<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Types\Conditional_Block;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

use \Jet_Form_Builder\Blocks\Render\Base as RenderBase;

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
			Plugin::instance()->plugin_url( 'assets/js/frontend/dynamic.value{min}.js' ),
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

		foreach ( $groups as &$group ) {
			$group['to_set'] = jet_fb_parse_dynamic( $group['to_set'] ?? '' );

			if ( ! isset( $group['conditions'] ) ) {
				continue;
			}

			foreach ( $group['conditions'] as &$condition ) {
				$condition['value'] = jet_fb_parse_dynamic( $condition['value'] ?? '' );
			}
		}

		return Tools::encode_json( $groups );
	}

}

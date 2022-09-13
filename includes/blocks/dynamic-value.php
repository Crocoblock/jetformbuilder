<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Types\Conditional_Block;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;


class Dynamic_Value {

	const HANDLE = 'jet-fb-dynamic-value';

	public function __construct() {
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_dynamic_value_block' )
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/dynamic.value{min}.js' ),
			array(
				Conditional_Block::HANDLE,
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_dynamic_value_block( Base $block ) {
		$groups = $block->block_attrs['value']['groups'] ?? array();

		if ( ! count( $groups ) ) {
			return;
		}

		wp_enqueue_script( self::HANDLE );

		foreach ( $groups as &$group ) {
			$group['to_set'] = jet_fb_parse_dynamic( $group['to_set'] ?? '' );
		}

		$block->add_attribute( 'data-value', Tools::encode_json( $groups ) );
	}

}
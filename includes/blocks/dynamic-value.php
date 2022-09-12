<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Classes\Tools;


class Dynamic_Value {

	const HANDLE = 'jet-fb-dynamic-value';

	public function __construct() {
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_dynamic_value_block' )
		);
	}

	public function add_dynamic_value_block( Base $block ) {
		$groups = $block->block_attrs['value']['groups'] ?? array();

		if ( ! count( $groups ) ) {
			return;
		}

		foreach ( $groups as &$group ) {
			$group['to_set'] = jet_fb_parse_dynamic( $group['to_set'] ?? '' );
		}

		$block->add_attribute( 'data-value', Tools::encode_json( $groups ) );
	}

}
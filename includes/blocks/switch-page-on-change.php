<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Switch_Page_On_Change {

	public function __construct() {
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_switch_page_attr' )
		);
	}

	public function add_switch_page_attr( Base $block ) {
		if ( ! array_key_exists( 'switch_on_change', $block->attrs ) ) {
			return;
		}
		$block->add_attribute( 'data-switch-page', (string) $block->block_attrs['switch_on_change'] );
	}

}
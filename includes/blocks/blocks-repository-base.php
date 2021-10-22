<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Classes\Repository_Pattern_Trait;

abstract class Blocks_Repository_Base {

	use Repository_Pattern_Trait;

	public function rep_before_install_item( $block_type ) {
		/** @var Types\Base $block_type */

		$block_type->register_block_type();
	}

}
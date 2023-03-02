<?php


namespace Jet_Form_Builder\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Blocks_Repository extends Blocks_Repository_Base {

	public function rep_instances(): array {
		return array(
			new Types\Form(),
		);
	}

}

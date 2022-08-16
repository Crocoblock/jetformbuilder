<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Blocks_Repository_Base {

	use Repository_Pattern_Trait;

	/**
	 * @param $block_type
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $block_type ) {
		/** @var Types\Base $block_type */

		// throw exception & exclude from repository if block is not supported
		if ( ! $block_type->is_supported() ) {
			$this->_rep_abort_this();
		}
	}

	/**
	 * @param $block_type
	 */
	public function rep_after_install_item( $block_type ) {
		/** @var Types\Base $block_type */

		$block_type->register_block_type();
	}

}

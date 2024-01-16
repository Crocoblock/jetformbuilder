<?php

namespace JFB_Modules\Option_Field\Blocks\Select;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Block_Type $block_type
 *
 * Class Select_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Block_Render extends Base {

	public function get_name() {
		return 'select-field';
	}

	protected function set_checked_option( array &$option ) {
		$this->block_type->is_multiple()
			? $this->modify_option_from_array( $option )
			: $this->modify_option_from_single( $option );
	}

	protected function modify_option_from_array( array &$option ) {
		$value = $this->args['default'];

		if ( ! is_array( $value ) ) {
			return;
		}

		if ( in_array( (string) $option['value'], $value, true ) ) {
			$option['selected'] = true;
		}
	}

	protected function modify_option_from_single( array &$option ) {
		if ( (string) $option['value'] === (string) $this->args['default'] ) {
			$option['selected'] = true;
		}
	}

}

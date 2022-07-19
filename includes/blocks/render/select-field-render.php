<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Select_Field;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Select_Field $block_type
 *
 * Class Select_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Select_Field_Render extends Base_Select_Radio_Check {

	public function __construct( $block_type ) {
		parent::__construct( $block_type );

		$this->set_options();
	}

	public function get_name() {
		return 'select-field';
	}

}

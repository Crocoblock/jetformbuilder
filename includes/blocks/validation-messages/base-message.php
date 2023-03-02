<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Message implements Arrayable {

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	abstract public function get_initial(): string;

	public function to_array(): array {
		return array(
			'id'        => $this->get_id(),
			'label'     => $this->get_label(),
			'initial'   => $this->get_initial(),
			'macros'    => $this->get_macros(),
			'supported' => Block_Helper::get_block_names( $this->supported_blocks() ),
		);
	}

	public function get_macros(): array {
		return array();
	}

	public function supported_blocks(): array {
		return array();
	}


}
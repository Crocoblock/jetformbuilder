<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Advanced_Rule implements Arrayable {

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	public function get_control_label(): string {
		return __( 'Symbols', 'jet-form-builder' );
	}

	public function to_array(): array {
		return array(
			'value'         => $this->get_id(),
			'label'         => $this->get_label(),
			'control_label' => $this->get_control_label(),
		);
	}

}
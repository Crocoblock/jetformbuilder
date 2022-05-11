<?php


namespace Jet_Form_Builder\Actions\Events;

abstract class Base_Gateway_Event extends Base_Event {

	abstract public function get_gateway(): string;

	abstract public function get_scenario(): string;

	public function to_array(): array {
		return parent::to_array() + array(
			'gateway'  => $this->get_gateway(),
			'scenario' => $this->get_scenario(),
		);
	}

}

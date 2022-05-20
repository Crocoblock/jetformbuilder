<?php


namespace Jet_Form_Builder\Actions\Events;


abstract class  Base_Action_Event extends Base_Event {

	abstract public function get_related_action(): string;

	protected function get_unsupported_actions(): array {
		return parent::get_unsupported_actions() + array(
			$this->get_related_action(),
		);
	}

}
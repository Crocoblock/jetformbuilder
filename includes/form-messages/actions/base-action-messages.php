<?php


namespace Jet_Form_Builder\Form_Messages\Actions;

use Jet_Form_Builder\Actions\Types\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Action_Messages {

	private $messages;

	public function __construct() {
		$this->messages = $this->messages();
	}

	abstract protected function messages(): array;

	abstract public function is_supported( Base $action ): bool;

	public function get_messages(): array {
		return $this->messages;
	}


}

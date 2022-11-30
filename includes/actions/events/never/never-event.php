<?php


namespace Jet_Form_Builder\Actions\Events\Never;


use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;

class Never_Event extends Base_Event {

	public function get_id(): string {
		return 'never';
	}

	public function executors(): array {
		return array();
	}

	/**
	 * @return array
	 * @throws Array_Continue_Exception
	 */
	public function to_array(): array {
		throw new Array_Continue_Exception( 'This is hidden event' );
	}
}
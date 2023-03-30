<?php


namespace Jet_Form_Builder\Actions\Events\Never;

use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Never_Event extends Base_Event {

	public function get_id(): string {
		return 'never';
	}

	public function executors(): array {
		return array();
	}

	public function execute() {
	}

	/**
	 * @return array
	 * @throws Array_Continue_Exception
	 */
	public function to_array(): array {
		throw new Array_Continue_Exception( 'This is hidden event' );
	}
}

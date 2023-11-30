<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Number_Field;
use Jet_Form_Builder\Blocks\Types\Range_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Number_Min extends Base_Message {

	public function get_id(): string {
		return 'number_min';
	}

	public function get_label(): string {
		return __( 'Value does not reach the minimum', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Number_Field::class,
			Range_Field::class,
		);
	}

	public function get_initial(): string {
		return __(
			'Please enter a number at least %this(min)%. Current value %this|ifEmpty(is empty)%.',
			'jet-form-builder'
		);
	}


}

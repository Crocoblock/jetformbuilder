<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


use Jet_Form_Builder\Blocks\Types\Date_Field;
use Jet_Form_Builder\Blocks\Types\Datetime_Field;
use Jet_Form_Builder\Blocks\Types\Time_Field;

class Is_Date_Min extends Base_Message {

	public function get_id(): string {
		return 'date_min';
	}

	public function get_label(): string {
		return __( 'Timestamp is too early', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Date_Field::class,
			Datetime_Field::class,
			Time_Field::class,
		);
	}

	public function get_initial(): string {
		return __( 'Timestamp is too early', 'jet-form-builder' );
	}
}
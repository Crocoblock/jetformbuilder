<?php


namespace JFB_Modules\Validation\Messages;

use Jet_Form_Builder\Blocks\Types\Date_Field;
use Jet_Form_Builder\Blocks\Types\Datetime_Field;
use Jet_Form_Builder\Blocks\Types\Time_Field;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Date_Max extends Base_Message {

	public function get_id(): string {
		return 'date_max';
	}

	public function supported_blocks(): array {
		return array(
			Date_Field::class,
			Datetime_Field::class,
			Time_Field::class,
		);
	}

	public function get_label(): string {
		return __( 'Timestamp is too late', 'jet-form-builder' );
	}

	public function get_initial(): string {
		return __( 'Timestamp exceeds the maximum allowed value.', 'jet-form-builder' );
	}
}

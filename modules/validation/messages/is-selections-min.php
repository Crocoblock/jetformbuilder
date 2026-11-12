<?php

namespace JFB_Modules\Validation\Messages;

use JFB_Modules\Option_Field\Blocks\Checkbox\Block_Type as Checkbox_Field;
use JFB_Modules\Option_Field\Blocks\Select\Block_Type as Select_Field;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Selections_Min extends Base_Message {

	public function get_id(): string {
		return 'min_selections';
	}

	public function get_label(): string {
		return __( 'Too few selected options', 'jet-form-builder' );
	}

	public function supported_blocks(): array {
		return array(
			Checkbox_Field::class,
			Select_Field::class,
			// Resolve the same block name for both Advanced Choices and its WP 6.1 placeholder.
			'choices-field',
		);
	}

	public function get_initial(): string {
		return __( 'Minimum number of selected options: %this(min_selections)%.', 'jet-form-builder' );
	}
}

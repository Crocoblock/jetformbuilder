<?php


namespace Jet_Form_Builder\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Builder_Blocks_Repository extends Blocks_Repository_Base {

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/blocks/items',
			array(
				new Types\Hidden_Field(),
				new Types\Number_Field(),
				new Types\Date_Field(),
				new Types\Time_Field(),
				new Types\Calculated_Field(),
				new Types\Media_Field(),
				new Types\Range_Field(),
				new Types\Heading_Field(),
				new Types\Textarea_Field(),
				new Types\Action_Button(),
				new Types\Form_Break_Field(),
				new Types\Group_Break_Field(),
				new Types\Conditional_Block(),
				new Types\Datetime_Field(),
				new Types\Color_Picker_Field(),
				new Types\Progress_Bar(),
				new Types\Form_Break_Start(),
			)
		);
	}

}

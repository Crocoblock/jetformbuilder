<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

class Function_Set_Value extends Base_Function {

	public function get_id(): string {
		return 'set_value';
	}

	public function get_title(): string {
		return __( 'Set value for this field if...', 'jet-form-builder' );
	}

	public function to_response( Condition_Item $item ): array {
		$json      = $item->base['set_value'] ?? '';
		$set_value = ( new Dynamic_Preset() )->parse_json( $json );

		return parent::to_response( $item ) + array(
			'set_value' => $set_value,
		);
	}

}
<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types;


use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Render_State;

class Condition_Render_State_Item extends Base_Condition_Type {

	protected $render_state;

	public function is_supported( array $condition ): bool {
		return Operator_Render_State::SELF === ( $condition['operator'] ?? '' );
	}

	public function init( array $condition ) {
		parent::init( $condition );

		$this->render_state = $this->base['render_state'] ?? array();
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'render_state' => $this->render_state,
			)
		);
	}

}
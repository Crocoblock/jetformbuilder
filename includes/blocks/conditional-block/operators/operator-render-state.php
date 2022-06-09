<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;

class Operator_Render_State extends Base_Operator {

	/**
	 * @return string
	 */
	public function get_id(): string {
		return 'render_state';
	}

	/**
	 * @return string
	 */
	public function get_title(): string {
		return __( 'Is render state', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return true;
	}

	/**
	 * @param Condition_Item $item
	 *
	 * @return bool
	 */
	protected function check( Condition_Item $item ): bool {
		$render_states = $item->base['render_state'] ?? array();

		return Render_State::instance()->get_current()->intersect( $render_states );
	}
}
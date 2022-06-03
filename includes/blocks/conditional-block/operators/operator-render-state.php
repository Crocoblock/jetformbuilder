<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Hide;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

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

	/**
	 * @param Condition_Item $item
	 *
	 * @return bool
	 * @throws Condition_Exception
	 */
	protected function check( Condition_Item $item ): bool {
		if ( Function_Hide::ID === $item->get_type() ) {
			throw new Condition_Exception( 'Because I can.' );
		}

		return true;
	}
}
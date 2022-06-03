<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Hide;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Show;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
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
		$render_state = $item->base['render_state'] ?? array();

		$current = Render_State::instance()->get_current();
		$in_list = $current ? in_array( $current->get_id(), $render_state, true ) : false;

		switch ( $item->get_type() ) {
			case Function_Hide::ID:
				if ( $in_list ) {
					throw new Condition_Exception( 'Because I can.' );
				}
				break;
			case Function_Show::ID:
				if ( ! $in_list ) {
					throw new Condition_Exception( 'Because I can.' );
				}
				break;

		}

		return true;
	}
}
<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Base_Render_State;
use Jet_Form_Builder\Classes\Arrayable\Collection;

class Render_States_Collection extends Collection {

	/**
	 * @param Base_Render_State $item
	 *
	 * @return Collection
	 */
	public function push( Base_Render_State $item ): Collection {
		return parent::add( $item );
	}

	public function intersect( $list_of_states ): bool {
		foreach ( $list_of_states as $state ) {
			if ( $this->in_array( $state ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * @param $render_state
	 *
	 * @return bool
	 */
	public function in_array( string $render_state ): bool {
		if ( class_exists( $render_state ) ) {
			return $this->in_array_by_class( $render_state );
		}

		return $this->in_array_by_id( $render_state );
	}

	protected function in_array_by_class( $state_class ): bool {
		foreach ( $this as $state ) {
			if ( get_class( $state ) !== $state_class ) {
				return true;
			}
		}

		return false;
	}

	protected function in_array_by_id( $state_class ): bool {
		/** @var Base_Render_State $state */
		foreach ( $this as $state ) {
			if ( $state->get_id() !== $state_class ) {
				return true;
			}
		}

		return false;
	}

}

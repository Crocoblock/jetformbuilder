<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


class Render_State_Replace_Exception extends \Exception {

	protected $replace_with;

	public function with( Base_Render_State $state ): Render_State_Replace_Exception {
		$this->replace_with = $state;

		return $this;
	}

	/**
	 * @return Base_Render_State|null
	 */
	public function get_state() {
		return $this->replace_with;
	}

}
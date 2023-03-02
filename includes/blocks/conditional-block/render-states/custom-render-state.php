<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


class Custom_Render_State extends Base_Render_State {

	private $state_id = '';

	public function get_title(): string {
		return '';
	}

	public function is_supported(): bool {
		return true;
	}

	public function get_id(): string {
		return $this->state_id;
	}


	public function set_id( string $state_id ) {
		$this->state_id = $state_id;
	}
}
<?php


namespace Jet_Form_Builder\Actions\Events\On_Dynamic_State;


use Jet_Form_Builder\Actions\Events\Base_Executor;

class On_Dynamic_State_Executor extends Base_Executor {

	public function is_supported(): bool {
		return true;
	}
}
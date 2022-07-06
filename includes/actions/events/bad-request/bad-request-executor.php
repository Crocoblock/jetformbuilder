<?php


namespace Jet_Form_Builder\Actions\Events\Bad_Request;


use Jet_Form_Builder\Actions\Events\Base_Executor;

class Bad_Request_Executor extends Base_Executor {
	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}


}
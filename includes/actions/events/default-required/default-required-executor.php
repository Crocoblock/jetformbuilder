<?php


namespace Jet_Form_Builder\Actions\Events\Default_Required;


use Jet_Form_Builder\Actions\Events\Base_Executor;

class Default_Required_Executor extends Base_Executor {

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}


}
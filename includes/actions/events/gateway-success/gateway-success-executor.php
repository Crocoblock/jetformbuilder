<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Success;


use Jet_Form_Builder\Actions\Events\Gateway_Base_Executor;

class Gateway_Success_Executor extends Gateway_Base_Executor {

	public function get_gateway_type(): string {
		return 'success';
	}

}
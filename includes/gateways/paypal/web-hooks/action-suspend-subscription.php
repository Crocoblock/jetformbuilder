<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Gateways\Paypal\Actions;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Base\Change_Status_Subscription;

class Action_Suspend_Subscription extends Change_Status_Subscription {

	public static function get_rest_static_base(): string {
		return 'action-subscription/suspend/';
	}

	public function get_action_instance(): Actions\Base_Action {
		return new Actions\Suspend_Subscription_Action();
	}

	public function success_message(): string {
		return __( 'Successfully suspended subscription!', 'jet-form-builder' );
	}
}
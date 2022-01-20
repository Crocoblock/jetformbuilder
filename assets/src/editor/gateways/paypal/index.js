import PaypalMain from './main';
import PayNowScenario from './pay-now-scenario';

const {
		  registerGateway,
	  } = JetFBActions;

const {
		  addFilter,
	  } = wp.hooks;

const gatewayID = 'paypal';

registerGateway(
	gatewayID,
	PaypalMain,
);

registerGateway(
	gatewayID,
	PayNowScenario,
	'PAY_NOW',
);

addFilter( 'jet.fb.gateways.getDisabledStateButton', 'jet-form-builder', ( isDisabled, props ) => {
	return gatewayID === props?._jf_gateways?.gateway ? false : isDisabled;
} );

import PaypalMain from './paypal/main';
import PayNowScenario from './paypal/pay-now-scenario';
import gatewayPlugin from './plugin';

const {
	      registerGateway,
      } = JetFBActions;

const {
	      addFilter,
      } = wp.hooks;

const { __ } = wp.i18n;

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

addFilter(
	'jet.fb.register.plugin.jf-validation-panel.after',
	'jet-form-builder/gateways',
	function ( plugins ) {
		plugins.push( gatewayPlugin );

		return plugins;
	},
);
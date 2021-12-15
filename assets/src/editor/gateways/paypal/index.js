import PaypalMain from './main';
import PayNowScenario from './pay-now-scenario';

const {
	registerGateway,
} = JetFBActions;

registerGateway(
	'paypal',
	PaypalMain,
);

registerGateway(
	'paypal',
	PayNowScenario,
	'PAY_NOW',
);

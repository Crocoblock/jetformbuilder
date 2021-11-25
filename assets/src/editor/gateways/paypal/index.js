import PaypalMain from './main';
import PayNowScenario from './pay-now-scenario';
import SubscribeNowScenario from './subscribe-now-scenario';

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

registerGateway(
	'paypal',
	SubscribeNowScenario,
	'SUBSCRIBE_NOW',
);
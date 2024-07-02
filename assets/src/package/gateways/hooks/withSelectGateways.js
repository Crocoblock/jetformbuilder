import gatewayAttr from '../helpers/gatewayAttr';
import gatewayLabel from '../helpers/gatewayLabel';
import { globalTab } from 'jet-form-builder-actions';

function withSelectGateways( select ) {
	const store = select( 'jet-forms/gateways' );

	const gatewayRequestId = store.getCurrentRequestId();
	const gatewaySpecific  = store.getGatewaySpecific();
	const scenario         = store.getScenario();

	const CURRENT_GATEWAY                      = store.getGatewayId();
	const { id: CURRENT_SCENARIO = 'PAY_NOW' } = scenario;

	const {
		      use_global = false,
	      } = gatewaySpecific;

	const currentTab = globalTab( { slug: CURRENT_GATEWAY } );

	const getSpecificOrGlobal = ( key, ifEmpty = '' ) => {
		return (
			use_global ? (
				currentTab[ key ] || ifEmpty
			) : (
				gatewaySpecific[ key ] || ifEmpty
			)
		);
	};

	const callableGateway         = gatewayAttr( 'additional' );
	const additionalSourceGateway = callableGateway( CURRENT_GATEWAY );

	const loadingGateway = select( 'jet-forms/actions' ).
		getLoading( gatewayRequestId );

	const globalGatewayLabel   = gatewayAttr( 'labels' );
	const specificGatewayLabel = gatewayLabel( CURRENT_GATEWAY );

	const customGatewayLabel = function ( key ) {
		return globalGatewayLabel( `${ CURRENT_GATEWAY }.${ key }` );
	};
	const scenarioLabel      = function ( key ) {
		return customGatewayLabel( `scenario.${ CURRENT_SCENARIO }.${ key }` );
	};

	return {
		gatewayGeneral: store.getGateway(),
		gatewayRequest: store.getCurrentRequest(),
		scenarioSource: additionalSourceGateway[ CURRENT_SCENARIO ] || {},
		currentScenario: scenario[ CURRENT_SCENARIO ] || {},
		CURRENT_SCENARIO,
		gatewayScenario: scenario,
		additionalSourceGateway,
		gatewaySpecific,
		gatewayRequestId,
		loadingGateway,
		getSpecificOrGlobal,
		globalGatewayLabel,
		specificGatewayLabel,
		customGatewayLabel,
		scenarioLabel,
	};
}

export default withSelectGateways;
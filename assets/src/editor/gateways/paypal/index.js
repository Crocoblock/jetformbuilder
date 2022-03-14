import PaypalMain from './main';
import PayNowScenario from './pay-now-scenario';

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

addFilter( 'jet.fb.gateways.getDisabledStateButton', 'jet-form-builder', ( isDisabled, props, issetActionType ) => {
	if ( gatewayID === props?._jf_gateways?.gateway ) {
		return ! issetActionType( 'save_record' );
	}

	return isDisabled;
} );

addFilter( 'jet.fb.gateways.getDisabledInfo', 'jet-form-builder', ( component, props ) => {
	if ( gatewayID !== props?._jf_gateways?.gateway ) {
		return component;
	}

	return <p>{ __( 'Please add \`Save Form Record\` action', 'jet-form-builder' ) }</p>
} );

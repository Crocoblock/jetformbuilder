import PaypalMain from './paypal/main';
import PayNowScenario from './paypal/pay-now-scenario';
import gatewayPlugin from './plugin';

const { registerGateway } = JetFBActions;

const { addFilter, applyFilters } = wp.hooks;

const gatewayID = 'paypal';

function getValidationData() {
	return window?.JetFormEditorData?.gateways?.validation || {};
}

function getRequiredMap() {
	return getValidationData()?.required_map || {};
}

function getGlobalValid() {
	return getValidationData()?.global_valid || {};
}

JetFBActions.isGatewayValid = function isGatewayValid( gatewayId, gatewaysMeta ) {
	if ( typeof gatewaysMeta === 'string' ) {
		try {
			gatewaysMeta = JSON.parse( gatewaysMeta || '{}' );
		} catch ( e ) {
			gatewaysMeta = {};
		}
	}

	const requiredMap = getRequiredMap();
	const required = requiredMap?.[ gatewayId ];

	if ( ! Array.isArray( required ) || ! required.length ) {
		return false;
	}

	const specific  = gatewaysMeta?.[ gatewayId ] || {};
	const useGlobal = !!specific.use_global;

	if ( useGlobal ) {
		const globalValid = getGlobalValid();
		return !!globalValid?.[ gatewayId ];
	}

	return required.every( ( key ) => {
		const value = specific?.[ key ];
		return typeof value === 'string' ? value.trim() !== '' : !!value;
	} );
};

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

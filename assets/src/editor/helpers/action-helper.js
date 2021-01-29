import withActionLocalizeScript from "../components/actions/action-wrapper";

export const getLocalized = ( actionType, objectKey = '' ) => {
	const preparedAction = window.jetFormActionTypes.find( action => actionType === action.id );
	const actionSelfLocalized = window[ preparedAction.self ];

	return ( objectKey && actionSelfLocalized[ objectKey ] ) ? actionSelfLocalized[ objectKey ] : actionSelfLocalized;
};

const getLocalizedWithFunc = ( { actionType = false, source = false },
							   objectKey,
							   ifEmptyReturn = '' ) => {

	const action = ( source ? source : getLocalized( actionType ) )[ objectKey ];

	return attr => {
		if ( attr ) {
			return ( action[ attr ] ? action[ attr ] : ifEmptyReturn );
		} else {
			return action;
		}
	};
};


export const localizedLabel = settings => {
	return getLocalizedWithFunc( settings, '__labels', '[Empty Label]' );
};

export const localizedHelp = settings => {
	return getLocalizedWithFunc( settings, '__help_messages' );
};

export const localizedGatewayAttrs = settings => {
	return getLocalizedWithFunc( settings, '__gateway_attrs', [] );
};

export const localizedMessages = settings => {
	return getLocalizedWithFunc( settings, '__messages', {} );
};

export const getLocalizedFullPack = actionType => {
	const source = getLocalized( actionType );

	const label = localizedLabel( { source } );
	const help = localizedHelp( { source } );
	const messages = localizedMessages( { source } );
	const gatewayAttrs = localizedGatewayAttrs( { source } );

	return { source, label, help, messages, gatewayAttrs };
};

export const addAction = ( actionType, actionInstance ) => {
	window.jetFormDefaultActions = window.jetFormDefaultActions || {};
	window.jetFormDefaultActions[ actionType ] = withActionLocalizeScript( actionType, actionInstance );
};
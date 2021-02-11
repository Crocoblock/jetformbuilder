const getLocalized = ( actionType, objectKey = '' ) => {
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

const getActionLabel = ( type ) => {
	return ( window.jetFormActionTypes.find( el => el.id === type ).name );
};

const localizedLabel = settings => {
	return getLocalizedWithFunc( settings, '__labels', '[Empty Label]' );
};

const localizedHelp = settings => {
	return getLocalizedWithFunc( settings, '__help_messages' );
};

const localizedGatewayAttrs = settings => {
	return getLocalizedWithFunc( settings, '__gateway_attrs', [] );
};

const localizedMessages = settings => {
	return getLocalizedWithFunc( settings, '__messages', {} );
};

const getLocalizedFullPack = actionType => {
	const source = getLocalized( actionType );

	const label = localizedLabel( { source } );
	const help = localizedHelp( { source } );
	const messages = localizedMessages( { source } );
	const gatewayAttrs = localizedGatewayAttrs( { source } );

	return { source, label, help, messages, gatewayAttrs };
};

( () => {
	window.JetFBLocalizeHelper = {
		getActionLabel,
		getLocalizedWithFunc,
		localizedLabel,
		localizedHelp,
		localizedGatewayAttrs,
		localizedMessages,
		getLocalizedFullPack
	};
} )()
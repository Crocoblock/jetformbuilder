const getLocalized = ( actionType, objectKey = '' ) => {
	const preparedAction = window.jetFormActionTypes.find( action => actionType === action.id );
	if ( ! preparedAction ) {
		return false;
	}
	const actionSelfLocalized = window[ preparedAction.self ];

	return ( objectKey && actionSelfLocalized[ objectKey ] ) ? actionSelfLocalized[ objectKey ] : actionSelfLocalized;
};

const getLocalizedWithFunc = ( { actionType = false, source = false },
							   objectKey,
							   ifEmptyReturn = '' ) => {

	let action = false;

	if ( source && source[ objectKey ] ) {
		action = source[ objectKey ];
	} else if ( actionType ) {
		action = ( getLocalized( actionType )[ objectKey ] );
	}

	if ( ! action ) {
		return () => ifEmptyReturn;
	}

	return attr => {
		if ( attr ) {
			return ( action[ attr ] ? action[ attr ] : ifEmptyReturn );
		} else {
			return action;
		}
	};
};

const getActionLabel = ( type ) => {
	const action = window.jetFormActionTypes.find( el => el.id === type );
	return action ? action.name : '';
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

const getLocalizedFullPack = ( actionType, source = false ) => {
	if ( ! source ) {
		source = getLocalized( actionType );
	}

	const label = localizedLabel( { source } );
	const help = localizedHelp( { source } );
	const messages = localizedMessages( { source } );
	const gatewayAttrs = localizedGatewayAttrs( { source } );

	return { source, label, help, messages, gatewayAttrs };
};

window.JetFBLocalizeHelper = {
	getActionLabel,
	getLocalizedWithFunc,
	localizedLabel,
	localizedHelp,
	localizedGatewayAttrs,
	localizedMessages,
	getLocalizedFullPack
};

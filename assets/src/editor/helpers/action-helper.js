import withActionLocalizeScript from "../components/actions/action-wrapper";
import { useActions } from "./hooks-helper";
import gatewayActionAttributes from "../gateways/gateway-action-attrubites";


export const getActionLabel = ( type ) => {
	return ( window.jetFormActionTypes.find( el => el.id === type ).name );
};

export const getActionsByType = type => {
	const [actions] = useActions();

	return actions.filter( action => type === action.type );
};

export const actionByTypeList = ( actionType, withDesc = false ) => {
	return getActionsByType( actionType ).map( action => {
		const newAction = {
			value: action.id,
			label: getActionLabel( action.type )
		};
		if ( withDesc ) {
			newAction.label += ` (${ gatewayActionAttributes( action ) })`
		}

		return newAction;
	} );
};

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
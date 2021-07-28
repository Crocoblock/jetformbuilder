import { useActions } from "../hooks/hooks-helper";
import gatewayActionAttributes from "../gateways/gateway-action-attrubites";

export const getActionsByType = type => {
	const [ actions ] = useActions();

	return actions.filter( action => type === action.type );
};

export const fromLocalizeHelper = name => {
	return name ? window.JetFBLocalizeHelper[ name ] : window.JetFBLocalizeHelper;
};

export const actionByTypeList = ( actionType, withDesc = false ) => {
	return getActionsByType( actionType ).map( action => {
		const newAction = {
			value: action.id,
			label: fromLocalizeHelper( 'getActionLabel' )( action.type ),
		};
		if ( withDesc ) {
			newAction.label += ` (${ gatewayActionAttributes( action ) })`
		}

		return newAction;
	} );
};

export const getActionSettings = actionId => {
	const [ actions ] = useActions();
	const action = actions.find( action => actionId === action.id );

	return ( action && action.settings ) ? action.settings : false;
};

export const convertListToFieldsMap = source => {
	return source.map( item => {
		const id = item.value;
		delete item.value;

		return [ id, item ];
	} );
};



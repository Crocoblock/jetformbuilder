import withActionLocalizeScript from "../components/actions/action-wrapper";
import { useActions } from "./hooks-helper";
import gatewayActionAttributes from "../gateways/gateway-action-attrubites";
import { saveGlobalComponent } from "../components/manager";

export const getActionsByType = type => {
	const [actions] = useActions();

	return actions.filter( action => type === action.type );
};

export const fromLocalizeHelper = name => {
	return name ? window.JetFBLocalizeHelper[ name ] : window.JetFBLocalizeHelper;
};

export const actionByTypeList = ( actionType, withDesc = false ) => {
	return getActionsByType( actionType ).map( action => {
		const newAction = {
			value: action.id,
			label: fromLocalizeHelper( 'getActionLabel' )( action.type )
		};
		if ( withDesc ) {
			newAction.label += ` (${ gatewayActionAttributes( action ) })`
		}

		return newAction;
	} );
};

export const addAction = ( actionType, actionInstance ) => {
	window.jetFormDefaultActions = window.jetFormDefaultActions || {};
	window.jetFormDefaultActions[ actionType ] = withActionLocalizeScript( actionType, actionInstance );
};

saveGlobalComponent( 'JetFBActions', { addAction } );
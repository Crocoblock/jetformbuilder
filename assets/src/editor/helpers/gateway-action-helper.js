import { useActions } from "./hooks-helper";

const {
	useState,
	useEffect
} = wp.element;

const {
	useSelect,
} = wp.data;

export const getActionSettings = actionId => {
	const [actions] = useActions();
	const action = actions.find( action => actionId === action.id );

	return ( action && action.settings ) ? action.settings : false;
};

export const gatewayAttr = ( attr = false, isEmpty = '' ) => {
	const data = window.JetFormEditorData.gateways;

	if ( ! attr ) {
		return data;
	}
	if ( ! data[ attr ] ) {
		return false;
	}

	const source = data[ attr ];

	return name => source[ name ] ? source[ name ] : isEmpty;
};
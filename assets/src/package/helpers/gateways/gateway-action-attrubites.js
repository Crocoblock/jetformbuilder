import {
	fromLocalizeHelper,
	getActionSettings,
} from "../actions/action-helper";

function gatewayActionAttributes( action ) {
	const { gatewayAttrs, label } = fromLocalizeHelper( 'getLocalizedFullPack' )( action.type );
	const actionSettings = getActionSettings( action.id );

	const value = attr => {
		if ( actionSettings[ attr ] ) {
			return actionSettings[ attr ];
		}
		if ( actionSettings[ action.type ] && actionSettings[ action.type ][ attr ] ) {
			return actionSettings[ action.type ][ attr ];
		}
		return 'NULL';
	};

	const labelWithAttrs = gatewayAttrs().map( attr => ( `${ label( attr ) } ${ value( attr ) }` ) );

	return labelWithAttrs.join( ', ' );
}

export default gatewayActionAttributes;
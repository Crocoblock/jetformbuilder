import { getActionSettings } from "../helpers/gateway-action-helper";
import { getLocalizedFullPack } from "../helpers/action-helper";

function gatewayActionAttributes( action ) {
	const { gatewayAttrs, label } = getLocalizedFullPack( action.type );
	const actionSettings = getActionSettings( action.id );

	const value = attr => actionSettings[ attr ] ? actionSettings[ attr ] : 'NULL';

	const labelWithAttrs = gatewayAttrs().map( attr => ( `${ label( attr ) } ${ value( attr ) }` ) );

	return labelWithAttrs.join( ', ' );
}

export default gatewayActionAttributes;
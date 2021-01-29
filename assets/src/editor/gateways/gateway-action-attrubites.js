import { getActionSettings } from "../helpers/gateway-action-helper";
import { getLocalizedFullPack } from "../helpers/action-helper";

function gatewayActionAttributes( action ) {
	const { gatewayAttrs, label } = getLocalizedFullPack( action.type );
	const actionSettings = getActionSettings( action.id );

	const labelWithAttrs = gatewayAttrs().map( attr => ( `${ label( attr ) } ${ actionSettings[ attr ] }` ) );

	return labelWithAttrs.join( ', ' );
}

export default gatewayActionAttributes;
import gatewayAttr from './gatewayAttr';

function gatewayLabel( type, isEmpty = '' ) {
	const label = gatewayAttr( 'labels' );

	return attr => label( type ) ? label( type )[ attr ] : isEmpty;
}

export default gatewayLabel;
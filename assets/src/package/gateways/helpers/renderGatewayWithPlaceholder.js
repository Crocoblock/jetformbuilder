import issetRenderGateway from './issetRenderGateway';
import renderGateway from './renderGateway';

function renderGatewayWithPlaceholder(
	id,
	props,
	what        = 'cred',
	Placeholder = null,
) {
	if ( !issetRenderGateway( id, what ) ) {
		return Placeholder;
	}
	props.Placeholder = Placeholder;

	return renderGateway( id, props, what );
}

export default renderGatewayWithPlaceholder;
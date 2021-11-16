import FetchApiButton from './fetch-api-button';
import { withSelectGateways } from '../helpers/hooks/hooks-helper';

const { compose } = wp.compose;

const {
	withSelect,
} = wp.data;

function GatewayFetchButton( {
	initialLabel = 'Valid',
	label = 'InValid',
	apiArgs = {},
	gatewayRequestId,
} ) {

	return <FetchApiButton
		id={ gatewayRequestId }
		initialLabel={ initialLabel }
		label={ label }
		apiArgs={ apiArgs }
	/>;
}

export default compose(
	withSelect( withSelectGateways ),
)( GatewayFetchButton );
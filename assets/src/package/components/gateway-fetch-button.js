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
	loadingGateway,
	onLoading = () => {},
	onSuccess = () => {},
	onFail = () => {}
} ) {

	return <FetchApiButton
		id={ gatewayRequestId }
		loadingState={ loadingGateway }
		initialLabel={ initialLabel }
		label={ label }
		apiArgs={ apiArgs }
		onFail={ onFail }
		onLoading={ onLoading }
		onSuccess={ onSuccess }
	/>;
}

export default compose(
	withSelect( withSelectGateways ),
)( GatewayFetchButton );
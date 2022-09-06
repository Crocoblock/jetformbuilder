import withSelectGateways from '../hooks/withSelectGateways';
import FetchApiButton from '../../actions/components/FetchApiButton';

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
	onFail = () => {},
	isHidden = false,
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
		isHidden={ isHidden }
	/>;
}

export default compose(
	withSelect( withSelectGateways ),
)( GatewayFetchButton );
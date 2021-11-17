const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl,
} = wp.components;

const {
	useEffect,
} = wp.element;

const {
	renderGateway,
	gatewayLabel,
	globalTab,
	gatewayAttr,
} = JetFBActions;

const {
	withSelectGatewaysLoading,
	withDispatchGateways,
} = JetFBHooks;

const { GatewayFetchButton } = JetFBComponents;

const currentTab = globalTab( { slug: 'paypal' } );
let callableGateway = gatewayAttr( 'additional' );

const paypalLabel = gatewayLabel( 'paypal' );

function PaypalMain( {
	loadingGateway,
	setGatewayRequest,
	gatewaySpecific,
	setGatewaySpecific,
} ) {

	const additional = callableGateway( 'paypal' );

	const {
		use_global,
		gateway_type: scenario = 'PAY_NOW',
	} = gatewaySpecific;


	const getManualOrGlobal = key => {
		return use_global ? currentTab[ key ] : gatewaySpecific[ key ] || '';
	};

	const credits = {
		client_id: getManualOrGlobal( 'client_id' ),
		secret: getManualOrGlobal( 'secret' ),
	};

	const fetchArgs = additional.fetch[ scenario ] || {};

	useEffect( () => {
		setGatewayRequest( { id: scenario } );
	}, [] );

	return <>
		<ToggleControl
			key={ 'use_global' }
			label={ paypalLabel( 'use_global' ) }
			checked={ use_global }
			onChange={ use_global => setGatewaySpecific( { use_global } ) }
		/>
		<TextControl
			label={ paypalLabel( 'client_id' ) }
			key='paypal_client_id_setting'
			value={ credits.client_id }
			onChange={ client_id => setGatewaySpecific( { client_id } ) }
			disabled={ use_global }
		/>
		<TextControl
			label={ paypalLabel( 'secret' ) }
			key='paypal_secret_setting'
			value={ credits.secret }
			onChange={ secret => setGatewaySpecific( { secret } ) }
			disabled={ use_global }
		/>
		<SelectControl
			labelPosition='side'
			label={ paypalLabel( 'gateway_type' ) }
			value={ scenario }
			onChange={ id => {
				setGatewaySpecific( { gateway_type: id } );
				setGatewayRequest( { id } );
			} }
			options={ additional.gateway_types }
		/>
		<BaseControl
			label={ 'Request Button' }
		>
			<GatewayFetchButton
				initialLabel={ 'Fetch' }
				label={ 'Retry Fetch' }
				apiArgs={ {
					...fetchArgs,
					data: credits,
				} }
			/>
		</BaseControl>
		{ renderGateway( 'paypal', {}, scenario ) }
	</>;
}

export default compose(
	withSelect( withSelectGatewaysLoading ),
	withDispatch( withDispatchGateways ),
)( PaypalMain );



const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const {
	TextControl,
	ToggleControl,
	SelectControl,
	withNotices,
} = wp.components;

const {
	useEffect,
} = wp.element;

const {
	renderGateway,
	gatewayLabel,
	gatewayAttr,
} = JetFBActions;

const {
	withSelectGateways,
	withDispatchGateways,
} = JetFBHooks;

const callableGateway = gatewayAttr( 'additional' );
const paypalLabel = gatewayLabel( 'paypal' );

function PaypalMain( {
	loadingGateway,
	setGatewayRequest,
	gatewaySpecific,
	setGatewaySpecific,
	gatewayScenario,
	setGatewayScenario,
	getSpecificOrGlobal,
	noticeOperations,
	noticeUI,
} ) {

	const additional = callableGateway( 'paypal' );

	const {
		id: scenario = 'PAY_NOW',
	} = gatewayScenario;

	const scenarioSource = additional[ scenario ] || {};

	useEffect( () => {
		setGatewayRequest( { id: scenario } );
	}, [ scenario ] );

	useEffect( () => {
		setGatewayRequest( { id: scenario } );
	}, [] );

	return <>
		{ noticeUI }
		<ToggleControl
			key={ 'use_global' }
			label={ paypalLabel( 'use_global' ) }
			checked={ gatewaySpecific.use_global }
			onChange={ use_global => setGatewaySpecific( { use_global } ) }
		/>
		<TextControl
			label={ paypalLabel( 'client_id' ) }
			key='paypal_client_id_setting'
			value={ getSpecificOrGlobal( 'client_id' ) }
			onChange={ client_id => setGatewaySpecific( { client_id } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<TextControl
			label={ paypalLabel( 'secret' ) }
			key='paypal_secret_setting'
			value={ getSpecificOrGlobal( 'secret' ) }
			onChange={ secret => setGatewaySpecific( { secret } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<SelectControl
			labelPosition='side'
			label={ paypalLabel( 'gateway_type' ) }
			value={ scenario }
			onChange={ id => {
				setGatewayScenario( { id } );
			} }
			options={ additional.gateway_types }
		/>
		{ renderGateway( 'paypal', { scenarioSource, noticeOperations }, scenario ) }
	</>;
}

export default compose(
	withSelect( withSelectGateways ),
	withDispatch( withDispatchGateways ),
	withNotices,
)( PaypalMain );



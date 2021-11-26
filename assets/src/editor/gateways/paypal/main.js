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
} = JetFBActions;

const {
	withSelectGateways,
	withDispatchGateways,
} = JetFBHooks;

function PaypalMain( {
	loadingGateway,
	setGatewayRequest,
	gatewaySpecific,
	setGatewaySpecific,
	gatewayScenario,
	setGatewayScenario,
	getSpecificOrGlobal,
	additionalSourceGateway,
	specificGatewayLabel,
	noticeOperations,
	noticeUI,
} ) {

	const {
		id: scenario = 'PAY_NOW',
	} = gatewayScenario;

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
			label={ specificGatewayLabel( 'use_global' ) }
			checked={ gatewaySpecific.use_global }
			onChange={ use_global => setGatewaySpecific( { use_global } ) }
		/>
		<TextControl
			label={ specificGatewayLabel( 'client_id' ) }
			key='paypal_client_id_setting'
			value={ getSpecificOrGlobal( 'client_id' ) }
			onChange={ client_id => setGatewaySpecific( { client_id } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<TextControl
			label={ specificGatewayLabel( 'secret' ) }
			key='paypal_secret_setting'
			value={ getSpecificOrGlobal( 'secret' ) }
			onChange={ secret => setGatewaySpecific( { secret } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<SelectControl
			labelPosition='side'
			label={ specificGatewayLabel( 'gateway_type' ) }
			value={ scenario }
			onChange={ id => {
				setGatewayScenario( { id } );
			} }
			options={ additionalSourceGateway.scenarios }
		/>
		{ renderGateway( 'paypal', { noticeOperations }, scenario ) }
	</>;
}

export default compose(
	withSelect( withSelectGateways ),
	withDispatch( withDispatchGateways ),
	withNotices,
)( PaypalMain );



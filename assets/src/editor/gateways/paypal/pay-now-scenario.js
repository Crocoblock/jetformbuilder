const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const {
	TextControl,
	SelectControl,
	BaseControl,
	RadioControl,
} = wp.components;

const {
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
	withSelectActionsByType,
} = JetFBHooks;

const { GatewayFetchButton } = JetFBComponents;

function PayNowScenario( {
	gatewayGeneral,
	gatewaySpecific,
	setGateway,
	setGatewaySpecific,
	formFields,
	insert_post,
	getSpecificOrGlobal,
	loadingGateway,
	scenarioSource,
	noticeOperations,
	scenarioLabel,
	globalGatewayLabel,
} ) {

	const displayNotice = status => response => {
		noticeOperations.removeNotice( gatewayGeneral.gateway );
		noticeOperations.createNotice( {
			status,
			content: response.message,
			id: gatewayGeneral.gateway,
		} );
	};

	return <>
		<BaseControl
			label={ scenarioLabel( 'fetch_button_label' ) }
		>
			<GatewayFetchButton
				initialLabel={ scenarioLabel( 'fetch_button' ) }
				label={ scenarioLabel( 'fetch_button_retry' ) }
				apiArgs={ {
					...scenarioSource.fetch,
					data: {
						client_id: getSpecificOrGlobal( 'client_id' ),
						secret: getSpecificOrGlobal( 'secret' ),
					},
				} }
				onSuccess={ displayNotice( 'success' ) }
				onFail={ displayNotice( 'error' ) }
			/>
		</BaseControl>
		{ loadingGateway.success && <>
			<TextControl
				label={ scenarioLabel( 'currency' ) }
				key='paypal_currency_code_setting'
				value={ gatewaySpecific.currency }
				onChange={ currency => setGatewaySpecific( { currency } ) }
			/>
			<SelectControl
				label={ globalGatewayLabel( 'price_field' ) }
				key={ 'form_fields_price_field' }
				value={ gatewayGeneral.price_field }
				labelPosition='side'
				onChange={ price_field => {
					setGateway( { price_field } );
				} }
				options={ formFields }
			/>
			<BaseControl
				label={ globalGatewayLabel( 'action_order' ) }
				key='gateway_action_order_pay_now_control'
			>
				<RadioControl
					className='jet-control-clear-full jet-user-fields-map__list'
					key='gateway_action_order_pay_now'
					options={ insert_post }
					selected={ gatewayGeneral.action_order }
					onChange={ val => {
						setGateway( { action_order: Number( val ) } );
					} }
				/>
			</BaseControl>
		</> }
	</>;
}

export default compose(
	withSelect( ( ...props ) => (
		{
			...withSelectFormFields( [], '--' )( ...props ),
			...withSelectActionsByType( 'insert_post', true )( ...props ),
			...withSelectGateways( ...props ),
		}
	) ),
	withDispatch( ( ...props ) => (
		{
			...withDispatchGateways( ...props ),
		}
	) ),
)( PayNowScenario );
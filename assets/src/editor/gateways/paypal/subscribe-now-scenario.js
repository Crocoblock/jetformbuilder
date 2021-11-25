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
	gatewayLabel,
	gatewayAttr,
} = JetFBActions;

const {
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
	withSelectActionsByType,
} = JetFBHooks;

const { GatewayFetchButton } = JetFBComponents;

const paypalLabel = gatewayLabel( 'paypal' );
const globalLabel = gatewayAttr( 'labels' );

function SubscribeNowScenario( {
	gatewayGeneral,
	setGateway,
	formFields,
	insert_post,
	getSpecificOrGlobal,
	loadingGateway,
	gatewayScenario,
	setGatewayScenario,
	scenarioSource,
	noticeOperations,
} ) {

	const displayNotice = status => response => {
		noticeOperations.createNotice( {
			status,
			content: response.message,
		} )
	};

	return <>
		<BaseControl
			label={ 'Request Button' }
		>
			<GatewayFetchButton
				initialLabel={ 'Fetch' }
				label={ 'Retry Fetch' }
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
			<SelectControl
				label={ paypalLabel( 'subscribe_plan_field' ) }
				key={ 'form_fields_subscribe_plan_field' }
				value={ gatewayScenario.plan_field }
				labelPosition='side'
				onChange={ plan_field => {
					setGatewayScenario( { plan_field } );
				} }
				options={ formFields }
			/>
			<BaseControl
				label={ globalLabel( 'action_order' ) }
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
)( SubscribeNowScenario );
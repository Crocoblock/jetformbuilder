const { compose } = wp.compose;

const {
	withSelect,
	withDispatch,
} = wp.data;

const {
	SelectControl,
	BaseControl,
	RadioControl,
	CustomSelectControl,
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
	scenarioLabel,
	globalGatewayLabel,
} ) {

	const { data: fetchedPlans = [] } = loadingGateway.response;

	const displayNotice = status => response => {
		noticeOperations.removeNotice( gatewayGeneral.gateway );
		noticeOperations.createNotice( {
			status,
			content: response.message,
			id: gatewayGeneral.gateway,
		} );
	};

	const getPlan = function ( planID ) {
		return fetchedPlans.find( plan => plan.key === planID );
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
			<BaseControl
				label={ scenarioLabel( 'plan_from' ) }
				key='scenario_plan_from'
			>
				<RadioControl
					className='jet-control-clear-full jet-user-fields-map__list'
					key='scenario_plan_from_control'
					options={ scenarioSource.plan_from_options }
					selected={ gatewayScenario.plan_from }
					onChange={ plan_from => setGatewayScenario( { plan_from } ) }
				/>
			</BaseControl>
			{ 'field' === gatewayScenario.plan_from
				? <SelectControl
					label={ scenarioLabel( 'subscribe_plan_field' ) }
					key={ 'form_fields_subscribe_plan_field' }
					value={ gatewayScenario.plan_field }
					labelPosition='side'
					onChange={ plan_field => {
						setGatewayScenario( { plan_field } );
					} }
					options={ formFields }
				/>
				: <BaseControl
					label={ scenarioLabel( 'subscribe_plan' ) }
					key='scenario_plan_manual'
				>
					<CustomSelectControl
						hideLabelFromVision
						options={ fetchedPlans }
						value={ getPlan( gatewayScenario.plan_manual ) }
						onChange={ ( { selectedItem } ) => {
							if ( selectedItem.disabled ) {
								return;
							}
							setGatewayScenario( { plan_manual: selectedItem.key } );
						} }
					/>
				</BaseControl>
			}

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
)( SubscribeNowScenario );
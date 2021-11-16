const { __ } = wp.i18n;

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
	RadioControl,
} = wp.components;

const {
	useEffect,
} = wp.element;

const {
	registerGateway,
	renderGateway,
	gatewayLabel,
	globalTab,
	gatewayAttr,
	actionByTypeList,
} = JetFBActions;

const {
	withSelectGatewaysLoading,
	withSelectFormFields,
	withSelectGateways,
	withDispatchGateways,
} = JetFBHooks;

const { GatewayFetchButton } = JetFBComponents;

const paypalLabel = gatewayLabel( 'paypal' );
const currentTab = globalTab( { slug: 'paypal' } );

let callableGateway = gatewayAttr( 'additional' );
const globalLabel = gatewayAttr( 'labels' );

export default function PayPal( {
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
		return use_global
			? currentTab[ key ]
			: gatewaySpecific[ key ] || '';
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

registerGateway(
	'paypal',
	compose(
		withSelect( withSelectGatewaysLoading ),
		withDispatch( withDispatchGateways ),
	)( PayPal ),
);

function PayNowScenario( {
	setGatewayRequest,
	gatewayGeneral,
	gatewaySpecific,
	setGateway,
	setGatewaySpecific,
	formFields,
} ) {
	return <>
		<TextControl
			label={ paypalLabel( 'currency' ) }
			key='paypal_currency_code_setting'
			value={ gatewaySpecific.currency }
			onChange={ currency => setGatewaySpecific( { currency } ) }
		/>
		<SelectControl
			label={ globalLabel( 'price_field' ) }
			key={ 'form_fields_price_field' }
			value={ gatewayGeneral.price_field }
			labelPosition='side'
			onChange={ price_field => {
				setGateway( { price_field } );
			} }
			options={ formFields }
		/>
		<BaseControl
			label={ globalLabel( 'action_order' ) }
			key='gateway_action_order_base_control'
		>
			<RadioControl
				className='jet-control-clear-full jet-user-fields-map__list'
				key='gateway_action_order'
				options={ actionByTypeList( 'insert_post', true ) }
				selected={ gatewayGeneral.action_order }
				onChange={ action_order => {
					setGateway( { action_order } );
				} }
			/>
		</BaseControl>
	</>;
}

registerGateway(
	'paypal',
	compose(
		withSelect( withSelectFormFields( [], '--' ) ),
		withSelect( withSelectGateways ),
		withDispatch( withDispatchGateways ),
	)( PayNowScenario ),
	'PAY_NOW',
);


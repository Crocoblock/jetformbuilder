import * as paypal from './paypal';

const {
	gatewayAttr,
	renderGateway,
	renderGatewayWithPlaceholder,
} = JetFBActions;

const { __ } = wp.i18n;

const {
	TextareaControl,
	BaseControl,
} = wp.components;

const {
	withSelect,
	withDispatch,
} = wp.data;

const { compose } = wp.compose;


const {
	withSelectGateways,
	withDispatchGateways,
} = JetFBHooks;

const gatewaysData = gatewayAttr();
const label = gatewayAttr( 'labels' );

function GatewaysEditor( {
	gatewayGeneral,
	setGatewayInner,
	loadingGateway,
	gatewayRequest,
	CURRENT_SCENARIO,
	currentScenario,
} ) {

	/**
	 * Used for set notifications and gateway type settings
	 *
	 * @param when
	 * @param type
	 * @param newValue
	 */
	const setValueInObject = ( when, type, newValue ) => {
		setGatewayInner( {
			key: when,
			value: {
				[ type ]: newValue,
			},
		} );
	};
	/**
	 * Used for get notifications and gateway type settings
	 *
	 * @param when
	 * @param type
	 * @param isEmptyResult
	 * @returns {boolean|*}
	 */
	const getNotifications = ( when, type, isEmptyResult = false ) => {
		if ( gatewayGeneral[ when ] && gatewayGeneral[ when ][ type ] ) {
			return gatewayGeneral[ when ][ type ];
		}
		return isEmptyResult;
	};

	const setResultMessage = ( key, value ) => {
		setValueInObject( 'messages', key, value );
	};
	const getResultMessage = ( key ) => {
		return getNotifications( 'messages', key, gatewaysData.messages[ key ] );
	};

	const GatewayFooter = <>
		{ renderGatewayWithPlaceholder(
			gatewayGeneral.gateway,
			{ gatewayGeneral, CURRENT_SCENARIO, currentScenario },
			'macrosList',
			<BaseControl
				key="payment_result_macros_base_control"
			>
				<h4>
					{ __( 'Available macros list: ', 'jet-form-builder' ) }<br/>
					{ __( '%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder' ) }<br/>
					{ __( '%gateway_status% - payment status returned from payment gateway;', 'jet-form-builder' ) }<br/>
					{ __( '%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder' ) }<br/>
				</h4>
			</BaseControl> ) }
		<TextareaControl
			key="payment_result_message_success"
			label={ label( 'message_success' ) }
			value={ getResultMessage( 'success' ) }
			onChange={ newValue => setResultMessage( 'success', newValue ) }
		/>
		<TextareaControl
			key="payment_result_message_failed"
			label={ label( 'message_failed' ) }
			value={ getResultMessage( 'failed' ) }
			onChange={ newValue => setResultMessage( 'failed', newValue ) }
		/>
	</>;

	return <>
		{ renderGateway( gatewayGeneral.gateway, { setValueInObject, getNotifications } ) }
		{ (
			  - 1 === gatewayRequest.id
			  || loadingGateway.success
			  || ! gatewayRequest.id.includes( gatewayGeneral.gateway )
		  ) && GatewayFooter }
	</>;
}

export default compose(
	withSelect( ( ...props ) => (
		{
			...withSelectGateways( ...props ),
		}
	) ),
	withDispatch( withDispatchGateways ),
)( GatewaysEditor );
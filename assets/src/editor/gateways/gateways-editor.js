import * as paypal from './paypal';

const {
	prepareActionsListByType,
	fromLocalizeHelper,
	gatewayAttr,
	renderGateway,
	gatewayActionAttributes,
	renderGatewayWithPlaceholder,
} = JetFBActions;

const { __ } = wp.i18n;

const {
	TextareaControl,
	CheckboxControl,
	SelectControl,
	BaseControl,
	RadioControl,
	ToggleControl,
} = wp.components;

const {
	withSelect,
	withDispatch,
} = wp.data;

const { compose } = wp.compose;

const {
	useState,
	useEffect,
} = wp.element;

const {
	withSelectMeta,
	withSelectGateways,
	withDispatchGateways,
	withSelectFormFields,
} = JetFBHooks;

const gatewaysData = gatewayAttr();
const label = gatewayAttr( 'labels' );
const callableGateway = gatewayAttr( 'additional' );

const { isInDefaultFlow } = JetFBLocalizeHelper;

function GatewaysEditor( {
	_jf_actions: ActionsMeta,
	setGateway,
	gatewayGeneral,
	setGatewayInner,
	formFields,
	loadingGateway,
	gatewayRequest,
} ) {

	const availableActions = ActionsMeta.filter( action => ( action.type !== 'redirect_to_page' && isInDefaultFlow( action.type ) ) );
	const insertPostActions = prepareActionsListByType( ActionsMeta, 'insert_post', true );

	const additional = callableGateway( gatewayGeneral.gateway );

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

	const setNotificationsBefore = ( id, newValue ) => {
		setValueInObject( 'notifications_before', id, newValue );
	};

	const actionDefault = { active: false };

	const getNotificationsBefore = id => {
		return getNotifications( 'notifications_before', id, actionDefault );
	};

	const setNotificationsFailed = ( type, newValue ) => {
		setValueInObject( 'notifications_failed', type, newValue );
	};
	const getNotificationsFailed = id => {
		return getNotifications( 'notifications_failed', id, actionDefault );
	};

	const setNotificationsSuccess = ( id, newValue ) => {
		setValueInObject( 'notifications_success', id, newValue );
	};
	const getNotificationsSuccess = id => {
		return getNotifications( 'notifications_success', id, actionDefault );
	};

	const actionLabel = fromLocalizeHelper( 'getActionLabel' );

	const GatewayFooter = <>
		{ Boolean( availableActions.length ) && <>
			<BaseControl
				label={ __( 'Before payment processed:', 'jet-form-builder' ) }
				key="before_payment_base_control"
			>
				<div className={ 'jet-user-fields-map__list' }>
					{ availableActions.map( ( action, index ) => <CheckboxControl
						className={ 'jet-forms-checkbox-field' }
						key={ `place_holder_block_${ action.id + index }` }
						checked={ getNotificationsBefore( action.id ).active }
						label={ actionLabel( action.type ) }
						help={ gatewayActionAttributes( action ) }
						onChange={ active => setNotificationsBefore( action.id, {
							active,
							type: action.type,
						} ) }
					/> ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ __( 'On successful payment:', 'jet-form-builder' ) }
				key="success_payment_base_control"
			>
				<div className='jet-user-fields-map__list'>
					{ availableActions.map( ( action, index ) => <CheckboxControl
						className={ 'jet-forms-checkbox-field' }
						key={ `place_holder_block_${ action.id + index }` }
						checked={ getNotificationsSuccess( action.id ).active }
						label={ actionLabel( action.type ) }
						help={ gatewayActionAttributes( action ) }
						onChange={ active => setNotificationsSuccess( action.id, {
							active,
							type: action.type,
						} ) }
					/> ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ __( 'On failed payment:', 'jet-form-builder' ) }
				key="failed_payment_base_control"
			>
				<div className='jet-user-fields-map__list'>
					{ availableActions.map( ( action, index ) => <CheckboxControl
						className={ 'jet-forms-checkbox-field' }
						key={ `place_holder_block_${ action.id + index }` }
						checked={ getNotificationsFailed( action.id ).active }
						label={ actionLabel( action.type ) }
						help={ gatewayActionAttributes( action ) }
						onChange={ active => setNotificationsFailed( action.id, {
							active,
							type: action.type,
						} ) }
					/> ) }
				</div>
			</BaseControl>
		</> }
		{ ActionsMeta.find( action => action.type === 'redirect_to_page' ) && <ToggleControl
			key='checkbox_block_redirect_to_page'
			checked={ gatewayGeneral.use_success_redirect }
			label={ label( 'use_success_redirect' ) }
			help={ label( 'use_success_redirect_help' ) }
			onChange={ val => {
				setGateway( { use_success_redirect: val } );
			} }
		/> }
		{ 1 !== additional.version && <>
			<BaseControl
				label={ label( 'action_order' ) }
				key='gateway_action_order_base_control'
			>
				<RadioControl
					className='jet-control-clear-full jet-user-fields-map__list'
					key='gateway_action_order'
					options={ insertPostActions }
					selected={ gatewayGeneral.action_order }
					onChange={ newVal => {
						setGateway( { action_order: Number( newVal ) } );
					} }
				/>
			</BaseControl>

			<SelectControl
				label={ label( 'price_field' ) }
				key={ 'form_fields_price_field' }
				value={ gatewayGeneral.price_field }
				labelPosition='side'
				onChange={ price_field => {
					setGateway( { price_field } );
				} }
				options={ formFields }
			/>
		</> }
		{ renderGatewayWithPlaceholder( gatewayGeneral.gateway, {}, 'macrosList', <BaseControl
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
			...withSelectMeta( '_jf_actions' )( ...props ),
			...withSelectFormFields( [], '--' )( ...props ),
			...withSelectGateways( ...props ),
		}
	) ),
	withDispatch( withDispatchGateways ),
)( GatewaysEditor );
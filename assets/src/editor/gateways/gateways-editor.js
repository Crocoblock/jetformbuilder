import PayPal from "./paypal";
import Stripe from "./stripe";
import Tools from "../helpers/tools";
import GatewayActionAttributes from "./gateway-action-attrubites";
import gatewayActionAttributes from "./gateway-action-attrubites";

const { __ } = wp.i18n;

const {
	ToggleControl,
	TextareaControl,
	TextControl,
	CheckboxControl,
	SelectControl,
	BaseControl,
	RadioControl,
	Button,
	Modal,
	Text,
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

const parseActions = actions => {
	return actions.filter( action => ! ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) );
};

export default function GatewaysEditor( {
											gatewaysArgs,
											activeActions,
											onUnMount,
											isSaveAction,
											onSaveItems
										} ) {

	const availableActions = parseActions( activeActions );

	const gatewaysData = window.JetFormEditorData.gateways;

	const [gateway, setGateway] = useState( gatewaysArgs );

	const formFields = Tools.getFormFieldsBlocks();

	const getActionLabel = ( type ) => {
		return ( window.jetFormActionTypes.find( el => el.id === type ).name );
	};

	/**
	 * Used for set notifications and gateway type settings
	 *
	 * @param when
	 * @param type
	 * @param newValue
	 * @param isRemove
	 */
	const setValueInObject = ( when, type, newValue ) => {
		setGateway( ( prevArgs ) => {
			if ( ! prevArgs[ when ] ) {
				prevArgs[ when ] = {};
			}
			prevArgs[ when ][ type ] = newValue;
			return {
				...prevArgs,
			}
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
		if ( gateway[ when ] && gateway[ when ][ type ] ) {
			return gateway[ when ][ type ];
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

	useEffect( () => {
		if ( true === isSaveAction ) {
			if ( onSaveItems ) {

				['notifications_before', 'notifications_failed', 'notifications_success'].forEach( name => {
					if ( ! gateway[ name ] ) {
						gateway[ name ] = {};
						return;
					}
					Object.entries( gateway[ name ] ).forEach( ( [action, isChecked] ) => {
						if ( ! isChecked ) {
							delete gateway[ name ][ action ];
						}
					} )
				} );

				onSaveItems( gateway );
			}
			onUnMount();
		} else if ( false === isSaveAction ) {
			onUnMount();
		}
	}, [isSaveAction] );

	return <>
		{ 'paypal' === gateway.gateway && <PayPal
			setValueInObject={ setValueInObject }
			getNotifications={ getNotifications }
		/> }
		{ 'stripe' === gateway.gateway && <Stripe
			setValueInObject={ setValueInObject }
			getNotifications={ getNotifications }
		/> }
		{ Boolean( availableActions.length ) && <>
			<BaseControl
				label={ __( 'Before payment processed:', 'jet-form-builder' ) }
				key="before_payment_base_control"
			>
				<div className={ 'checkboxes-row' }>
					{ availableActions.map( ( action, index ) => {
						if ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) {
							return;
						}
						return <CheckboxControl
							className={ 'jet-forms-checkbox-field' }
							key={ `place_holder_block_${ action.id + index }` }
							checked={ getNotificationsBefore( action.id ).active }
							label={ getActionLabel( action.type ) }
							help={ gatewayActionAttributes( action ) }
							onChange={ active => setNotificationsBefore( action.id, {
								active,
								type: action.type
							} ) }
						/>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ __( 'On successful payment:', 'jet-form-builder' ) }
				key="success_payment_base_control"
			>
				<div>
					{ availableActions.map( ( action, index ) => {
						return <CheckboxControl
							className={ 'jet-forms-checkbox-field' }
							key={ `place_holder_block_${ action.id + index }` }
							checked={ getNotificationsSuccess( action.id ).active }
							label={ getActionLabel( action.type ) }
							help={ gatewayActionAttributes( action ) }
							onChange={ active => setNotificationsSuccess( action.id, {
								active,
								type: action.type
							} ) }
						/>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ __( 'On failed payment:', 'jet-form-builder' ) }
				key="failed_payment_base_control"
			>
				<div>
					{ availableActions.map( ( action, index ) => {
						if ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) {
							return;
						}
						return <CheckboxControl
							className={ 'jet-forms-checkbox-field' }
							key={ `place_holder_block_${ action.id + index }` }
							checked={ getNotificationsFailed( action.id ).active }
							label={ getActionLabel( action.type ) }
							help={ gatewayActionAttributes( action ) }
							onChange={ active => setNotificationsFailed( action.id, {
								active,
								type: action.type
							} ) }
						/>;
					} ) }
				</div>
			</BaseControl>
		</> }
		<SelectControl
			label={ __( 'Price/amount field', 'jet-form-builder' ) }
			key={ 'form_fields_price_field' }
			value={ gateway.price_field }
			labelPosition='side'
			onChange={ newVal => {
				setGateway( ( prevArgs ) => ( {
					...prevArgs,
					price_field: newVal
				} ) );
			} }
			options={ formFields }
		/>
		<BaseControl
			key="payment_result_macros_base_control"
		>
			<h4>
				{ __( 'Available macros list: ', 'jet-form-builder' ) }<br/>
				{ __( '%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder' ) }<br/>
				{ __( '%gateway_status% - payemnt status returned from payment gateway;', 'jet-form-builder' ) }<br/>
				{ __( '%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder' ) }<br/>
			</h4>
		</BaseControl>

		<TextareaControl
			key="payment_result_message_success"
			label={ __( 'Payment success message', 'jet-form-builder' ) }
			value={ getResultMessage( 'success' ) }
			onChange={ newValue => setResultMessage( 'success', newValue ) }
		/>
		<TextareaControl
			key="payment_result_message_failed"
			label={ __( 'Payment failed message', 'jet-form-builder' ) }
			value={ getResultMessage( 'failed' ) }
			onChange={ newValue => setResultMessage( 'failed', newValue ) }
		/>
		{
			activeActions.find( action => action.type === 'redirect_to_page' ) &&
			<CheckboxControl
				key="checkbox_block_redirect_to_page"
				checked={ gateway.use_success_redirect }
				label={ __( 'Use redirect URL from Redirect notification', 'jet-form-builder' ) }
				onChange={ value => {
					setGateway( ( prevArgs ) => ( {
						...prevArgs,
						use_success_redirect: value
					} ) );
				} }
			/>
		}
	</>;

}
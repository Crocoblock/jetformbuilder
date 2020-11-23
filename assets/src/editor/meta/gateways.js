import Tools from "../tools/tools";

function Gateways() {

	if ( ! window.JetFormEditorData.gateways.allowed ) {
		return;
	}

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
	} = wp.components;

	const {
		registerPlugin
	} = wp.plugins;

	const {
		PluginDocumentSettingPanel
	} = wp.editPost;

	const {
		useSelect,
		useDispatch
	} = wp.data;

	const {
		useState,
		useEffect
	} = wp.element;

	const DocumentSettingPanel = () => {

		const gatewaysData = window.JetFormEditorData.gateways;

		const meta = useSelect( ( select ) => {
			return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
		} );

		const {
			editPost
		} = useDispatch( 'core/editor' );

		const activeActions = JSON.parse( meta._jf_actions );

		const [args, setArgs] = useState( JSON.parse( meta._jf_gateways ) );
		const [isEdit, setEdit] = useState( false );

		const closeModal = () => {
			setEdit( false );

			['notifications_before', 'notifications_failed', 'notifications_success'].forEach( name => {
				if ( ! args[ name ] ) {
					args[ name ] = {};
					return;
				}
				Object.entries( args[ name ] ).forEach( ( [action, isChecked] ) => {
					if ( ! isChecked ) {
						delete args[ name ][ action ];
					}
				} )
			} );
		};

		const getActionLabel = ( type ) => {
			return ( window.jetFormActionTypes.find( el => el.id === type ).name );
		};

		/**
		 * Used for set notifications and gateway type settings
		 *
		 * @param when
		 * @param type
		 * @param newValue
		 */
		const setValueInObject = ( when, type, newValue ) => {
			setArgs( ( prevArgs ) => {
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
			if ( args[ when ] && args[ when ][ type ] ) {
				return args[ when ][ type ];
			}
			return isEmptyResult;
		};

		const setResultMessage = ( key, value ) => {
			setValueInObject( 'messages', key, value );
		};
		const getResultMessage = ( key ) => {
			return getNotifications( 'messages', key, gatewaysData.messages[ key ] );
		};

		const setPayPalSetting = ( key, value ) => {
			setValueInObject( 'paypal', key, value );
		};
		const getPayPalSetting = ( key ) => {
			return getNotifications( 'paypal', key, '' );
		};


		const setNotificationsBefore = ( type, newValue ) => {
			setValueInObject( 'notifications_before', type, newValue );
		};
		const getNotificationsBefore = ( type ) => {
			return getNotifications( 'notifications_before', type );
		};


		const setNotificationsFailed = ( type, newValue ) => {
			setValueInObject( 'notifications_failed', type, newValue );
		};
		const getNotificationsFailed = ( type ) => {
			return getNotifications( 'notifications_failed', type );
		};

		const setNotificationsSuccess = ( type, newValue ) => {
			setValueInObject( 'notifications_success', type, newValue );
		};
		const getNotificationsSuccess = ( type ) => {
			return getNotifications( 'notifications_success', type );
		};

		useEffect( () => {
			editPost( {
				meta: ( {
					...meta,
					_jf_gateways: JSON.stringify( args )
				} )
			} );

		} );

		const formFields = Tools.getFormFieldsBlocks();

		return (
			<PluginDocumentSettingPanel
				name={ 'jf-gateways' }
				title={ 'Gateways Settings' }
				key={ 'jf-gateways-panel' }
			>
				<div
					key='jet-form/manage-gateways'
					style={ {
						textAlign: 'center'
					} }
				>
					<Button
						isSecondary
						onClick={ () => setEdit( true ) }
						icon={ 'admin-tools' }
						style={ {
							marginBottom: '15px'
						} }
					>
						{ __( 'Manage Items' ) }
					</Button>
					{ isEdit && (
						<Modal
							onRequestClose={ closeModal }
							className={ 'jet-form-edit-modal' }
							style={ { width: '60vw' } }
							title={ 'Edit Manual Options' }
						>
							<div>
								<div className="jet-form-edit-modal__content">
									<BaseControl
										label={ __( 'If you want to process any payments on this form submission, please select payment gateway', 'jet-form-builder' ) }
										key="check_gateway_type_control"
									>
										<div>
											<RadioControl
												key={ 'gateways_radio_control' }
												selected={ args.gateway }
												options={ [
													{ label: 'None', value: 'none' },
													...gatewaysData.list
												] }
												onChange={ newVal => {
													setArgs( ( prevArgs ) => ( {
														...prevArgs,
														gateway: newVal
													} ) );
												} }
											/>
										</div>

									</BaseControl>
									{ 'paypal' === args.gateway && <React.Fragment>
										<BaseControl
											label={ __( 'Client ID', 'jet-form-builder' ) }
											key="client_id_base_control"
										>
											<TextControl
												key='paypal_client_id_setting'
												value={ getPayPalSetting( 'client_id' ) }
												onChange={ newVal => setPayPalSetting( 'client_id', newVal ) }
											/>
										</BaseControl>
										<BaseControl
											label={ __( 'Secret Key', 'jet-form-builder' ) }
											key="secret_key_base_control"
										>
											<TextControl
												key='paypal_secret_setting'
												value={ getPayPalSetting( 'secret' ) }
												onChange={ newVal => setPayPalSetting( 'secret', newVal ) }
											/>
										</BaseControl>
										<BaseControl
											label={ __( 'Currency Code', 'jet-form-builder' ) }
											key="currency_code_base_control"
										>
											<TextControl
												key='paypal_currency_code_setting'
												value={ getPayPalSetting( 'currency' ) }
												onChange={ newVal => setPayPalSetting( 'currency', newVal ) }
											/>
										</BaseControl>
									</React.Fragment> }
									<BaseControl
										label={ __( 'Before payment processed:', 'jet-form-builder' ) }
										key="before_payment_base_control"
									>
										<div>
											{ activeActions.map( ( action, index ) => {
												if ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) {
													return;
												}
												return <CheckboxControl
													className={ 'jet-forms-checkbox-field' }
													key={ `place_holder_block_${ action.type + index }` }
													checked={ getNotificationsBefore( action.type ) }
													label={ getActionLabel( action.type ) }
													onChange={ value => setNotificationsBefore( action.type, value ) }
												/>;
											} ) }
										</div>
									</BaseControl>
									<BaseControl
										label={ __( 'On successful payment:', 'jet-form-builder' ) }
										key="success_payment_base_control"
									>
										<div>
											{ activeActions.map( ( action, index ) => {
												if ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) {
													return;
												}
												return <CheckboxControl
													className={ 'jet-forms-checkbox-field' }
													key={ `place_holder_block_${ action.type + index }` }
													checked={ getNotificationsSuccess( action.type ) }
													label={ getActionLabel( action.type ) }
													onChange={ value => setNotificationsSuccess( action.type, value ) }
												/>;
											} ) }
										</div>
									</BaseControl>
									<BaseControl
										label={ __( 'On failed payment:', 'jet-form-builder' ) }
										key="failed_payment_base_control"
									>
										<div>
											{ activeActions.map( ( action, index ) => {
												if ( action.type === 'insert_post' || action.type === 'redirect_to_page' ) {
													return;
												}
												return <CheckboxControl
													className={ 'jet-forms-checkbox-field' }
													key={ `place_holder_block_${ action.type + index }` }
													checked={ getNotificationsFailed( action.type ) }
													label={ getActionLabel( action.type ) }
													onChange={ value => setNotificationsFailed( action.type, value ) }
												/>;
											} ) }
										</div>
									</BaseControl>
									<BaseControl
										label={ __( 'Price/amount field', 'jet-form-builder' ) }
										key="price_field_base_control"
									>
										<div>
											<SelectControl
												key={ 'form_fields_price_field' }
												value={ args.price_field }
												onChange={ newVal => {
													setArgs( ( prevArgs ) => ( {
														...prevArgs,
														price_field: newVal
													} ) );
												} }
												options={ formFields }
											/>
										</div>
									</BaseControl>
									<BaseControl
										label={ __( 'Payment success message', 'jet-form-builder' ) }
										key="payment_result_success_base_control"
									>
										<div>
											<TextareaControl
												key="payment_result_message_success"
												value={ getResultMessage( 'success' ) }
												onChange={ newValue => setResultMessage( 'success', newValue ) }
											/>
										</div>
									</BaseControl>
									<BaseControl
										label={ __( 'Payment failed message', 'jet-form-builder' ) }
										key="payment_result_failed_base_control"
									>
										<div>
											<TextareaControl
												key="payment_result_message_failed"
												value={ getResultMessage( 'failed' ) }
												onChange={ newValue => setResultMessage( 'failed', newValue ) }
											/>
										</div>
									</BaseControl>
								</div>
							</div>
						</Modal>
					) }
				</div>
			</PluginDocumentSettingPanel>
		)
	};

	registerPlugin( 'jf-gateways-panel', {
		render: DocumentSettingPanel,
		icon: null,
	} );
}

export default Gateways;

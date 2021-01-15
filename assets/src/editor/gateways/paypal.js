const { __ } = wp.i18n;

const {
	TextControl,
} = wp.components;


export default function PayPal( {
					 setValueInObject,
					 getNotifications
				 } ) {

	const setSetting = ( key, value ) => {
		setValueInObject( 'paypal', key, value );
	};
	const getSetting = ( key ) => {
		return getNotifications( 'paypal', key, '' );
	};

	return <>
		<TextControl
			label={ __( 'Client ID', 'jet-form-builder' ) }
			key='paypal_client_id_setting'
			value={ getSetting( 'client_id' ) }
			onChange={ newVal => setSetting( 'client_id', newVal ) }
		/>
		<TextControl
			label={ __( 'Secret Key', 'jet-form-builder' ) }
			key='paypal_secret_setting'
			value={ getSetting( 'secret' ) }
			onChange={ newVal => setSetting( 'secret', newVal ) }
		/>
		<TextControl
			label={ __( 'Currency Code', 'jet-form-builder' ) }
			key='paypal_currency_code_setting'
			value={ getSetting( 'currency' ) }
			onChange={ newVal => setSetting( 'currency', newVal ) }
		/>
	</>;
}
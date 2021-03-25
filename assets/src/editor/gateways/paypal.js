const { __ } = wp.i18n;

const {
	TextControl,
} = wp.components;

const {
	registerGateway,
	gatewayLabel
} = JFBFunctions;

const label = gatewayLabel( 'paypal' );

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
			label={ label( 'client_id' ) }
			key='paypal_client_id_setting'
			value={ getSetting( 'client_id' ) }
			onChange={ newVal => setSetting( 'client_id', newVal ) }
		/>
		<TextControl
			label={ label( 'secret' ) }
			key='paypal_secret_setting'
			value={ getSetting( 'secret' ) }
			onChange={ newVal => setSetting( 'secret', newVal ) }
		/>
		<TextControl
			label={ label( 'currency' ) }
			key='paypal_currency_code_setting'
			value={ getSetting( 'currency' ) }
			onChange={ newVal => setSetting( 'currency', newVal ) }
		/>
	</>;
}

registerGateway( 'paypal', PayPal );


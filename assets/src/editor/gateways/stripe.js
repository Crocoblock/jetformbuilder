const { __ } = wp.i18n;

const {
	TextControl,
} = wp.components;


export default function Stripe( {
					 setValueInObject,
					 getNotifications
				 } ) {

	const setSetting = ( key, value ) => {
		setValueInObject( 'stripe', key, value );
	};
	const getSetting = ( key ) => {
		return getNotifications( 'stripe', key, '' );
	};

	return <>
		<TextControl
			label={ __( 'Public Key', 'jet-form-builder' ) }
			key='paypal_public_setting'
			value={ getSetting( 'public' ) }
			onChange={ newVal => setSetting( 'public', newVal ) }
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
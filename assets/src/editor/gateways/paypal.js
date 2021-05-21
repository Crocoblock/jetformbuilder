const { __ } = wp.i18n;

const {
		  TextControl,
		  ToggleControl,
	  } = wp.components;

const {
		  registerGateway,
		  gatewayLabel,
		  globalTab,
	  } = JetFBActions;

const label = gatewayLabel( 'paypal' );
const currentTab = globalTab( { slug: 'paypal' } );

export default function PayPal( {
									setValueInObject,
									getNotifications,
								} ) {

	const setSetting = ( key, value ) => {
		setValueInObject( 'paypal', key, value );
	};
	const getSetting = ( key ) => {
		return getNotifications( 'paypal', key, '' );
	};

	const isGlobal = getNotifications( 'paypal', 'use_global', false );

	const getManualOrGlobal = key => {
		return isGlobal
			? currentTab[ key ]
			: getSetting( key );
	};

	return <>
		<ToggleControl
			key={ 'use_global' }
			label={ label( 'use_global' ) }
			checked={ getSetting( 'use_global' ) }
			onChange={ newVal => setSetting( 'use_global', newVal ) }
		/>
		<TextControl
			label={ label( 'client_id' ) }
			key='paypal_client_id_setting'
			value={ getManualOrGlobal( 'client_id' ) }
			onChange={ newVal => setSetting( 'client_id', newVal ) }
			disabled={ isGlobal }
		/>
		<TextControl
			label={ label( 'secret' ) }
			key='paypal_secret_setting'
			value={ getManualOrGlobal( 'secret' ) }
			onChange={ newVal => setSetting( 'secret', newVal ) }
			disabled={ isGlobal }
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


const {
		  TextControl,
		  BaseControl,
	  } = wp.components;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const { __ } = wp.i18n;

function ActionMessages( props ) {

	const {
			  settings,
			  source,
			  getMapField,
			  setMapField,
			  messages,
			  onChangeSetting,
		  } = props;

	useEffect( () => {
		if ( ! settings || ! settings.messages ) {
			const messages = {};

			Object.entries( source.__messages ).forEach( ( [ type, data ] ) => {
				messages[ type ] = data.value;
			} )

			onChangeSetting( messages, 'messages' );
		}
	} );

	const setMessage = ( value, nameField ) => {
		const source = 'messages';

		setMapField( { value, nameField, source } );
	};

	const getMessage = name => {
		const source = 'messages';

		return getMapField( { name, source } )
	};

	return <BaseControl
		label={ __( 'Messages Settings:' ) }
		key='messages_settings_fields'
	>
		<div className='jet-user-fields-map__list'>
			{ settings.messages && Object.entries( settings.messages )
				.map( ( [ type, data ], id ) => <div
						className="jet-user-meta__row"
						key={ 'message_' + type + id }
					>
						<TextControl
							key={ type + id }
							label={ messages( type ).label }
							value={ getMessage( type ) }
							onChange={ newValue => setMessage( newValue, type ) }
						/>
					</div>,
				) }

		</div>
	</BaseControl>;
}

export default ActionMessages;
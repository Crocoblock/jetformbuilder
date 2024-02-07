import ActionMessagesSlotFills from './ActionMessagesSlotFills';

const {
	      TextControl,
	      BaseControl,
      } = wp.components;

const {
	      useMemo,
	      useEffect,
      } = wp.element;

const { __ } = wp.i18n;

function ActionMessageRow( props ) {
	const {
		      type,
		      label,
		      value,
		      onChange,
	      } = props;

	const { Slot: RowSlot } = useMemo( () => ActionMessagesSlotFills[ type ],
		[ type ] );

	return <div
		className="jet-user-meta__row"
	>
		<RowSlot fillProps={ props }>
			{ ( fills ) => (
				Boolean( fills?.length ) ? fills :
				<TextControl
					label={ label }
					value={ value }
					onChange={ onChange }
				/>
			) }
		</RowSlot>
	</div>;
}

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
		const oldMessages = settings.messages || {};
		const localMessages    = {};

		Object.entries( source.__messages ).forEach( ( [ type, data ] ) => {
			if ( !oldMessages[ type ] ) {
				localMessages[ type ] = data.value;
			}
		} );

		if ( localMessages ) {
			onChangeSetting( { ...oldMessages, ...localMessages }, 'messages' );
		}
	}, [] );

	const setMessage = ( value, nameField ) => {
		const localSource = 'messages';

		setMapField( { value, nameField, source: localSource } );
	};

	const getMessage = name => {
		const localSource = 'messages';

		return getMapField( { name, source: localSource } );
	};

	return <BaseControl
		label={ __( 'Messages Settings:', 'jet-form-builder' ) }
		key="messages_settings_fields"
	>
		<div className="jet-user-fields-map__list">
			{ settings.messages && Object.entries( settings.messages ).
				map( ( [ type ], id ) => <ActionMessageRow
						key={ 'message_' + type + id }
						type={ type }
						label={ messages( type ).label }
						value={ getMessage( type ) }
						onChange={ newValue => setMessage( newValue, type ) }
					/>,
				) }
		</div>
	</BaseControl>;
}

export default ActionMessages;
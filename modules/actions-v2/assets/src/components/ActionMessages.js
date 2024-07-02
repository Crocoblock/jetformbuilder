import ActionMessagesSlotFills from './ActionMessagesSlotFills';
import { TextControl, BaseControl } from '@wordpress/components';
import { useMemo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

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
		const messages    = {};

		Object.entries( source.__messages ).forEach( ( [ type, data ] ) => {
			if ( !oldMessages[ type ] ) {
				messages[ type ] = data.value;
			}
		} );

		if ( messages ) {
			onChangeSetting( { ...oldMessages, ...messages }, 'messages' );
		}
	}, [] );

	const setMessage = ( value, nameField ) => {
		const source = 'messages';

		setMapField( { value, nameField, source } );
	};

	const getMessage = name => {
		const source = 'messages';

		return getMapField( { name, source } );
	};

	return <BaseControl
		label={ __( 'Messages Settings:', 'jet-form-builder' ) }
		key="messages_settings_fields"
	>
		<div className="jet-user-fields-map__list">
			{ settings.messages && Object.entries( settings.messages ).
				map( ( [ type, data ], id ) => <ActionMessageRow
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

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionMessages = ActionMessages;

export default ActionMessages;
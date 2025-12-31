/* eslint-disable import/no-extraneous-dependencies */
import ActionMessagesSlotFills from './ActionMessagesSlotFills';
import { useMemo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	Help,
	Label,
	StyledTextControl,
	TableListStyle,
} from 'jet-form-builder-components';
import { TableListRow, TableListContainer } from 'jet-form-builder-actions';

function ActionMessageRow( props ) {
	const {
		type,
		label,
		value,
		onChange,
	} = props;

	const { Slot: RowSlot } = useMemo( () => ActionMessagesSlotFills[ type ],
		[ type ] );

	return <TableListRow
			tag="jfb-message-item"
			label={ label }
		>
		{ ( { htmlId } ) => (
			<RowSlot fillProps={ { ...props, id: htmlId } }>
				{ ( fills ) => (
					Boolean( fills?.length ) ? fills :
					<StyledTextControl
						id={ htmlId }
						value={ value }
						onChange={ onChange }
					/>
				) }
			</RowSlot>
		) }
	</TableListRow>;
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
		const newMessages = {};

		Object.entries( source.__messages ).forEach( ( [ type, data ] ) => {
			if ( !oldMessages[ type ] ) {
				newMessages[ type ] = data.value;
			}
		} );

		if ( newMessages ) {
			onChangeSetting( { ...oldMessages, ...newMessages }, 'messages' );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const setMessage = ( value, nameField ) => {
		const sourceName = 'messages';

		setMapField( { value, nameField, source: sourceName } );
	};

	const getMessage = name => {
		const sourceName = 'messages';

		return getMapField( { name, source: sourceName } );
	};

	return <div createId={ false } className={TableListStyle.Wrap}>
		<Label className={TableListStyle.Label}>
			{ __( `Messages Settings`, 'jet-form-builder' ) }
		</Label>
		<Help className={TableListStyle.WhiteSpaceNormal}>
			Change error message according to USER LOGIN form field; it can be username or email.
		</Help>
		<TableListContainer>
			{ settings.messages && Object.entries( settings.messages ).
				map( ( [ type ] ) => <ActionMessageRow
						key={ 'message_' + type }
						type={ type }
						label={ messages( type ).label }
						value={ getMessage( type ) }
						onChange={ newValue => setMessage( newValue, type ) }
					/>,
			) }
		</TableListContainer>
	</div>;
}

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionMessages = ActionMessages;

export default ActionMessages;
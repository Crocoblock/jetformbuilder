/* eslint-disable import/no-extraneous-dependencies */
import ActionMessagesSlotFills from './ActionMessagesSlotFills';
import { Card, Flex } from '@wordpress/components';
import { useMemo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	Label,
	RowControl,
	RowControlEndStyle,
	StyledTextControl,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { useInstanceId } from '@wordpress/compose';

const StyledCard = styled( Card )`
    padding: 1em;
`;

function ActionMessageRow( props ) {
	const {
		      type,
		      label,
		      value,
		      onChange,
	      } = props;

	const { Slot: RowSlot } = useMemo( () => ActionMessagesSlotFills[ type ],
		[ type ] );

	const htmlId = useInstanceId( ActionMessageRow, 'jfb-message-item' );

	return <StyledCard elevation={ 2 }>
		<RowControl
			createId={ false }
			controlSize={ 1 }
		>
			<Label htmlFor={ htmlId }>
				{ label }
			</Label>
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
		</RowControl>
	</StyledCard>;
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

	return <RowControl createId={ false }>
		<Label>
			{ __( 'Messages Settings', 'jet-form-builder' ) }
		</Label>
		<Flex
			className={ cx( RowControlEndStyle ) }
			direction="column"
			gap={ 4 }
		>
			{ settings.messages && Object.entries( settings.messages ).
				map( ( [ type ] ) => <ActionMessageRow
						key={ 'message_' + type }
						type={ type }
						label={ messages( type ).label }
						value={ getMessage( type ) }
						onChange={ newValue => setMessage( newValue, type ) }
					/>,
				) }
		</Flex>
	</RowControl>;
}

// backward compatibility
window.JetFBComponents                = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionMessages = ActionMessages;

export default ActionMessages;
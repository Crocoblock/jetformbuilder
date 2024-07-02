import useActionsEdit from '../hooks/useActionsEdit';
import ActionListItemContext from '../context/ActionListItemContext';
import { styled } from '@linaria/react';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useContext } from '@wordpress/element';

const EventButton = styled.button`
    padding: 0 4px;
    border-radius: 5px;
    color: #5c5c5c;
    font-size: 0.9em;
    background-color: #f3f4f5;
    cursor: pointer;
    margin: auto;
    border: 0;
    font-family: monospace;

    &:after {
        content: ' X';
        font-weight: bold;
    }

    &:focus {
        outline: 1px solid #5c5c5c;
        background-color: #e7e8e9;
    }
`;

function EventItem( props ) {
	const {
		      slug,
		      index: eventIndex,
	      } = props;
	const {
		      action,
	      } = useContext( ActionListItemContext );

	const event = useSelect(
		select => select( 'jet-forms/events' ).getType( slug ),
		[ slug ],
	);

	const { updateActionObj } = useActionsEdit();

	const onDelete = () => {
		action.events.splice( eventIndex, 1 );

		updateActionObj( action.id, { ...action } );
	};

	const title = [
		event?.title ?? '',
		__( '(Click to delete)', 'jet-form-builder' ),
	].join( ' ' );

	return <EventButton
		type={ 'button' }
		title={ title }
		onClick={ onDelete }
	>
		{ event?.value ?? slug }
	</EventButton>;
}

function EventsList( props ) {
	const { events = [] } = props;

	return events.map( ( event, index ) => <EventItem
		key={ event }
		slug={ event }
		index={ index }
	/> );
}

// backward compatibility
window.JetFBComponents            = window?.JetFBComponents ?? {};
window.JetFBComponents.EventsList = EventsList;

export default EventsList;
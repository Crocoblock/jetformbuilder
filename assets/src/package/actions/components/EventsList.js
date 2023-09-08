import useActionsEdit from '../hooks/useActionsEdit';
import ActionListItemContext from '../context/ActionListItemContext';

const {
	      useSelect,
      } = wp.data;

const {
	      useContext,
      } = wp.element;

const { __ } = wp.i18n;

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

	return <button
		type={ 'button' }
		className={ 'jfb-events-item' }
		title={ title }
		onClick={ onDelete }
	>
		{ event?.value ?? slug }
	</button>;
}

function EventsList( props ) {
	const { events = [] } = props;

	return events.map( ( event, index ) => <EventItem
		key={ event }
		slug={ event }
		index={ index }
	/> );
}

export default EventsList;
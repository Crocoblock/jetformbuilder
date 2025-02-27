import useLoopedAction from '../hooks/useLoopedAction';
import EventsList from './EventsList';
import { CardFooter } from '@wordpress/components';

/**
 * @param  children.children
 * @param  children
 * @param  props
 * @return {boolean|JSX.Element}
 */
function ActionItemFooter( { children, ...props } = {} ) {
	const { action }     = useLoopedAction();
	const excludedEvents = window.JetFormEditorData.actionConditionExcludeEvents;

	if ( excludedEvents[ action.type ] ) {
		if ( action.events?.length ) {
			action.events = action.events.filter( item => !excludedEvents[ action.type ].includes( item ) );
		}
	}

	return Boolean( action.events?.length ) && <CardFooter
		style={ {
			flexWrap: 'wrap',
			rowGap: '0.5em',
		} }
		{ ...props }
	>
		<EventsList events={ action.events }/>
		{ children }
	</CardFooter>;
}

// backward compatibility
window.JetFBComponents                  = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionItemFooter = ActionItemFooter;

export default ActionItemFooter;
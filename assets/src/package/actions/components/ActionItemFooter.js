import EventsList from './EventsList';
import useLoopedAction from '../hooks/useLoopedAction';

const {
	      CardFooter,
      } = wp.components;

/**
 * @param children
 * @param props
 * @returns {boolean|JSX.Element}
 * @constructor
 */
function ActionItemFooter( { children, ...props } = {} ) {
	const { action } = useLoopedAction();

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

export default ActionItemFooter;
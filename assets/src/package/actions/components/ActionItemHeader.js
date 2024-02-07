import useLoopedAction from '../hooks/useLoopedAction';

const {
	      applyFilters,
      } = wp.hooks;

const {
	      CardHeader,
      } = wp.components;

function ActionItemHeader( { children, ...props } = {} ) {
	const { action } = useLoopedAction();

	const header = applyFilters(
		`jet.fb.section.actions.header.${ action.type }`,
		null,
		action,
	);

	if ( !header ) {
		return null;
	}

	return <CardHeader { ...props }>
		{ header }
		{ children }
	</CardHeader>;
}

export default ActionItemHeader;
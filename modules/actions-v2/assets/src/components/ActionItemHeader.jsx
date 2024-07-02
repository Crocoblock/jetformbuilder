import useLoopedAction from '../hooks/useLoopedAction';
import { applyFilters } from '@wordpress/hooks';
import { CardHeader } from '@wordpress/components';

/**
 * @param children
 * @param props
 * @returns {JSX.Element|null}
 */
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

// backward compatibility
window.JetFBComponents                  = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionItemHeader = ActionItemHeader;

export default ActionItemHeader;
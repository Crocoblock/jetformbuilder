import withCurrentAction from '../hooks/withCurrentAction';
import withSelectActionLoading from '../hooks/withSelectActionLoading';
import FetchApiButton from './FetchApiButton';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

function ActionFetchButton( {
	currentAction,
	...props
} ) {

	return <FetchApiButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

// backward compatibility
window.JetFBComponents                   = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionFetchButton = ActionFetchButton;

export default compose(
	withSelect( withCurrentAction ),
	withSelect( withSelectActionLoading ),
)( ActionFetchButton );
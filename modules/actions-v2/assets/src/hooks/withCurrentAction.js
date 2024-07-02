import { STORE_NAME } from '../store';

function withCurrentAction( select ) {
	const currentAction = select( STORE_NAME ).getCurrentAction();

	return { currentAction };
}

// backward compatibility
window.JetFBHooks                   = window.JetFBHooks ?? {};
window.JetFBHooks.withCurrentAction = withCurrentAction;

export default withCurrentAction;
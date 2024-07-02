import BaseAction from '../abstract/BaseAction';
import ActionsFlow from '../abstract/ActionsFlow';

/**
 * @param flow
 * @returns {ActionsFlow}
 */
function convertFlow( flow = [] ) {
	const actions = [];

	for ( const flowAction of flow ) {
		const current = new BaseAction( flowAction );
		current.refactorSettings();

		actions.push( current );
	}

	return new ActionsFlow( actions );
}

//backward compatibility
window.JetFBActions             = window.JetFBActions ?? {};
window.JetFBActions.convertFlow = convertFlow;

export default convertFlow;
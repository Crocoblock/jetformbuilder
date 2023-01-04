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

		const settings   = current.settings;
		current.settings = {};

		current.selfSettings = settings;

		actions.push( current );
	}

	return new ActionsFlow( actions );
}

export default convertFlow;
import DEFAULT_LOADING_STATE from './loading.state';

export function getLoadingIndex(state, actionId) {
	return state.loadingState.findIndex(action => action.id === actionId);
}

export function getLoading(state, actionId) {
	const actionIndex = getLoadingIndex(state, actionId);

	return actionIndex !== -1
	       ? state.loadingState[ actionIndex ]
	       : { ...DEFAULT_LOADING_STATE };
}

export function getComputedFields(state) {
	return state.computedFields;
}

export function getActionsMap(state) {
	const map = {};

	for (const listElement of state.types) {
		map[ listElement.type ] = listElement;
	}

	return map;
}

export function getActions(state) {
	return state.types;
}

export function getCategories(state) {
	return state.categories;
}

export function getAction(state, actionType) {
	return state.types.find(({ type }) => type === actionType);
}

export function isShowActionsInserterModal(state) {
	return state.showActionsInserterModal;
}

export function isSettingsModal(state) {
	return 'settings' === state.meta?.modalType;
}

export function isConditionalModal(state) {
	return 'conditions' === state.meta?.modalType;
}

export function isFixed(state, actionType) {
	const action = getAction(state, actionType);

	return action?.fixed ?? false;
}

/**
 * Use to determine how was opened the action settings modal
 *
 * @param  state
 * @return {string}
 */
export function getOpenScenario(state) {
	return state.meta?.scenario;
}

export function getMetaIndex(state) {
	return state.meta?.index;
}

export function getErrorVisibility(state) {
	return state.meta?.errorsShow;
}

export function getCurrentAction(state) {
	return state.currentAction;
}

export function getCurrentEdit(state) {
	const type = state.currentAction?.type ?? false;

	return getAction(state, type)?.edit;
}

export function getCurrentSettings(state) {
	const settings = state.currentAction?.settings ?? {};
	const type = state.currentAction?.type ?? false;

	return settings[ type ] ?? {};
}

export function getCurrentLoading(state) {
	const actionId = state.currentAction?.id;

	return getLoading(state, actionId);
}

export function getAllLoading(state) {
	return state.loadingState;
}

import { getLoadingItem } from './functions';
import proActions from './pro.actions';
import categories from './categories';

export default {
	currentAction: {},
	types: [
		...proActions,
	],
	categories: [
		...categories,
	],
	meta: {},
	loadingState: [
		getLoadingItem(),
	],
	computedFields: [],
	showActionsInserterModal: false,
};
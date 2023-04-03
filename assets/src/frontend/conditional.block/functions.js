import ConditionFieldItem from './ConditionFieldItem';
import ConditionalBlock from './ConditionalBlock';
import ConditionChecker from './ConditionChecker';
import MultipleConditionChecker from './MultipleConditionChecker';
import OrOperatorItem from './OrOperatorItem';
import DateTimeConditionChecker from './DateTimeConditionChecker';
import ConditionRenderStateItem from './ConditionRenderStateItem';
import CalculatedFieldChecker from './CalculatedFieldChecker';

const { applyFilters } = JetPlugins.hooks;

const getItemTypes = () => applyFilters(
	'jet.fb.conditional.types',
	[
		ConditionRenderStateItem,
		OrOperatorItem,
		ConditionFieldItem,
	],
);
/**
 * @type {ConditionItem[]}
 */
let itemTypes      = [];

const getCheckers = () => applyFilters(
	'jet.fb.conditional.checkers',
	[
		MultipleConditionChecker,
		DateTimeConditionChecker,
		CalculatedFieldChecker,
		ConditionChecker,
	],
);

let checkers = [];

/**
 * @param options {{}}
 * @param list {ConditionsList}
 * @return {*}
 */
function createConditionItem( options, list ) {
	if ( !itemTypes.length ) {
		itemTypes = getItemTypes();
	}

	for ( const dataType of itemTypes ) {
		/**
		 * @type {ConditionItem}
		 */
		const current = new dataType();

		if ( !current.isSupported( options ) ) {
			continue;
		}
		current.setList( list );
		current.setOptions( options );

		return current;
	}
}

/**
 * @param node
 * @param root
 * @return {ConditionalBlock}
 */
function createConditionalBlock( node, root ) {
	if ( node.hasOwnProperty( 'jfbConditional' ) ) {
		return node.jfbConditional;
	}
	const block = new ConditionalBlock( node, root );

	block.observe();
	block.list.onChangeRelated();

	return block;
}

/**
 * @param input {InputData}
 */
function createChecker( input ) {
	if ( !checkers.length ) {
		checkers = getCheckers();
	}

	for ( const checker of checkers ) {
		const current = new checker();

		if ( !current.isSupported( input ) ) {
			continue;
		}

		return current;
	}

	return null;
}

export {
	createConditionItem,
	createConditionalBlock,
	createChecker,
};
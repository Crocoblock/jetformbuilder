import ConditionFieldItem from './ConditionFieldItem';
import ConditionalBlock from './ConditionalBlock';
import ConditionChecker from './ConditionChecker';
import MultipleConditionChecker from './MultipleConditionChecker';
import OrOperatorItem from './OrOperatorItem';

const { applyFilters } = wp.hooks;

const getItemTypes = () => applyFilters(
	'jet.fb.conditional.types',
	[
		OrOperatorItem,
		ConditionFieldItem,
	],
);

let itemTypes = [];

const getCheckers = () => applyFilters(
	'jet.fb.conditional.checkers',
	[
		MultipleConditionChecker,
		ConditionChecker,
	],
);

let checkers = [];

function createConditionItem( options, block ) {
	if ( !itemTypes.length ) {
		itemTypes = getItemTypes();
	}

	for ( const dataType of itemTypes ) {
		const current = new dataType();

		if ( !current.isSupported( options ) ) {
			continue;
		}
		current.setOptions( options );
		current.setBlock( block );

		return current;
	}
}

function createConditionalBlock( node, root ) {
	if ( node.hasOwnProperty( 'jfbConditional' ) ) {
		return node.jfbConditional;
	}
	const block = new ConditionalBlock( node, root );

	block.observe();
	block.calculate();

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
import ConditionFieldItem from './ConditionFieldItem';
import ConditionPageStateItem from './ConditionPageStateItem';
import ConditionalBlock from './ConditionalBlock';
import ConditionChecker from './ConditionChecker';
import MultipleConditionChecker from './MultipleConditionChecker';
import OrOperatorItem from './OrOperatorItem';

const { applyFilters } = wp.hooks;

const itemTypes = [
	OrOperatorItem,
	ConditionFieldItem,
	ConditionPageStateItem,
];

const checkers = applyFilters(
	'jet.fb.conditional.checkers',
	[
		MultipleConditionChecker,
		ConditionChecker,
	],
);

function createConditionItem( options, block ) {
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
import ConditionFieldItem from './ConditionFieldItem';
import ConditionPageStateItem from './ConditionPageStateItem';
import ConditionalBlock from './ConditionalBlock';
import MultiStepState from '../multi.step/MultiStepState';

const itemTypes = [
	ConditionFieldItem,
	ConditionPageStateItem,
];

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

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );
	multistep.setPages();

	return multistep;
}

export { createConditionItem, createConditionalBlock, createMultiStep };
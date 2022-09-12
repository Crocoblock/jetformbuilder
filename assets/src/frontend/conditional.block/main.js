import { createChecker, createConditionalBlock } from './functions';
import ConditionalBlock from './ConditionalBlock';
import ConditionPageStateItem from './ConditionPageStateItem';

const { addAction } = wp.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/conditional-block',
	function ( observable ) {
		for ( const node of observable.rootNode.querySelectorAll(
			`[data-jfb-conditional]`,
		) ) {
			createConditionalBlock( node, observable );
		}
	},
);

addAction(
	'jet.fb.input.onObserve',
	'jet-form-builder/conditional-block',
	function ( input ) {
		input.checker = createChecker( input );
	},
);

window.JetFormBuilderAbstract.ConditionPageStateItem = ConditionPageStateItem;
window.JetFormBuilderAbstract.ConditionalBlock       = ConditionalBlock;
import { createChecker, createConditionalBlock } from './functions';
import ConditionalBlock from './ConditionalBlock';
import ConditionItem from './ConditionItem';
import ConditionsList from './ConditionsList';

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
	20,
);

addAction(
	'jet.fb.input.makeReactive',
	'jet-form-builder/conditional-block',
	function ( input ) {
		input.checker = createChecker( input );
	},
);

addAction(
	'jet.fb.conditional.block.runFunction',
	'jet-form-builder/conditional-block',
	/**
	 * @param funcName
	 * @param result
	 * @param conditionalBlock {ConditionalBlock}
	 */
	function ( funcName, result, conditionalBlock ) {
		if ( !funcName.hasOwnProperty( 'setCssClass' ) ) {
			return;
		}
		conditionalBlock.node.classList.toggle( funcName.setCssClass, result );
	},
);

window.JetFormBuilderAbstract = {
	...(
		window.JetFormBuilderAbstract ?? {}
	),
	ConditionItem,
	ConditionalBlock,
	createConditionalBlock,
	createChecker,
	ConditionsList,
};
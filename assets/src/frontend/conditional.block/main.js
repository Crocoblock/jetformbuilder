import { createChecker, createConditionalBlock } from './functions';
import ConditionalBlock from './ConditionalBlock';
import ConditionItem from './ConditionItem';
import ConditionsList from './ConditionsList';

const { addAction } = JetPlugins.hooks;

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
		if (
			'setCssClass' !== funcName ||
			!conditionalBlock.settings?.className
		) {
			return;
		}

		conditionalBlock.node.classList.toggle(
			conditionalBlock.settings.className,
			result,
		);
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

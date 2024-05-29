import DynamicCheckboxData from './DynamicCheckboxData';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/choice-with-check-mark',
	function ( inputs ) {
		inputs = [
			DynamicCheckboxData,
			...inputs,
		];

		return inputs;
	},
	20,
);
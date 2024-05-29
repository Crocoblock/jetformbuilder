import DynamicRadioData from './DynamicRadioData';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/choice-with-check-mark',
	function ( inputs ) {
		inputs = [
			DynamicRadioData,
			...inputs,
		];

		return inputs;
	},
	20,
);
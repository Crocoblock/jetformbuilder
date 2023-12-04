import ChoicesData from './input';
import SignalChoices from './signal';

const { addFilter } = JetPlugins.hooks;

addFilter(
	'jet.fb.inputs',
	'jet-form-builder/choices-field',
	function ( inputs ) {
		inputs = [ ChoicesData, ...inputs ];

		return inputs;
	},
);

addFilter(
	'jet.fb.signals',
	'jet-form-builder/choices-field',
	function ( signals ) {
		signals = [ SignalChoices, ...signals ];

		return signals;
	},
	/**
	 * @since 3.2.0 (for radio-field compatibility)
	 */
	20
);